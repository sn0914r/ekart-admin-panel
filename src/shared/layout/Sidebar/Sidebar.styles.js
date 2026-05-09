import styled from "@emotion/styled";

export const SidebarContainer = styled.aside`
  background: var(--surface);
  border-right: 0.5px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  transition: width 0.3s ease;
  width: ${({ isOpen }) => (isOpen ? "220px" : "0px")};
  white-space: nowrap;
`;

export const SidebarLogoBlock = styled.div`
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-bottom: 0.5px solid var(--border);
`;

export const SidebarLogoIcon = styled.div`
  width: 28px;
  height: 28px;
  background: var(--accent);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const SidebarLogoText = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SidebarLogoName = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
`;

export const SidebarLogoSub = styled.span`
  font-size: 11px;
  color: var(--muted);
`;

export const NavList = styled.nav`
  padding: 10px;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-y: auto;
`;

export const NavSectionLabel = styled.div`
  font-size: 10px;
  color: var(--muted);
  letter-spacing: 0.08em;
  font-weight: 500;
  padding: 8px 10px 4px;
`;

import { NavLink } from "react-router-dom";

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 10px;
  border-radius: 8px;
  font-size: 13px;
  color: var(--muted);
  cursor: pointer;
  margin-bottom: 2px;
  transition:
    background 0.15s,
    color 0.15s;
  text-decoration: none;

  &:hover {
    background: var(--surface2);
    color: var(--text);
  }

  &.active {
    background: var(--accent-light);
    color: var(--accent);
    font-weight: 500;
  }

  svg {
    width: 15px;
    height: 15px;
    flex-shrink: 0;
    stroke: currentColor;
    fill: none;
    stroke-width: 1.8;
    stroke-linecap: round;
  }
`;

export const LogoutSection = styled.div`
  padding: 0 24px;
  margin-top: auto;
  margin-bottom: 24px;
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 12px;
  background: transparent;
  border: none;
  color: var(--badge-red-text);
  cursor: pointer;
  font-weight: 500;
  font-size: 13px;
  border-radius: 8px;
  transition: background 0.2s;
  font-family: inherit;

  &:hover {
    background: var(--badge-red-bg);
  }
`;

export const LoginButton = styled(LogoutButton)`
  color: var(--accent);

  &:hover {
    background: var(--accent-light);
  }
`;
