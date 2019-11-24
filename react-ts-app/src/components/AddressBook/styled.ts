import styled from "@emotion/styled";

export const StyledAddressEntry = styled.div<{}>({
  lineHeight: "30px",
  padding: "5px"
});

export const StyledSection = styled.div<{
  alignItems?: string;
}>(({ alignItems = "center" }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: alignItems,
  boxSizing: "border-box",
  flexWrap: "nowrap",
  alignVertical: "center"
}));

export const StyledRow = styled.div({
  display: "flex",
  flexDirection: "row",
  textAlign: "left",
  padding: "3px"
});

export const StyledTableRow = styled.div({
  display: "flex",
  flexDirection: "row",
  textAlign: "left",
  padding: "3px",
  "&:nth-child(2n+1)": {
    background: "MistyRose"
  },
  "&:nth-child(1)": {
    background: "WhiteSmoke"
  }
});

export const StyledColumn = styled.span({
  flex: "1"
});
