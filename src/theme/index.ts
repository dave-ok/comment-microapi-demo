import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FFFFFF",
    },
    secondary: {
      main: "#2339FF",
    },
  },
  typography: {
    fontFamily: "Rosario",
    fontSize: 13,
    button: {
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 10,
  },
});

export default theme;
