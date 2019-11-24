export const colors = {
  LightSteelBlue: "#B0C4DE",
  primary: "#F2EFE4",
  secondary: "#CB8C1D",
  tertiary: "#4C3327",
  neutral: "#BD3632"
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
  }
};
