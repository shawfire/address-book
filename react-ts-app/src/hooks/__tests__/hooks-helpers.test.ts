import { applyMask, removeMask, getEndInputValuePos } from '../hooks-helpers';

describe('hooks-helpers test', () => {
  const mask = '____ ___ ___';

  it('applyMask', () => {
    expect(applyMask('0', mask)).toEqual('0___ ___ ___');
    expect(applyMask('04', mask)).toEqual('04__ ___ ___');
    expect(applyMask('045', mask)).toEqual('045_ ___ ___');
    expect(applyMask('0456', mask)).toEqual('0456 ___ ___');
    expect(applyMask('04561', mask)).toEqual('0456 1__ ___');
    expect(applyMask('045612', mask)).toEqual('0456 12_ ___');
    expect(applyMask('0456123', mask)).toEqual('0456 123 ___');
    expect(applyMask('04561234', mask)).toEqual('0456 123 4__');
    expect(applyMask('045612345', mask)).toEqual('0456 123 45_');
    expect(applyMask('0456123456', mask)).toEqual('0456 123 456');
    expect(applyMask('04561234567', mask)).toEqual('0456 123 4567');
  });

  it('removeMask', () => {
    expect(removeMask('0___ ___ ___', mask)).toEqual('0');
    expect(removeMask('04__ ___ ___', mask)).toEqual('04');
  });

  it('getEndInputValuePos', () => {
    expect(getEndInputValuePos('0___ ___ ___', mask)).toEqual(1);
    expect(getEndInputValuePos('04__ ___ ___', mask)).toEqual(2);
    expect(getEndInputValuePos('043_ ___ ___', mask)).toEqual(3);
    expect(getEndInputValuePos('0432 ___ ___', mask)).toEqual(4);
    expect(getEndInputValuePos('0432 1__ ___', mask)).toEqual(6);
    expect(getEndInputValuePos('0432 12_ ___', mask)).toEqual(7);
    expect(getEndInputValuePos('0432 123 ___', mask)).toEqual(8);
    expect(getEndInputValuePos('0432 123 4__', mask)).toEqual(10);
    expect(getEndInputValuePos('0432 123 45_', mask)).toEqual(11);
    expect(getEndInputValuePos('0432 123 456', mask)).toEqual(12);
    expect(getEndInputValuePos('0432 123 4567', mask)).toEqual(13);
  });
});
