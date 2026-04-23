import styled from "@emotion/styled";

export const LayoutShell = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: var(--bg);
  color: var(--text);
  font-family: 'Geist', 'Inter', sans-serif;
`;

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0; /* Prevents overflow pushing grid */
  overflow: hidden;
`;

export const PageContent = styled.main`
  flex: 1;
  padding: 24px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;
