# address-book

<details><summary>Requirements</summary>

You have been asked to develop an address book that allows a user to store (between
successive runs of the program) the name and phone numbers of their friends, with the
following functionality:

- To be able to display the list of friends and their corresponding phone numbers sorted
  by their name.
- Given another address book that may or may not contain the same friends, display the
  list of friends that are unique to each address book (the union of all the relative
  complements). For example given:

```js
Book1 = { "Bob", "Mary", "Jane" }
Book2 = { "Mary", "John", "Jane" }
```

The friends that are unique to each address book are:

```js
Book1 \ Book2 = { "Bob", "John" }
```

</details>

<details><summary>Instructions</summary>

- Develop the system in Java or Node.js
- High quality solution, well annotated and include tests.
- Persist information and you don't have to use a database.
- The simplest solution is often the best.
- The application must run and be easily built from source.
  </details>

<details><summary>Scope</summary>

- React frontend
  - Create an address book
    - Address Books (+)
      - address book1 (\/)
      - address book2 (/\) (+)
        - Mary 0423 122 123
        - John 0432 123 132
        - Jane 0432 442 842
      - Unique Entries from book1 and book2 (\/)
  - Add an entry to the address book (name, phone number)
  - List address book entries sorted by name
  - Display unique names for any two Address books
- Java backend
  - Create and Address book
  - Add an entry to the address book
  - Get a list of address books
  - Get a list of entries an address book
    </details>

<details><summary>Extensions</summary>

- [cypress - JavaScript end to end testing framework](https://www.cypress.io)
- [storybooks - playground for UI components](https://storybook.js.org/)
  </details>

<details><summary>Acceptance Criteria</summary>
</details>

<details><summary>Out of scope</summary>

- React frontend
  - Login / Logout User
  - Delete a book
    - Delete and entry in the address book
- Java backend
  - User authentication
  - Delete a book - Delete and entry in the address book
    </details>

<details><summary>Create React App</summary>

```bash
create-react-app --version
npm uninstall -g create-react-app
npx create-react-app --version
npx create-react-app react-ts-app --typescript
cd react-ts-app
npm install --save typescript @types/node @types/react @types/react-dom @types/jest
npm run start
```

- Reference: [Create React App - Adding TypeScript](https://create-react-app.dev/docs/adding-typescript)

</details>

<details><summary>Emotion - css styles in javascript</summary>

```bash
npm i @emotion/styled @emotion/core
```

- Reference: [React Emotion - Introduction](https://emotion.sh/docs/introduction)

</details>

<details><summary>React Icons</summary>

```bash
npm i -D react-icons
```

Reference: [React Icons](https://react-icons.netlify.com/)

</details>
