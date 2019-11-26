import React from 'react';
import FormHooks from '../FormHooks';
import { shallow, mount } from 'enzyme';
import SelfInviteForm from '../../components/SelfInviteForm/SelfInviteForm';
import InputField from '../../components/InputField/InputField';
import { MandatoryValidator } from '../validators';

function TestHook() {
  const [givenName, givenNameCheck] = FormHooks.useFormInput({
    name: 'givenName'
  });
  const [surname, surnameCheck] = FormHooks.useFormInput({
    name: 'surname',
    validators: [MandatoryValidator()]
  });
  return (
    <div>
      <input
        id='givenNameInputField'
        data-test='givenNameInputField'
        {...givenName}
      />
      <input
        id='surnameInputField'
        data-test='surnameInputField'
        {...surname}
      />
    </div>
  );
}

describe('FormHooks', () => {
  test('test FormHooks', async () => {
    const mockOnChanged = jest.fn();
    const mockOnBlur = jest.fn();
    const mockSetError = jest.fn();
    const mockValidate = jest.fn();

    FormHooks.useFormInput = jest.fn(() => [
      {
        id: '',
        name: '',
        type: 'text',
        maxLength: 10,
        value: '',
        onChange: mockOnChanged,
        onBlur: mockOnBlur,
        onKeyDown: jest.fn(),
        onMouseDown: jest.fn(),
        ref: React.createRef()
      },
      {
        error: '',
        setError: mockSetError,
        touched: false,
        validate: mockValidate
      }
    ]);
    const wrapper = shallow(<TestHook />);
    let inputField = wrapper.find('[data-test="givenNameInputField"]');
    const mockEvent = { target: { value: 'John' } };
    inputField.simulate('change', mockEvent);

    inputField = wrapper.find('[data-test="surnameInputField"]');
    inputField.simulate('blur');
    expect(mockOnBlur).toHaveBeenCalled();
  });
});
