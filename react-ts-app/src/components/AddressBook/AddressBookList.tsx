import React from "react";
import { MdGroupAdd } from "react-icons/md";
import { Button } from "../Button/Button";
import { AddressBookListProps, AddressBookProps } from "./types";
import { AddressBook } from "./AddressBook";

export function AddressBookList({ addressBooks }: AddressBookListProps) {
  return (
    <div>
      <h1>
        Address Books{" "}
        <Button>
          <MdGroupAdd />
        </Button>
      </h1>
      <p>
        {addressBooks.map((addressBook: AddressBookProps) => (
          <AddressBook {...addressBook} />
        ))}
      </p>
    </div>
  );
}
