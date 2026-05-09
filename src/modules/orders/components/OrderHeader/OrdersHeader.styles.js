import styled from "@emotion/styled";

export const TopArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  flex-wrap: wrap;
  gap: 16px;
`;

export const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 4px 0;
`;

export const PageSubtitle = styled.p`
  font-size: 13px;
  color: var(--muted);
  margin: 0;
`;

export const ControlsSection = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
`;
