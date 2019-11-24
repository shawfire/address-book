import React, { useState } from "react";
import { MdGroupAdd } from "react-icons/md";
import { Button } from "../Button/Button";
import { AddressBookType } from "./types";
import { AddressBook } from "./AddressBook";
import { StyledSection, StyledRow } from "./styled";

export function AddressBookList() {
  const [addressBooks, setAddressBooks] = useState<AddressBookType[]>([
    {
      name: "book1",
      addresses: [
        {
          name: "Bob",
          mobile: "0432123123"
        },
        {
          name: "Mary",
          mobile: "0432123456"
        },
        {
          name: "Jane",
          mobile: "0432123789"
        }
      ]
    },
    {
      name: "book2",
      addresses: [
        {
          name: "Mary",
          mobile: "0432123456"
        },
        {
          name: "John",
          mobile: "0432321123"
        },
        {
          name: "Jane",
          mobile: "0432123789"
        }
      ]
    }
  ]);

  function addAddressBook() {
    const newAddressBook = {
      name: `book${addressBooks.length + 1}`,
      addresses: []
    };
    const newAddressBooks = [...addressBooks, newAddressBook];
    setAddressBooks(newAddressBooks);
  }

  function deleteAddressBook(name: string) {
    const newAddressBooks = addressBooks.filter(
      addressBook => addressBook.name !== name
    );
    setAddressBooks(newAddressBooks);
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
    setAddressBooks(newAddressBooks);
  }

  return (
    <StyledSection>
      <StyledSection alignItems="left">
        <StyledRow>
          <h1>
            Address Books{" "}
            <Button onClick={addAddressBook}>
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
            />
          </StyledRow>
        ))}
      </StyledSection>
    </StyledSection>
  );
}
