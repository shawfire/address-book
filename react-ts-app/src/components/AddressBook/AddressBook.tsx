import React, { useState } from "react";
import {
  MdExpandMore,
  MdExpandLess,
  MdPersonAdd,
  MdCancel,
  MdSave
} from "react-icons/md";
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
import { useFormInput } from "../../hooks/useFormInput";
import {
  MandatoryValidator,
  MobilePrefixValidator,
  MobileValidator
} from "../../hooks/validators";
import InputField from "../InputField/InputField";
import { EditAddress } from "./EditAddress";

export function AddressBook({
  addressBook,
  deleteAddressBook,
  deleteAddress,
  editAddress
}: AddressBookProps) {
  const [name, nameCheck] = useFormInput({
    name: "name",
    validators: [MandatoryValidator("Enter name")]
  });
  const [mobile, mobileCheck] = useFormInput({
    name: "mobile",
    allowedChars: "[0-9]",
    mask: "____ ___ ___",
    validators: [
      MandatoryValidator("Enter mobile"),
      MobilePrefixValidator("Prefix 04 or 05"),
      MobileValidator("Invalid mobile")
    ]
  });
  const fields = [
    { check: nameCheck, ref: name.ref },
    { check: mobileCheck, ref: mobile.ref }
  ];
  const [editName, setEditName] = useState<string>("");
  const [expanded, setExpanded] = useState<boolean>(false);

  const setFocus = (ref: React.RefObject<HTMLInputElement>) =>
    ref && ref.current && ref.current.focus();

  function toggleAddressBookDisplay() {
    setExpanded(!expanded);
  }

  function onSave(addressBookName: string, addressName: string) {
    let valid = true;
    fields.forEach(field => {
      const errorMessage = field.check.validate();
      field.check.setError(errorMessage);
      if (valid) {
        if (errorMessage !== "") {
          valid = false;
          setFocus(field.ref);
        }
      }
    });
    if (valid) {
      editAddress(addressBookName, addressName, name.value, mobile.value);
    }
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
            return editName === address.name ? (
              <EditAddress
                addressBook={addressBook}
                address={address}
                editAddress={editAddress}
                setEditName={setEditName}
              />
            ) : (
              <StyledTableRow>
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
