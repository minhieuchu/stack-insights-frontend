import { ThemeMode } from "@/providers/ThemeProvider/types";
import { createTheme, PaletteOptions } from "@mui/material";

const lightModePalette: PaletteOptions = {
  mode: "light",
  background: {
    default: "#fafafa",
    paper: "#fff",
  },
  text: {
    primary: "#424242",
  },
};

const darkModePalette: PaletteOptions = {
  mode: "dark",
  background: {
    default: "#232323f5",
    paper: "#212121",
  },
  text: {
    primary: "#eeeeee",
  },
  divider: "#616161",
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
