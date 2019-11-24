import { findUniqueAddresses } from "../findUniqueAddresses";
import { sortAddressBook } from "../sortAddressBook";
import { AddressesType } from "../../types/types";

describe("test findUniqueAddresses", () => {
  test("findUniqueAddresses should find the unique entries in two address books", () => {
    const book1: AddressesType = [
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
    ];
    const book2: AddressesType = [
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
    ];
    const expectedUniqueAddresses: AddressesType = [
      {
        name: "Bob",
        mobile: "0432123123"
      },
      {
        name: "John",
        mobile: "0432321123"
      }
    ];
    const actualUniqueAddresses = findUniqueAddresses(book1, book2);
    expect(sortAddressBook(actualUniqueAddresses)).toEqual(
      sortAddressBook(expectedUniqueAddresses)
    );
  });
});
