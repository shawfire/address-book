import React, { FunctionComponent } from "react";
import { StyledButton } from "./styled";
import { ButtonType, theme } from "../../theme/theme";

interface ButtonPropTypes {
  onClick?: () => void;
  button?: ButtonType;
  alt?: string;
}

export const Button: FunctionComponent<ButtonPropTypes> = ({
  onClick,
  button = theme.button,
  children,
  alt = ""
}) => {
  return (
    <span onClick={onClick} title={alt}>
      <StyledButton button={button}>
        &nbsp;
        {children}
        &nbsp;
      </StyledButton>
    </span>
  );
};
