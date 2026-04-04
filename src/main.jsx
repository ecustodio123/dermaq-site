import React from "react";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./tailwind.css";
import "./styles.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#153f6b",
      dark: "#103760",
    },
    secondary: {
      main: "#2f8f8d",
    },
    warning: {
      main: "#f28a1b",
    },
    text: {
      primary: "#2f2f2f",
      secondary: "#33597d",
    },
    background: {
      default: "#fafafa",
      paper: "#ffffff",
    },
  },
  typography: {
    fontFamily: '"DM Sans", "Segoe UI", sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 700,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
