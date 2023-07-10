import { createTheme, responsiveFontSizes } from "@mui/material";
var primaryColor = "#192231";
var secondaryColor = "#404a42";
var beigeColor = "#c0b283";
var babyPinkColor = "#eddbcd";
var whiteColor = "#f4f4f4";
const baseTheme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    neutral: {
      main: beigeColor,
    },
    success: {
      main: babyPinkColor,
    },
  },
  typography: {
    fontFamily: "Andika, sans-serif",
    fontSize: 18,
    lineHeight: "1.5",
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            textDecoration: "none",
          },
        },
      },
    },

  },
});
const MainTheme = responsiveFontSizes(baseTheme);
export default MainTheme;
