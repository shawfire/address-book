import React from "react";
import { MdCancel, MdSave } from "react-icons/md";
import { Button } from "../Button/Button";
import { EditAddressProps } from "../../types/types";
import { StyledColumn, StyledTableRow } from "./styled";
import { theme } from "../../theme/theme";
import { useFormInput } from "../../hooks/useFormInput";
import {
  MandatoryValidator,
  MobilePrefixValidator,
  MobileValidator
} from "../../hooks/validators";
import InputField from "../InputField/InputField";

export function EditAddress({
  addressBook,
  address,
  editAddress,
  setEditName
}: EditAddressProps) {
  const [name, nameCheck] = useFormInput({
    name: "name",
    initialValue: address.name,
    validators: [MandatoryValidator("Enter name")]
  });
  const [mobile, mobileCheck] = useFormInput({
    name: "mobile",
    initialValue: address.mobile,
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

  const setFocus = (ref: React.RefObject<HTMLInputElement>) =>
    ref && ref.current && ref.current.focus();

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
    <StyledTableRow>
      <StyledColumn>
        <InputField
          data-test-id="name"
          id="nameInputField"
          label="Name"
          errorMessage={nameCheck.error}
          inputProps={name}
        />
      </StyledColumn>
      <StyledColumn>
        <InputField
          data-test-id="mobile"
          label="Mobile number"
          errorMessage={mobileCheck.error}
          inputProps={mobile}
        />
      </StyledColumn>{" "}
      <StyledColumn>
        <Button
          alt="Save this address"
          onClick={() => onSave(addressBook.name, address.name)}
        >
          <MdSave />
        </Button>
        <Button
          alt="Cancel edit"
          button={theme.deleteButton}
          onClick={() => setEditName("")}
        >
          <MdCancel />
        </Button>
      </StyledColumn>
    </StyledTableRow>
  );
}
