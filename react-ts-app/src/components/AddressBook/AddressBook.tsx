import React, { useState } from "react";
import { MdExpandMore, MdExpandLess, MdPersonAdd } from "react-icons/md";
import { Button } from "../Button/Button";
import { AddressBookProps, AddressProps } from "./types";

export function AddressBook({ name, addresses }: AddressBookProps) {
  const [expanded, setExpanded] = useState<boolean>(false);

  function onClick() {
    setExpanded(!expanded);
  }

  return (
    <div>
      <h1>
        {name}{" "}
        <Button onClick={onClick}>
          {expanded ? (
            <span>
              <MdExpandLess />
            </span>
          ) : (
            <MdExpandMore />
          )}
        </Button>
      </h1>
      {expanded && (
        <div>
          <h2>
            name, mobile{" "}
            <Button>
              <MdPersonAdd />
            </Button>
          </h2>
          <p>
            {addresses.map((addressBook: AddressProps) => (
              <div>
                {addressBook.name}, {addressBook.mobile}
              </div>
            ))}
          </p>
        </div>
      )}
    </div>
  );
}
