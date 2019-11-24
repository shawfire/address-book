export interface AddressEntryType {
  name: string;
  mobile: string;
}

export type AddressesType = AddressEntryType[];

export interface AddressBookType {
  name: string;
  addresses: AddressesType;
}

export interface AddressBookProps {
  addressBook: AddressBookType;
  deleteAddressBook: (name: string) => void;
  deleteAddress: (addressBookName: string, addressName: string) => void;
}

export interface AddressBookListProps {
  addressBooks: AddressBookType[];
}
