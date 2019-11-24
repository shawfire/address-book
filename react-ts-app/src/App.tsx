import React from "react";
import "./App.css";
import { AddressBookList } from "./components/AddressBook/AddressBookList";

function App() {
  return (
    <div className="App">
      <AddressBookList
        addressBooks={[
          {
            name: "book1",
            addresses: [
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
            ]
          },
          {
            name: "book2",
            addresses: [
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
            ]
          }
        ]}
      />
    </div>
  );
}

export default App;
