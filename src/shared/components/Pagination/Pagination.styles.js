import styled from "@emotion/styled";

export const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 8px;
  padding: 16px 24px;
  background: var(--surface);
  border-left: 0.5px solid var(--border);
  border-right: 0.5px solid var(--border);
  border-bottom: 0.5px solid var(--border);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const LimitSelectorWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .limit-label {
    font-size: 13px;
    color: var(--muted);
  }
`;

export const LimitSelect = styled.select`
  background: var(--surface2);
  border: 1px solid var(--border);
  color: var(--text);
  border-radius: 6px;
  padding: 0 8px;
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
