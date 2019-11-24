import { AddressBookType, AddressesType } from "../types/types";

export const findUniqueAddresses = (
  a: AddressesType,
  b: AddressesType
): AddressesType => {
  let uniqueAddresses: AddressesType = [];
  const aKeys = a.map(x => x.name);
  const bKeys = b.map(x => x.name);
  if (bKeys.length > 1) {
    uniqueAddresses = a.reduce((acc, x) => {
      return bKeys.includes(x.name) ? acc : [...acc, x];
    }, uniqueAddresses);
  }
  uniqueAddresses = b.reduce((acc, x) => {
    return aKeys.includes(x.name) ? acc : [...acc, x];
  }, uniqueAddresses);
  return uniqueAddresses;
};
