import { sortAddressBooks } from "../sortAddressBooks";
import { AddressBookType } from "../../types/types";

describe("sortAddressBook test", () => {
  test("sortAddressBook should sort an address book", () => {
    const booksInitial: AddressBookType[] = [
      {
        name: "book2",
        addresses: []
      },
      {
        name: "book1",
        addresses: []
      }
    ];
    const booksSorted = [
      {
        name: "book1",
        addresses: []
      },
      {
        name: "book2",
        addresses: []
      }
    ];

    expect(sortAddressBooks([])).toEqual([]);
    expect(sortAddressBooks(booksSorted)).toEqual(booksSorted);
  });
});
