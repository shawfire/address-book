const maskChar = '_';

export function applyMask(value: string, mask: string): string {
  if (!!mask) {
    let x = '',
      valueIndex = 0,
      maskIndex = 0;
    for (; valueIndex < value.length && maskIndex < mask.length; maskIndex++) {
      if (mask.charAt(maskIndex) === maskChar) {
        x += value.charAt(valueIndex++);
      } else {
        x += mask.charAt(maskIndex);
      }
    }
    for (; maskIndex < mask.length; maskIndex++) {
      x += mask.charAt(maskIndex);
    }
    for (; valueIndex < value.length; valueIndex++) {
      x += value.charAt(valueIndex);
    }
    return x;
  }
  return value;
}

export const nonValueCharsRegex = /[\s_]/g;

export function removeMask(value: string, mask: string): string {
  if (!!mask) {
    return value.replace(nonValueCharsRegex, '');
  }
  return value;
}

export function getEndInputValuePos(maskedValue: string, mask: string): number {
  const value = removeMask(maskedValue, mask);
  if (!!mask) {
    let valueIndex = 0,
      maskIndex = 0;
    for (; valueIndex < value.length && maskIndex < mask.length; maskIndex++) {
      if (mask.charAt(maskIndex) === maskChar) {
        valueIndex++;
      }
    }
    for (; maskIndex < mask.length; maskIndex++) {
      if (nonValueCharsRegex.test(mask.charAt(maskIndex))) {
        return maskIndex;
      }
    }
    let actualIndex = maskIndex;
    for (; valueIndex < value.length; valueIndex++) {
      actualIndex++;
    }
    return actualIndex;
  }
  return value.length;
}
