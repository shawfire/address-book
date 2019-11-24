import { sortAddressBook } from "../sortAddressBook";
import { AddressesType } from "../../types/types";

describe("sortAddressBook test", () => {
  test("sortAddressBook should sort an address book", () => {
    const book1Initial: AddressesType = [
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
    const book1Sorted = [
      {
        name: "Bob",
        mobile: "0432123123"
      },
      {
        name: "Jane",
        mobile: "0432123789"
      },
      {
        name: "Mary",
        mobile: "0432123456"
      }
    ];

    expect(sortAddressBook([])).toEqual([]);
    expect(sortAddressBook(book1Initial)).toEqual(book1Sorted);
  });
});
