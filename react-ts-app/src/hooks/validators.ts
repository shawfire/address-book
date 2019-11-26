import { defaultValidatorMessages } from './constansts';

export type ValidatorType = (v: string) => string;
export type ValidatorsArray = Array<ValidatorType>;

export const MandatoryValidator = (message: string = 'Required value') => (
  value: string
): string => (value.trim().length === 0 ? message : '');

const emailRegex = /^[a-zA-Z0-9_!#$%&‘’*+/=?`{|}~^-]+([.]{0,1}[a-zA-Z0-9_!#$%&‘’*+/=?`{|}~^-])*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z0-9_!#$%&‘’*+/=?`{|}~^-]{1,63}\.)+[a-zA-Z0-9_!#$%&‘’*+/=?`{|}~^-]{1,63}))$/i;
const mobileRegex = /^0[45][\d]{8}$/;
const mobilePrefixRegex = /^0[45]{1}[0-9]*$/;

export const EmailValidator = (
  message: string = defaultValidatorMessages.email
) => (value: string): string => (emailRegex.test(value.trim()) ? '' : message);

export const MobilePrefixValidator = (
  message: string = defaultValidatorMessages.mobilePrefix
) => (value: string): string => {
  return mobilePrefixRegex.test(value.trim()) ? '' : message;
};

export const MobileValidator = (
  message: string = defaultValidatorMessages.mobile
) => (value: string): string => {
  return mobileRegex.test(value.trim()) ? '' : message;
};

export const validate = (value: string, validators: ValidatorsArray) => {
  let errorMessage = '';
  for (let i = 0; i < validators.length; i++) {
    errorMessage = validators[i](value);
    if (errorMessage !== '') {
      break;
    }
  }
  return errorMessage;
};
