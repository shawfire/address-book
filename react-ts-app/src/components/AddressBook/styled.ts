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
  "&:nth-of-type(2n+2)": {
    background: "MistyRose"
  },
  "&:nth-of-type(1)": {
    background: "WhiteSmoke",
    fontWeight: "bold",
    fontFamily: "Ariel",
    fontSize: "20px"
  }
});

export const StyledColumn = styled.span({
  maxWidth: "120px",
  minWidth: "120px"
});

export const StyledTableHeading = styled.div({
  display: "flex",
  flexDirection: "row",
  textAlign: "left",
  padding: "3px",
  background: "WhiteSmoke",
  fontWeight: "bold",
  fontFamily: "Ariel",
  fontSize: "23px"
});
