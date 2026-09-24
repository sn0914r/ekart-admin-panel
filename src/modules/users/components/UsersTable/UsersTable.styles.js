import styled from "@emotion/styled";

export const TableWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;

  ${(props) =>
    props.$hasPagination &&
    `
    border-bottom: none;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  `}

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }
`;

export const EmptyStateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  gap: 12px;
`;

export const EmptyStateTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
`;

export const EmptyStateTitle = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: var(--text);
`;

export const EmptyStateSubtitle = styled.span`
  font-size: 12px;
  color: var(--muted);
`;

export const DataTable = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: collapse;
  font-size: 12px;
  table-layout: fixed;
`;

export const Th = styled.th`
  text-align: left;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  padding: 16px 12px;
  border-bottom: 0.5px solid var(--border);
  white-space: nowrap;
  position: sticky;
  top: 0;
  background: var(--surface);
  z-index: 10;
  user-select: none;

  &.sortable {
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
      color: var(--text);
    }
  }

  .th-content {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .sort-icon-wrapper {
    display: inline-flex;
    align-items: center;
    opacity: 0;
    transition: opacity 0.2s ease;

    &.active {
      opacity: 1;
    }
  }

  &:hover .sort-icon-wrapper:not(.active) {
    opacity: 0.3;
  }

  &:first-of-type {
    padding-left: 24px;
  }

  &:last-of-type {
    padding-right: 24px;
  }
`;

export const Td = styled.td`
  padding: 14px 12px;
  border-bottom: 0.5px solid var(--border);
  color: var(--text);
  vertical-align: middle;

  tr:last-child & {
    border-bottom: none;
  }

  &:first-of-type {
    padding-left: 24px;
  }

  &:last-of-type {
    padding-right: 24px;
  }
`;

export const UserCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const AvatarWrapper = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: var(--surface2);
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: var(--accent);
  flex-shrink: 0;
  text-transform: uppercase;
`;

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  overflow: hidden;
`;

export const UserName = styled.span`
  font-weight: 500;
  font-size: 13px;
  color: var(--text);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const UserEmail = styled.span`
  font-size: 11px;
  color: var(--muted);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PhoneText = styled.span`
  font-family: monospace;
  font-size: 12px;
  color: var(--text);
`;

export const IdText = styled.span`
  font-family: monospace;
  font-weight: 600;
  color: var(--text);
  background: var(--surface2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
`;

export const DateText = styled.span`
  color: var(--muted);
  font-size: 12px;
`;

export const RoleBadge = styled.span`
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;

  &.admin {
    background: var(--accent-light);
    color: var(--accent);
    border: 1px solid rgba(79, 70, 229, 0.2);
  }

  &.demo-admin {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }

  &.user {
    background: var(--surface2);
    color: var(--muted);
  }
`;

export const StatusBadge = styled.span`
  font-size: 11px;
  font-weight: 500;
  padding: 3px 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  letter-spacing: 0.02em;

  &::before {
    content: "";
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }

  &.active {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
    &::before {
      background: var(--badge-green-text);
    }
  }

  &.suspended {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
    &::before {
      background: var(--badge-red-text);
    }
  }
`;

export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const ActionButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 6px;
  border: 1px solid var(--border);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--surface2);
  color: var(--text);

  &:hover:not(:disabled) {
    border-color: var(--accent);
    color: var(--accent);
    transform: translateY(-1px);
  }

  &.view {
    &:hover:not(:disabled) {
      background: var(--accent-light);
      border-color: var(--accent);
      color: var(--accent);
    }
  }

  &.edit-role {
    &:hover:not(:disabled) {
      background: var(--badge-amber-bg);
      border-color: var(--badge-amber-text);
      color: var(--badge-amber-text);
    }
  }

  &.suspend {
    &:hover:not(:disabled) {
      background: var(--badge-red-bg);
      border-color: var(--badge-red-text);
      color: var(--badge-red-text);
    }
  }

  &.activate {
    &:hover:not(:disabled) {
      background: var(--badge-green-bg);
      border-color: var(--badge-green-text);
      color: var(--badge-green-text);
    }
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
