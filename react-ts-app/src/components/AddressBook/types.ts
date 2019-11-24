export interface AddressProps {
  name: string;
  mobile: string;
}

export interface AddressBookType {
  name: string;
  addresses: AddressProps[];
}

export interface AddressBookProps {
  addressBook: AddressBookType;
  deleteAddressBook: (name: string) => void;
  deleteAddress: (addressBookName: string, addressName: string) => void;
}

export interface AddressBookListProps {
  addressBooks: AddressBookType[];
}
