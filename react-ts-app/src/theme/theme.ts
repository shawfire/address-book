const genericColors = {
  white: "#FFFFFF",
  red: "#B61827",
  lightBlue_1: "#E1E8ED",
  lightBlue_2: "#E5E5E5",
  darkBlue_1: "#1064A3",
  darkBlue_2: "#054469",
  darkGrey: "#382F2D"
};

export const colors = {
  LightSteelBlue: "#B0C4DE",
  primary: "#F2EFE4",
  secondary: "#CB8C1D",
  tertiary: "#4C3327",
  neutral: "#BD3632",
  normalTextColor: genericColors.darkGrey,
  inputTextColor: genericColors.darkGrey,
  inputBorderColor: "#736D6C",
  inputBackgroundColor: genericColors.white,
  errorColor: genericColors.red,
  buttonBackgroundColor: genericColors.darkBlue_1,
  buttonHoverBackgroundColor: "black",
  buttonTextColor: genericColors.white,
  errorInputBackgroundColor: "#fff7f7",

  ...genericColors
};

const fontFamilies = {
  defaultFontFamily: "Arial, ap_letter",
  headingFontFamily: "ap-letter, Arial"
};

const fontSize = {
  sm: "14px",
  md: "16px"
};

export interface ButtonType {
  color: string;
  background: string;
  hover: {
    color: string;
    background: string;
  };
  active: {
    background: string;
  };
}

export const theme = {
  colors: {
    ...colors
  },
  button: {
    color: "#fff",
    background: "#3498db",
    hover: {
      background: "#2980b9",
      color: "#fff"
    },
    active: {
      background: "#2980b9"
    }
  },
  deleteButton: {
    color: "#fff",
    background: "#e74c3c",
    hover: {
      background: "#c0392b",
      color: "#fff"
    },
    active: {
      background: "#c0392b"
    }
  },
  fontFamilies: {
    ...fontFamilies
  },
  fontSize: {
    ...fontSize
  },
  label: {
    fontFamily: fontFamilies.defaultFontFamily,
    fontSize: fontSize.md,
    color: colors.inputTextColor
  },
  input: {
    fontFamily: fontFamilies.defaultFontFamily,
    fontSize: fontSize.md,
    border: `1px solid ${colors.inputTextColor}`
  },
  error: {
    fontFamily: fontFamilies.defaultFontFamily,
    fontSize: fontSize.sm,
    color: colors.errorColor
  }
};
