import React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import InputField, { InputFieldPropTypes } from "../InputField";

describe("Input Field tests", () => {
  let wrapper: ReactWrapper | ShallowWrapper;
  const inputFieldProps: InputFieldPropTypes = {
    inputProps: {
      id: "testid",
      name: "testid",
      type: "text",
      value: "",
      onChange: () => {},
      onBlur: () => {},
      onKeyDown: () => {},
      onMouseDown: () => {},
      ref: React.createRef()
    },
    label: "Family name / surname",
    errorMessage: ""
  };

  test("Input Field snapshot", () => {
    wrapper = shallow(<InputField {...inputFieldProps} />);

    expect(wrapper).toMatchSnapshot();
  });

  test("First Input Field snapshot", () => {
    inputFieldProps.inputProps.autoFocus = true;
    wrapper = shallow(<InputField {...inputFieldProps} />);

    expect(wrapperu).toMatchSnapshot();
  });
});
