import { useCallback, useContext, useMemo } from "react";

import { ThemeModeContext } from "@/providers/ThemeProvider";
import { ThemeMode } from "@/providers/ThemeProvider/types";
import { MaterialUISwitch } from "@/components/TopBar/index.styles";

export function ThemeSwitch() {
  const { mode, setMode } = useContext(ThemeModeContext);
  const isDarkMode = useMemo(() => mode === ThemeMode.Dark, [mode]);
  const onChange = useCallback(() => {
    if (mode === ThemeMode.Light) {
      setMode(ThemeMode.Dark);
      return;
    }
    setMode(ThemeMode.Light);
  }, [mode, setMode]);

  return (
    <MaterialUISwitch
      checked={isDarkMode}
      onChange={onChange}
      color="secondary"
      sx={{ position: "absolute", right: "1.5rem" }}
    />
  );
}
