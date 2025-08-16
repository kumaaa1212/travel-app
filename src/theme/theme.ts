import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#05203c", //濃い紺
    },
    secondary: {
      main: "#0361e3", //青っぽい色
    },
    // info: {
    //   main: "#0361e3",
    //   light: "#e1ecfd",
    //   dark: "#024aa2",
    //   contrastText: "#fff",
    // },
    grey: {
      500: "#05203c",
    },
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  // components: {
  //   MuiAlert: {
  //     styleOverrides: {
  //       standardInfo: {
  //         backgroundColor: "#e1ecfd",
  //         color: "#024aa2",
  //         "& .MuiAlert-icon": {
  //           color: "#0361e3",
  //         },
  //       },
  //       filledInfo: {
  //         backgroundColor: "#0361e3",
  //       },
  //       outlinedInfo: {
  //         borderColor: "#0361e3",
  //         color: "#0361e3",
  //       },
  //     },
  //   },
  // },
});

export default theme;
