import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const ThemeSwitch = () => {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const current = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() => {
        if (current === "dark") setTheme("light");
        else if (current === "light") setTheme("system");
        else setTheme("dark");
      }}
    >
      {current === "dark" ? "🌙" : current === "light" ? "☀️" : "💻"}
    </button>
  );
};

export default ThemeSwitch;
