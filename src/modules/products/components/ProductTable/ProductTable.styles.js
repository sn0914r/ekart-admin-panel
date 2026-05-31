import styled from "@emotion/styled";

// =====================
// Layout
// =====================
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

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
    width: 0px;
    height: 0px;
  }
  /* Hide scrollbar for IE, Edge and Firefox */
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

// =====================
// Table Elements
// =====================
export const DataTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 12px;
`;

export const Th = styled.th`
  text-align: ${(props) => props.align || "left"};
  width: ${(props) => props.width || "auto"};
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

export const Td = styled.td`
  padding: 12px 8px;
  border-bottom: 0.5px solid var(--border);
  color: var(--text);
  vertical-align: middle;
  text-align: ${(props) => props.align || "left"};

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

// =====================
// Cells & Typography
// =====================
export const ProductCell = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ProductImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  object-fit: cover;
  background: var(--surface2);
`;

export const PlaceholderImage = styled.div`
  width: 40px;
  height: 40px;
  background: var(--surface2);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProductTextContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductName = styled.div`
  font-weight: 500;
  color: var(--text);
  font-size: 13px;
`;

export const ProductSubtext = styled.div`
  color: var(--muted);
  font-size: 11px;
  margin-top: 2px;
`;

export const CategoryBadge = styled.span`
  text-transform: capitalize;
  font-size: 10px;
  font-weight: 600;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;
  background: ${(props) => props.$bg || "var(--surface2)"};
  color: ${(props) => props.$text || "var(--muted)"};
`;

export const StockText = styled.span`
  color: ${(props) => {
    if (props.$status === 'critical') return 'var(--badge-red-text)';
    if (props.$status === 'low') return 'var(--badge-amber-text)';
    return 'inherit';
  }};
  font-weight: ${(props) => (props.$status !== 'normal' ? 600 : 400)};
`;

// =====================
// Empty State
// =====================
export const EmptyStateContainer = styled.div`
  text-align: center;
  padding: 60px 0;
  color: var(--muted);
`;

export const EmptyStateIcon = styled.div`
  opacity: 0.3;
  margin-bottom: 16px;
  display: flex;
  justify-content: center;
`;

// =====================
// Toggle Switch
// =====================
export const ToggleWrapper = styled.label`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;

  input {
    display: none;
  }
`;

export const ToggleSwitch = styled.div`
  position: relative;
  width: 32px;
  height: 18px;
  background: ${(props) => (props.$isOn ? "var(--accent)" : "var(--surface2)")};
  border: 1px solid
    ${(props) => (props.$isOn ? "var(--accent)" : "var(--border)")};
  border-radius: 20px;
  transition: all 0.2s ease;

  &::after {
    content: "";
    position: absolute;
    top: 1px;
    left: ${(props) => (props.$isOn ? "15px" : "1px")};
    width: 14px;
    height: 14px;
    background: ${(props) => (props.$isOn ? "#fff" : "var(--muted)")};
    border-radius: 50%;
    transition: all 0.2s ease;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  }
`;

export const ToggleText = styled.span`
  font-size: 11px;
  font-weight: 500;
  color: ${(props) => (props.$isOn ? "var(--text)" : "var(--muted)")};
  width: 50px;
  display: inline-block;
`;

// =====================
// Actions
// =====================
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

  &.edit {
    background: var(--accent-light);
    color: var(--accent);
  }

  &.delete {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }

  &:hover {
    opacity: 0.8;
    transform: translateY(-1px);
  }
`;
