import styled from "@emotion/styled";

export const TopbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
  height: 56px;
  border-bottom: 0.5px solid var(--border);
  background: var(--surface);
`;

export const TopbarLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  color: var(--text);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  border-radius: 8px;
  transition: background 0.15s;

  &:hover {
    background: var(--surface2);
  }
`;

export const TopbarTitleBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TopbarTitle = styled.h1`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: var(--text);
`;

export const TopbarSubtitle = styled.span`
  font-size: 12px;
  color: var(--muted);
  margin-top: 2px;
`;

export const TopbarRight = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;
