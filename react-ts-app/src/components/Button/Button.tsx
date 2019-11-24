import React, { FunctionComponent } from "react";
import { StyledButton } from "./styled";

interface ButtonPropTypes {
  onClick?: () => void;
}

export const Button: FunctionComponent<ButtonPropTypes> = ({
  onClick,
  children
}) => {
  return (
    <span onClick={onClick}>
      <StyledButton>
        &nbsp;
        {children}
        &nbsp;
      </StyledButton>
    </span>
  );
};
