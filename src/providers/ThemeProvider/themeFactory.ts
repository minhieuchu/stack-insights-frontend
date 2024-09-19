import { ThemeMode } from "@/providers/ThemeProvider/types";
import { createTheme, PaletteOptions } from "@mui/material";

const lightModePalette: PaletteOptions = {
  background: {
    default: "#fafafa",
    paper: "#e0e0e0",
  },
  text: {
    primary: "#424242",
  },
};

const darkModePalette: PaletteOptions = {
  background: {
    default: "#212121",
    paper: "#212121",
  },
  text: {
    primary: "#eeeeee",
  },
};

export const themeFactory = (mode: ThemeMode) => {
  let customPalette = lightModePalette;
  if (mode === ThemeMode.Dark) {
    customPalette = darkModePalette;
  }
  return createTheme({
    palette: { ...customPalette },
  });
};
