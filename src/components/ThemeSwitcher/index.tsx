import React, { useEffect, useState } from "react";
import "./style.scss";
import { DarkMode, LightMode } from "@mui/icons-material";

const ThemeSwicther: React.FC = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const ThemeIcon = isDark ? <LightMode /> : <DarkMode />;
  const ThemeText = isDark ? "Light" : "Dark";

  useEffect(() => {
    document.body.setAttribute("data-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="switcher" onClick={() => setIsDark(!isDark)}>
      <span>{ThemeText}</span>
      <i>{ThemeIcon}</i>
    </div>
  );
};

export default ThemeSwicther;
