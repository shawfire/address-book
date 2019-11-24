import styled from "@emotion/styled";
import { ButtonType } from "../../theme/theme";

export const StyledButton = styled.span<{
  color?: string;
  button: ButtonType;
}>(({ button, color }) => ({
  minWidth: "30px",
  display: "inline-block",
  color: button.color,
  background: button.background,
  borderRadius: "5px",
  "&:hover": {
    cursor: "pointer",
    background: button.hover.background,
    color: color || button.hover.color
  },
  margin: "auto 3px"
}));
