import { Menu, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import {
  TopbarContainer,
  TopbarLeft,
  ToggleButton,
  TopbarTitleBlock,
  TopbarTitle,
  TopbarSubtitle,
  TopbarRight
} from "./Topbar.styles";

const Topbar = ({ toggleSidebar, title = "Dashboard", subtitle }) => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial state from body class or localStorage
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setIsDark(true);
      document.body.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <TopbarContainer>
      <TopbarLeft>
        <ToggleButton onClick={toggleSidebar} aria-label="Toggle Sidebar">
          <Menu size={20} />
        </ToggleButton>
        <TopbarTitleBlock>
          <TopbarTitle>{title}</TopbarTitle>
          {subtitle && <TopbarSubtitle>{subtitle}</TopbarSubtitle>}
        </TopbarTitleBlock>
      </TopbarLeft>

      <TopbarRight>
        <ToggleButton onClick={toggleTheme} aria-label="Toggle Theme">
          {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </ToggleButton>
        {/* We can add profile avatar or notifications here later */}
      </TopbarRight>
    </TopbarContainer>
  );
};

export default Topbar;
