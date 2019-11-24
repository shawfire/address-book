export interface AddressProps {
  name: string;
  mobile: string;
}

export interface AddressBookProps {
  name: string;
  addresses: AddressProps[];
}

export interface AddressBookListProps {
  addressBooks: AddressBookProps[];
}
