import React, { useState } from "react";
import { MdExpandMore, MdExpandLess, MdPersonAdd } from "react-icons/md";
import { AiOutlineUsergroupDelete, AiOutlineUserDelete } from "react-icons/ai";
import { Button } from "../Button/Button";
import { AddressBookProps, AddressProps } from "./types";
import {
  StyledSection,
  StyledRow,
  StyledColumn,
  StyledTableRow
} from "./styled";
import { theme } from "../../theme/theme";

export function AddressBook({
  addressBook,
  deleteAddressBook,
  deleteAddress
}: AddressBookProps) {
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
              <span>
                <MdExpandLess />
              </span>
            ) : (
              <MdExpandMore />
            )}
          </Button>
        </h1>
      </StyledRow>
      {expanded && (
        <span>
          <StyledTableRow>
            <h2>
              <StyledColumn>name </StyledColumn>
              <StyledColumn>mobile</StyledColumn>
              <StyledColumn>
                <Button>
                  <MdPersonAdd />
                </Button>{" "}
                {addressBook.addresses.length === 0 && (
                  <Button
                    button={theme.deleteButton}
                    onClick={() => deleteAddressBook(addressBook.name)}
                  >
                    <AiOutlineUsergroupDelete />
                  </Button>
                )}
              </StyledColumn>
            </h2>
          </StyledTableRow>
          {addressBook.addresses.map((address: AddressProps) => (
            <StyledTableRow>
              <StyledColumn>{address.name}</StyledColumn>
              <StyledColumn>{address.mobile}</StyledColumn>{" "}
              <StyledColumn>
                <Button button={theme.deleteButton}>
                  <AiOutlineUserDelete
                    onClick={() =>
                      deleteAddress(addressBook.name, address.name)
                    }
                  />
                </Button>
              </StyledColumn>
            </StyledTableRow>
          ))}
        </span>
      )}
    </StyledSection>
  );
}
