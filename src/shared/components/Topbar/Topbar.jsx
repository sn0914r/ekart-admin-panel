import { Menu, Moon, Sun } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useThemeStore } from "@app/store/useThemeStore";
import { getPageTitle } from "@constants/routes";
import {
  TopbarContainer,
  TopbarLeft,
  ToggleButton,
  SidebarToggleButton,
  TopbarTitleBlock,
  TopbarTitle,
  TopbarSubtitle,
  TopbarRight,
} from "./Topbar.styles";

const Topbar = ({ toggleSidebar, subtitle, title: customTitle }) => {
  const { isDark, toggleTheme } = useThemeStore();
  const location = useLocation();

  const title = customTitle || getPageTitle(location.pathname);

  return (
    <TopbarContainer>
      <TopbarLeft>
        <SidebarToggleButton
          onClick={toggleSidebar}
          aria-label="Toggle Sidebar"
        >
          <Menu size={20} />
        </SidebarToggleButton>
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
