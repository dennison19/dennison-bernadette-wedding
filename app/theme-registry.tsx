"use client";

import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import type { ReactNode } from "react";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#b98a35",
      contrastText: "#fff8e8"
    },
    secondary: {
      main: "#284238"
    },
    background: {
      default: "#fff8ea",
      paper: "#fffdf7"
    },
    text: {
      primary: "#2d2418",
      secondary: "#6d5a3d"
    }
  },
  typography: {
    fontFamily: "'Cormorant Garamond', 'Georgia', serif",
    h1: {
      fontWeight: 500
    },
    h2: {
      fontWeight: 500
    },
    button: {
      textTransform: "none"
    }
  },
  shape: {
    borderRadius: 8
  }
});

export default function ThemeRegistry({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
