import React, { useState } from "react";
import { MdGroupAdd } from "react-icons/md";
import { Button } from "../Button/Button";
import { AddressBookType, AddressEntryType } from "../../types/types";
import { AddressBook } from "./AddressBook";
import {
  StyledSection,
  StyledRow,
  StyledTableRow,
  StyledColumn,
  StyledTableHeading
} from "./styled";
import { sortAddressBooks } from "../../utils/sortAddressBooks";
import { sortAddressBook } from "../../utils/sortAddressBook";
import { findUniqueAddresses } from "../../utils/findUniqueAddresses";
import { UniqueAddresses } from "./UniqueAddresses";

export function AddressBookList() {
  const [addressBooks, setAddressBooks] = useState<AddressBookType[]>(
    sortAddressBooks([
      {
        name: "book1",
        addresses: sortAddressBook([
          {
            name: "Bob",
            mobile: "0432 123 123"
          },
          {
            name: "Mary",
            mobile: "0432 123 456"
          },
          {
            name: "Jane",
            mobile: "0432 123 789"
          }
        ])
      },
      {
        name: "book2",
        addresses: sortAddressBook([
          {
            name: "Mary",
            mobile: "0432 123 456"
          },
          {
            name: "John",
            mobile: "0432 321 123"
          },
          {
            name: "Jane",
            mobile: "0432 123 789"
          }
        ])
      }
    ])
  );

  function addAddressBook() {
    const newAddressBook = {
      name: `book${addressBooks.length + 1}`,
      addresses: []
    };
    const newAddressBooks = [...addressBooks, newAddressBook];
    setAddressBooks(sortAddressBooks(newAddressBooks));
  }

  function deleteAddressBook(name: string) {
    const newAddressBooks = addressBooks.filter(
      addressBook => addressBook.name !== name
    );
    setAddressBooks(sortAddressBooks(newAddressBooks));
  }

  function deleteAddress(addressBookName: string, addressName: string) {
    const otherAddressBooks: AddressBookType[] = addressBooks.filter(
      addressBook => addressBook.name !== addressBookName
    );
    const currentAddressBook: AddressBookType = addressBooks.filter(
      addressBook => addressBook.name === addressBookName
    )[0];
    const newAddressBook: AddressBookType = {
      name: addressBookName,
      addresses: currentAddressBook.addresses.filter(
        address => address.name !== addressName
      )
    };
    const newAddressBooks = [...otherAddressBooks, newAddressBook];
    setAddressBooks(sortAddressBooks(newAddressBooks));
  }

  function editAddress(
    addressBookName: string,
    addressName: string,
    newAddressName: string,
    newMobile: string
  ) {
    const otherAddressBooks: AddressBookType[] = addressBooks.filter(
      addressBook => addressBook.name !== addressBookName
    );
    const currentAddressBook: AddressBookType = addressBooks.filter(
      addressBook => addressBook.name === addressBookName
    )[0];
    const newAddressBook: AddressBookType = {
      name: addressBookName,
      addresses: currentAddressBook.addresses.map(address =>
        address.name === addressName
          ? { name: newAddressName, mobile: newMobile }
          : address
      )
    };
    const newAddressBooks = [...otherAddressBooks, newAddressBook];
    setAddressBooks(sortAddressBooks(newAddressBooks));
  }

  return (
    <div>
      <StyledSection>
        <StyledSection alignItems="left">
          <StyledRow>
            <h1>
              Address Books{" "}
              <Button alt="Add a new address book" onClick={addAddressBook}>
                <MdGroupAdd />
              </Button>
            </h1>
          </StyledRow>

          {addressBooks.map((addressBook: AddressBookType) => (
            <StyledRow>
              <AddressBook
                addressBook={addressBook}
                deleteAddressBook={deleteAddressBook}
                deleteAddress={deleteAddress}
                editAddress={editAddress}
              />
            </StyledRow>
          ))}
          <UniqueAddresses addressBooks={addressBooks} />
        </StyledSection>
      </StyledSection>
    </div>
  );
}
