import styled from '@emotion/styled';

export const TableWrapper = styled.div`
  width: 100%;
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  /* Removed padding for flush sticky header */
  
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: var(--border);
    border-radius: 4px;
  }
`;

export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
`;

export const Th = styled.th`
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
  
  &:first-of-type {
    padding-left: 24px;
  }
  
  &:last-of-type {
    padding-right: 24px;
  }
`;

export const Td = styled.td`
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
  font-size: 11px;
`;

// Dynamic Badging System for Orders
export const Badge = styled.span`
  font-size: 10px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.02em;

  /* Payment Status */
  &.payment.paid {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }
  &.payment.pending {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }

  /* Shipping Status */
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

  /* Order Status */
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

export const ActionGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: flex-end;
`;

export const ActionButton = styled.button`
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
