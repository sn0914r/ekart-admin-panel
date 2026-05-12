import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "@app/store/authStore";
import { useLogoutMutation } from "@modules/auth/hooks/api/useLogoutMutation";
import {
  BarChart2,
  ShoppingCart,
  Users,
  Package,
  Settings,
  Monitor,
  LogOut,
  LogIn,
  PieChart,
} from "lucide-react";
import {
  SidebarContainer,
  SidebarLogoBlock,
  SidebarLogoIcon,
  SidebarLogoName,
  NavList,
  NavSectionLabel,
  StyledNavLink,
  LogoutSection,
  LogoutButton,
  LoginButton,
} from "./Sidebar.styles";

const Sidebar = ({ isOpen }) => {
  const user = useAuthStore((state) => state.user);
  const navigate = useNavigate();
  const { mutate: mutateLogout } = useLogoutMutation();
  return (
    <SidebarContainer isOpen={isOpen}>
      <SidebarLogoBlock>
        <SidebarLogoIcon style={{ fontSize: '20px', fontWeight: '800', color: 'white', fontFamily: 'monospace' }}>
          e
        </SidebarLogoIcon>
        <SidebarLogoName>eKart</SidebarLogoName>
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
