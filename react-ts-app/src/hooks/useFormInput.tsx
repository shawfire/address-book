import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import { validate, ValidatorsArray } from './validators';
import { applyMask, removeMask, getEndInputValuePos } from './hooks-helpers';
import { InputPropTypes } from '../components/InputField/InputField';

export interface UseFormInputProps {
  initialValue?: string;
  name: string;
  maxLength?: number;
  allowedChars?: string;
  mask?: string;
  maskFillCharRegExp?: RegExp;
  maskCharRegExp?: RegExp;
  validators?: ValidatorsArray;
}

export function useFormInput({
  initialValue = '',
  name,
  maxLength,
  allowedChars = '.',
  mask = '',
  maskFillCharRegExp = /[\s]/,
  maskCharRegExp = /_/g,
  validators = [() => '']
}: UseFormInputProps): [
  InputPropTypes,
  {
    error: string;
    setError: React.Dispatch<any>;
    touched: boolean;
    validate: () => string;
  }
] {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState();
  const [touched, setTouched] = useState<boolean>(false);
  const ref: React.RefObject<HTMLInputElement> = useRef(null);
  const allowedCharsRegex = new RegExp(`^${allowedChars}*$`);
  const maxMaskedLength = (mask.match(maskCharRegExp) || []).length;

  // Preserve the cursor position when updating with a mask
  const [curPos, setCurPos] = useState();

  // Used to update the cursor position after a backspace outside the value
  const [goLeft, setGoLeft] = useState<boolean>(false);

  const delKeyCode = 8;
  let delPressed = false;
  let goLeftValue = false; // closure that doesn't cause a re-render

  useEffect(() => {
    resetCursorPosition();
  }, [value]);

  // value does not change
  // but the cursor position still needs to be updated after post render
  useEffect(() => {
    resetCursorPosition();
    goLeftValue = false;
  }, [goLeft]);

  // handle cursor changes in masked input field
  function resetCursorPosition() {
    if (!!mask) {
      if (ref && ref.current) {
        const endInputValuePos = getEndInputValuePos(value, mask);

        if (curPos === 0 || curPos <= endInputValuePos) {
          // return if cursor is inside value
          ref.current.setSelectionRange(curPos, curPos);
          return;
        }
        if (curPos > endInputValuePos) {
          ref.current.setSelectionRange(curPos, curPos);
        } else {
          ref.current.setSelectionRange(endInputValuePos, endInputValuePos);
        }
      }
    }
  }

  // handle backspace on maskedValue
  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (mask === '') {
      return;
    }
    if (e.keyCode === delKeyCode) {
      delPressed = true;
    }
  }

  function onMouseDown(e: React.MouseEvent<HTMLInputElement, MouseEvent>) {}

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const curPos = e.target.selectionStart;
    const maskedValue = e.target.value;

    const c = curPos && curPos > 0 && maskedValue.charAt(curPos - 1);
    let newCurPos = curPos;
    const endInputValuePos = getEndInputValuePos(value, mask);
    if (delPressed && curPos && curPos > 0) {
      if (maskedValue.charAt(curPos - 1) === ' ') {
        newCurPos && newCurPos--;
      }
      if (curPos >= endInputValuePos) {
        goLeftValue = true;
        setGoLeft(!goLeft);
      }
    } else if (!delPressed && newCurPos) {
      if (newCurPos > endInputValuePos + 1) {
        newCurPos = endInputValuePos + 1;
        if (maskFillCharRegExp.test(maskedValue.charAt(newCurPos - 1))) {
          newCurPos++;
        }
      } else if (maskFillCharRegExp.test(maskedValue.charAt(newCurPos))) {
        newCurPos++;
      }
    }
    setCurPos(newCurPos);
    const newValue = removeMask(maskedValue, mask);
    if (
      allowedCharsRegex.test(newValue) &&
      (mask.length === 0 || newValue.length <= maxMaskedLength)
    ) {
      setValue(applyMask(newValue, mask));
      if (touched) {
        setError(validate(newValue, validators));
      }
    }
    delPressed = false;
  }

  const setFocus = (ref: React.RefObject<HTMLInputElement>) =>
    ref && ref.current && ref.current.focus();

  function onBlur() {
    const error = validate(removeMask(value, mask), validators);
    setError(error);
    setTouched(true);
  }

  function callValidate() {
    const errorMessage = validate(removeMask(value, mask), validators);
    return errorMessage;
  }

  return [
    {
      id: name,
      name: name,
      type: 'text',
      'aria-describedby': `${name}-error`,
      maxLength,
      value,
      onChange,
      onBlur,
      onKeyDown,
      onMouseDown,
      ref
    },
    {
      error,
      setError,
      touched,
      validate: callValidate
    }
  ];
}
