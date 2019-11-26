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
  editAddress: (
    addressBookName: string,
    addressName: string,
    newAddressName: string,
    newMobile: string
  ) => void;
}

export interface EditAddressProps {
  addressBook: AddressBookType;
  address: AddressEntryType;
  editAddress: (
    addressBookName: string,
    addressName: string,
    newAddressName: string,
    newMobile: string
  ) => void;
  setEditName: React.Dispatch<React.SetStateAction<string>>;
}

export interface AddressBookListProps {
  addressBooks: AddressBookType[];
}
