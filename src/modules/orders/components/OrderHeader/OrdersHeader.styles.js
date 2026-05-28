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

export const SearchInput = styled.input`
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  width: 250px;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--accent-light);
  }

  &::placeholder {
    color: var(--muted);
  }
`;

export const FilterSelect = styled.select`
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 32px 8px 12px;
  border-radius: 6px;
  font-size: 13px;
  outline: none;
  appearance: none;
  cursor: pointer;
  transition: border-color 0.2s, box-shadow 0.2s;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%2371717a' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 8px center;

  &:focus {
    border-color: var(--accent);
    box-shadow: 0 0 0 2px var(--accent-light);
  }
`;
