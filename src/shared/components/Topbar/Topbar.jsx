import { Menu, Moon, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useThemeStore } from "@app/store/useThemeStore";
import {
  TopbarContainer,
  TopbarLeft,
  ToggleButton,
  TopbarTitleBlock,
  TopbarTitle,
  TopbarSubtitle,
  TopbarRight
} from "./Topbar.styles";

const Topbar = ({ toggleSidebar, subtitle }) => {
  const { isDark, toggleTheme } = useThemeStore();
  const location = useLocation();

  const getPageTitle = () => {
    const path = location.pathname;
    if (path.startsWith("/analytics")) return "Analytics";
    if (path.startsWith("/products")) return "Products";
    if (path.startsWith("/orders")) return "Orders";
    return "Dashboard";
  };

  const title = getPageTitle();

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
