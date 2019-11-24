import React from "react";
import { AddressEntryType, AddressBookListProps } from "../../types/types";
import {
  StyledRow,
  StyledTableRow,
  StyledColumn,
  StyledTableHeading
} from "./styled";
import { findUniqueAddresses } from "../../utils/findUniqueAddresses";

export function UniqueAddresses({ addressBooks }: AddressBookListProps) {
  return (
    <span>
      {addressBooks.length > 1 && (
        <span>
          <StyledRow>
            <h2>Unique addresses to each book1 and book2 </h2>
          </StyledRow>

          <StyledTableHeading>
            <StyledColumn>Name </StyledColumn>
            <StyledColumn>Mobile</StyledColumn>
          </StyledTableHeading>

          {findUniqueAddresses(
            addressBooks[0].addresses,
            addressBooks[1].addresses
          ).map((address: AddressEntryType) => (
            <StyledTableRow>
              <StyledColumn>{address.name}</StyledColumn>
              <StyledColumn>{address.mobile}</StyledColumn>
            </StyledTableRow>
          ))}
        </span>
      )}
    </span>
  );
}
