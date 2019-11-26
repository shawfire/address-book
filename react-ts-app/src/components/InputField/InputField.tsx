import * as React from 'react';
import { StyledFieldWrapper } from './styled';
import { ErrorSvg } from '../Common/ErrorSvg';
import { StyledError } from '../Common/styled';

export interface InputPropTypes {
  id: string;
  name: string;
  type: string;
  'aria-describedby'?: string;
  value: string;
  maxLength?: number;
  autoFocus?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  onMouseDown: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  ref: React.RefObject<HTMLInputElement>;
}

export interface InputFieldPropTypes {
  id?: string;
  inputProps: InputPropTypes;
  label: string;
  errorMessage: string;
}

function InputField({ inputProps, label, errorMessage }: InputFieldPropTypes) {
  return (
    <StyledFieldWrapper errorMessage={errorMessage}>
      <label htmlFor={inputProps.id}>{label}</label>
      <input {...inputProps} />
      {errorMessage && (
        <StyledError id={`${inputProps.id}-error`}>
          <ErrorSvg />
          &nbsp;
          {errorMessage}
        </StyledError>
      )}
    </StyledFieldWrapper>
  );
}

export default InputField;
