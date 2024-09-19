import React, { createContext, useEffect, useMemo, useState } from "react";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ThemeMode } from "@/providers/ThemeProvider/types";
import { useMediaQuery } from "@mui/material";
import { themeFactory } from "@/providers/ThemeProvider/themeFactory";

export interface IThemeModeContext {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const ThemeModeContext = createContext<IThemeModeContext>({
  mode: ThemeMode.Light,
  setMode: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
}: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(ThemeMode.Light);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const {
    getThemeMode: getThemeModeFromLocalStorage,
    setThemeMode: setThemeModeInLocalStorage,
  } = useLocalStorage();

  useEffect(() => {
    const themeModeFromLocalStorage = getThemeModeFromLocalStorage();
    const themeModeFromSysPreference = prefersDarkMode
      ? ThemeMode.Dark
      : ThemeMode.Light;
    if (
      themeModeFromLocalStorage &&
      Object.values(ThemeMode as object).includes(themeModeFromLocalStorage)
    ) {
      setThemeMode(themeModeFromLocalStorage as ThemeMode);
      return;
    }
    setThemeMode(themeModeFromSysPreference);
    setThemeModeInLocalStorage(themeModeFromSysPreference);
  }, [
    prefersDarkMode,
    getThemeModeFromLocalStorage,
    setThemeModeInLocalStorage,
  ]);

  const themeModeContext = useMemo(() => {
    const setMode = (mode: ThemeMode) => {
      setThemeMode(mode);
      setThemeModeInLocalStorage(mode);
    };
    return {
      mode: themeMode,
      setMode,
    };
  }, [themeMode, setThemeModeInLocalStorage]);

  return (
    <ThemeModeContext.Provider value={themeModeContext}>
      <MuiThemeProvider theme={themeFactory(themeMode)}>
        {children}
      </MuiThemeProvider>
    </ThemeModeContext.Provider>
  );
};

export default ThemeProvider;
