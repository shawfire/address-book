import React, { FunctionComponent } from "react";
import { StyledButton } from "./styled";
import { ButtonType, theme } from "../../theme/theme";

interface ButtonPropTypes {
  onClick?: () => void;
  button?: ButtonType;
}

export const Button: FunctionComponent<ButtonPropTypes> = ({
  onClick,
  button = theme.button,
  children
}) => {
  return (
    <span onClick={onClick}>
      <StyledButton button={button}>
        &nbsp;
        {children}
        &nbsp;
      </StyledButton>
    </span>
  );
};
