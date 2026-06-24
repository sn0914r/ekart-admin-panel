import styled from "@emotion/styled";

/**
 * ============================================================================
 * 1. TABLE CONTAINER & STRUCTURE
 * Components: OrderTable
 * ============================================================================
 */

export const TableWrapper = styled.div`
  label: TableWrapper;
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
  label: DataTable;
  width: 100%;
  min-width: 900px; /* Forces horizontal scroll on small screens */
  border-collapse: collapse;
  font-size: 12px;
  table-layout: fixed;
`;

export const Th = styled.th`
  label: Th;
  text-align: left;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  padding: 16px 8px;
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

/**
 * ============================================================================
 * 2. TABLE ROW & CELL CONTENT
 * Components: OrderRow
 * ============================================================================
 */

export const Td = styled.td`
  label: Td;
  padding: 12px 8px;
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

export const IdText = styled.span`
  label: IdText;
  font-family: monospace;
  font-weight: 600;
  color: var(--text);
  background: var(--surface2);
  padding: 2px 6px;
  border-radius: 4px;
  font-size: 11px;
`;

export const DateText = styled.span`
  label: DateText;
  color: var(--muted);
  font-size: 11px;
`;

/**
 * ============================================================================
 * 3. STATUS BADGES
 * Components: OrderRow
 * ============================================================================
 */

export const Badge = styled.span`
  label: Badge;
  font-size: 10px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;

  /* Payment Status Variants */
  &.payment.paid {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }
  &.payment.pending,
  &.payment.refund-pending {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }
  &.payment.refunded {
    background: var(--surface2);
    color: var(--text);
  }

  /* Shipping Status Variants */
  &.shipping.pending {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }
  &.shipping.packed {
    background: var(--surface2);
    color: var(--accent);
  }
  &.shipping.shipped {
    background: var(--accent-light);
    color: var(--accent);
  }
  &.shipping.delivered {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }
  &.shipping.cancelled {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }

  /* Order Status Variants */
  &.order.confirmed {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }
  &.order.created {
    background: var(--surface2);
    color: var(--text);
  }
  &.order.cancelled {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }
`;

/**
 * ============================================================================
 * 4. ACTION CONTROLS
 * Components: OrderRow
 * ============================================================================
 */

export const ActionGroup = styled.div`
  label: ActionGroup;
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const ActionButton = styled.button`
  label: ActionButton;
  width: 28px;
  height: 28px;
  border-radius: 6px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
  background: var(--surface2);
  color: var(--text);

  &.view {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;
