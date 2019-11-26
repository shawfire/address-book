import * as React from "react";
import { ReactWrapper, shallow, ShallowWrapper } from "enzyme";
import { ErrorSvg } from "../ErrorSvg";

describe("Error Svg tests", () => {
  let wrapper: ReactWrapper | ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(<ErrorSvg />);
  });

  test("ErrorSvg snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
