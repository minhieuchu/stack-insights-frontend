import { ThemeMode } from "@/providers/ThemeProvider/types";
import { useMemo } from "react";

export enum LocalStorageKeys {
  ThemeModeKey = "theme-mode",
}

const getThemeMode = (): string | null =>
  localStorage.getItem(LocalStorageKeys.ThemeModeKey);

const setThemeMode = (mode: ThemeMode): void => {
  localStorage.setItem(LocalStorageKeys.ThemeModeKey, mode);
};

export const useLocalStorage = () => {
  return useMemo(
    () => ({
      getThemeMode,
      setThemeMode,
    }),
    [],
  );
};
