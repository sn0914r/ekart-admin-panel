import styled from "@emotion/styled";

export const PageLayout = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MainContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.02);
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;
