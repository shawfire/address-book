import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { useFormInput } from "../useFormInput";
import InputField from "../../components/InputField/InputField";

function TestHook() {
  const [givenName, givenNameCheck] = useFormInput({
    name: "givenName"
  });
  return (
    <InputField
      label="Given name"
      errorMessage={givenNameCheck.error}
      inputProps={{
        ...givenName
        // autoFocus: true
      }}
    />
  );
}

describe("Input Field tests", () => {
  let wrapper: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<TestHook />);
  });

  test("Input Field snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Input Field state test", () => {});
});
