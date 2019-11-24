import { sortAlphaNum } from "./sortAlphaNum";
import { AddressesType } from "../types/types";

export const sortAddressBook = (addressBook: AddressesType): AddressesType => {
  return addressBook.sort((a, b) => sortAlphaNum(a.name, b.name));
};
