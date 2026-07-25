import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 16px 24px;
  background: var(--surface);
  border-left: 0.5px solid var(--border);
  border-right: 0.5px solid var(--border);
  border-bottom: 0.5px solid var(--border);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;

  @media (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    padding: 16px;
  }
`;

export const LimitSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .limit-label {
    font-size: 13px;
    color: var(--muted);
    white-space: nowrap;
  }
`;

export const LimitSelect = styled.select`
  appearance: none;
  background-color: var(--surface2);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%239ca3af' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 16px;
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  padding: 0 32px 0 12px;
  height: 32px;
  font-size: 13px;
  cursor: pointer;
  outline: none;
  transition: all 0.2s;

  &:hover, &:focus {
    border-color: var(--accent);
  }
`;

export const PageButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 32px;
  height: 32px;
  padding: 0 8px;
  border-radius: 6px;
  border: 1px solid transparent;
  background: transparent;
  color: var(--muted);
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: var(--surface2);
    color: var(--text);
  }

  &.active {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Ellipsis = styled.span`
  color: var(--muted);
  font-size: 13px;
  padding: 0 4px;
`;
