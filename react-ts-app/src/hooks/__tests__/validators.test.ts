import {
  MandatoryValidator,
  validate,
  MobilePrefixValidator,
  MobileValidator,
  EmailValidator
} from '../validators';

describe('validators test', () => {
  it('EmailValidator valid', () => {
    expect(EmailValidator()('a@b.com')).toEqual('');
  });

  it('EmailValidator invalid', () => {
    expect(EmailValidator()('ab.c')).toEqual('Invalid email address.');
  });

  it('EmailValidator invalid with custom message', () => {
    expect(
      EmailValidator('There is an error in your email address.')('ab.c')
    ).toEqual('There is an error in your email address.');
  });

  it('MandatoryValidator valid', () => {
    expect(MandatoryValidator()('a@b.com')).toEqual('');
  });

  it('MandatoryValidator invalid', () => {
    expect(MandatoryValidator()('')).toEqual('Required value');
  });

  it('validators valid', () => {
    expect(validate('John Doe', [MandatoryValidator()])).toEqual('');
    expect(
      validate('a@b.com', [MandatoryValidator(), EmailValidator()])
    ).toEqual('');
  });

  it('validators invalid', () => {
    expect(validate('', [MandatoryValidator()])).toEqual('Required value');
    expect(validate('', [MandatoryValidator(), EmailValidator()])).toEqual(
      'Required value'
    );
    expect(
      validate('John Doe', [MandatoryValidator(), EmailValidator()])
    ).toEqual('Invalid email address.');
    expect(
      validate('', [
        MandatoryValidator(),
        MobilePrefixValidator(),
        MobileValidator()
      ])
    ).toEqual('Required value');
    expect(
      validate('09', [
        MandatoryValidator(),
        MobilePrefixValidator(),
        MobileValidator()
      ])
    ).toEqual('Mobile number must start with 04 or 05.');
    expect(
      validate('0432', [
        MandatoryValidator(),
        MobilePrefixValidator(),
        MobileValidator()
      ])
    ).toEqual('Invalid mobile number.');
  });
});
