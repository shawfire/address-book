import React, { useState } from "react";
import { MdExpandMore, MdExpandLess, MdPersonAdd } from "react-icons/md";
import { AiOutlineUsergroupDelete, AiOutlineUserDelete } from "react-icons/ai";
import { FaUserEdit } from "react-icons/fa";
import { Button } from "../Button/Button";
import { AddressBookProps, AddressEntryType } from "../../types/types";
import {
  StyledSection,
  StyledRow,
  StyledColumn,
  StyledTableRow,
  StyledTableHeading
} from "./styled";
import { theme } from "../../theme/theme";
import { EditAddress } from "./EditAddress";

export function AddressBook({
  addressBook,
  deleteAddressBook,
  deleteAddress,
  editAddress
}: AddressBookProps) {
  const [editName, setEditName] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  function toggleAddressBookDisplay() {
    setExpanded(!expanded);
  }

  return (
    <StyledSection alignItems="left">
      <StyledRow>
        <h1>
          {addressBook.name}{" "}
          <Button onClick={toggleAddressBookDisplay}>
            {expanded ? (
              <MdExpandLess title="Collapse address book" />
            ) : (
              <MdExpandMore title="Expand address book" />
            )}
          </Button>
        </h1>
      </StyledRow>
      {expanded && (
        <span>
          <StyledTableHeading>
            <StyledColumn>Name </StyledColumn>
            <StyledColumn>Mobile</StyledColumn>
            <StyledColumn>
              <Button alt="Add an address book entry">
                <MdPersonAdd />
              </Button>{" "}
              {addressBook.addresses.length === 0 && (
                <Button
                  alt="Delete this address book"
                  button={theme.deleteButton}
                  onClick={() => deleteAddressBook(addressBook.name)}
                >
                  <AiOutlineUsergroupDelete />
                </Button>
              )}
            </StyledColumn>
          </StyledTableHeading>
          {addressBook.addresses.map((address: AddressEntryType) => {
            const keyValue = `${addressBook.name}-${address.name}`;
            return editName === address.name ? (
              <EditAddress
                key={keyValue}
                addressBook={addressBook}
                address={address}
                editAddress={editAddress}
                setEditName={setEditName}
              />
            ) : (
              <StyledTableRow key={keyValue}>
                <StyledColumn>{address.name}</StyledColumn>
                <StyledColumn>{address.mobile}</StyledColumn>{" "}
                <StyledColumn>
                  <Button
                    alt="Edit this address"
                    onClick={() => setEditName(address.name)}
                  >
                    <FaUserEdit />
                  </Button>
                  <Button alt="Delete this address" button={theme.deleteButton}>
                    <AiOutlineUserDelete
                      onClick={() =>
                        deleteAddress(addressBook.name, address.name)
                      }
                    />
                  </Button>
                </StyledColumn>
              </StyledTableRow>
            );
          })}
        </span>
      )}
    </StyledSection>
  );
}
