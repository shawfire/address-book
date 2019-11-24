import styled from "@emotion/styled";
import { theme } from "../../theme/theme";

export const StyledButton = styled.span<{
  color?: string;
}>(props => ({
  minWidth: "30px",
  display: "inline-block",
  color: theme.button.color,
  background: theme.button.background,
  borderRadius: "5px",
  "&:hover": {
    cursor: "pointer",
    background: theme.button.hover.background,
    color: props.color || theme.button.hover.color
  }
}));
