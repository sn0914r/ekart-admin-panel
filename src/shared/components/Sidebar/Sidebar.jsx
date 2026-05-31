import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@app/store/authStore";
import { useThemeStore } from "@app/store/useThemeStore";
import { useLogoutMutation } from "@modules/auth/hooks/api/useLogoutMutation";
import logoWhiteImg from "../../../assets/logo-white.png";
import logoDarkImg from "../../../assets/logo-dark.png";
import {
  BarChart2,
  ShoppingCart,
  Package,
  LogOut,
  LogIn,
  PieChart,
} from "lucide-react";
import {
  SidebarContainer,
  SidebarLogoBlock,
  NavList,
  NavSectionLabel,
  StyledNavLink,
  LogoutSection,
  LogoutButton,
  LoginButton,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen }) => {
  const user = useAuthStore((state) => state.user);
  const isDark = useThemeStore((state) => state.isDark);
  const navigate = useNavigate();
  const { mutate: mutateLogout } = useLogoutMutation();
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogoBlock>
        <img
          src={isDark ? logoWhiteImg : logoDarkImg}
          alt="eKart Logo"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            transform: "scale(1.8)", // Zoom in to crop out the empty transparent space
          }}
        />
      </SidebarLogoBlock>

      <NavList>
        <NavSectionLabel>MAIN</NavSectionLabel>
        <StyledNavLink to="/">
          <BarChart2 />
          <span>Dashboard</span>
        </StyledNavLink>
        <StyledNavLink to="/orders">
          <ShoppingCart />
          <span>Orders</span>
        </StyledNavLink>
        <StyledNavLink to="/products">
          <Package />
          <span>Products</span>
        </StyledNavLink>
        <StyledNavLink to="/analytics">
          <PieChart />
          <span>Analytics</span>
        </StyledNavLink>
        {/* 
        <NavSectionLabel style={{ marginTop: "16px" }}>SYSTEM</NavSectionLabel>
        <StyledNavLink to="/settings">
          <Settings />
          <span>Settings</span>
        </StyledNavLink> */}
      </NavList>

      <LogoutSection>
        {user ? (
          <LogoutButton onClick={() => mutateLogout()}>
            <LogOut size={20} />
            <span>Logout</span>
          </LogoutButton>
        ) : (
          <LoginButton onClick={() => navigate("/auth/login")}>
            <LogIn size={20} />
            <span>Login</span>
          </LoginButton>
        )}
      </LogoutSection>
    </SidebarContainer>
  );
};

export default Sidebar;
