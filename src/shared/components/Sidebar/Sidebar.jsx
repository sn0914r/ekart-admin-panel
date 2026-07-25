import { useNavigate } from "react-router-dom";
import { useAuthStore } from "@app/store/authStore";
import { useThemeStore } from "@app/store/useThemeStore";
import { useLogoutMutation } from "@modules/auth/hooks/api/useLogoutMutation";
import {
  BarChart2,
  ShoppingCart,
  Package,
  LogOut,
  LogIn,
  PieChart,
  CircleUser,
} from "lucide-react";
import {
  SidebarContainer,
  SidebarProfileBlock,
  ProfileIconWrapper,
  ProfileInfo,
  ProfileName,
  ProfileEmail,
  ProfileRole,
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
      <SidebarProfileBlock>
        <ProfileIconWrapper>
          <CircleUser />
        </ProfileIconWrapper>
        <ProfileInfo>
          <ProfileName>{user?.name || "Admin User"}</ProfileName>
          <ProfileEmail>{user?.email || "admin@ekart.com"}</ProfileEmail>
          <ProfileRole>
            {user?.role === "demo-admin" ? "Demo Admin" : "Admin"}
          </ProfileRole>
        </ProfileInfo>
      </SidebarProfileBlock>

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

        {/* <NavSectionLabel style={{ marginTop: "16px" }}>SYSTEM</NavSectionLabel>
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
