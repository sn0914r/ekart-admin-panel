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

export const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  background: var(--bg);
  border-radius: 8px;
  padding: 0 12px;
  height: 36px;
`;

export const StyledInput = styled.input`
  border: none;
  background: transparent;
  outline: none;
  color: var(--text);
  font-size: 12px;
  width: 160px;

  &::placeholder {
    color: var(--muted);
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  height: 36px;
  padding: 0 12px;
  border: 0.5px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--surface2);
  }
`;

export const ExportButton = styled.button`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 16px;
  border: 0.5px solid var(--border);
  border-radius: 8px;
  background: var(--surface);
  color: var(--text);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--surface2);
    border-color: var(--accent);
  }
`;
