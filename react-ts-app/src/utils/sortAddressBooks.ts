import { sortAlphaNum } from "./sortAlphaNum";
import { AddressBookType } from "../types/types";

export const sortAddressBooks = (
  addressBooks: AddressBookType[]
): AddressBookType[] => {
  return addressBooks.sort((a, b) => sortAlphaNum(a.name, b.name));
};
