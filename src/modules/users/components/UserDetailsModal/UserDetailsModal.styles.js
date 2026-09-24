import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 4px 0;
`;

export const ProfileHeaderCard = styled.div`
  background: var(--surface2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
`;

export const ProfileIdentityGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export const LargeAvatar = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: var(--surface);
  border: 1.5px solid var(--accent);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  flex-shrink: 0;
`;

export const ProfileDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const ProfileNameRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  flex-wrap: wrap;
`;

export const ProfileFullName = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`;

export const ProfileMetaInfo = styled.div`
  font-size: 12px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;

  span {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }
`;

export const ProfileBadgeGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 12px;
`;

export const StatCard = styled.div`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 14px 16px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const StatIconWrapper = styled.div`
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--surface2);
  color: var(--accent);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const StatValue = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: var(--text);
`;

export const StatLabel = styled.span`
  font-size: 11px;
  color: var(--muted);
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const OrdersTableWrapper = styled.div`
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow-x: auto;
  background: var(--surface);
`;

export const MiniTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-size: 11px;
  min-width: 500px;
`;

export const MiniTh = styled.th`
  background: var(--surface2);
  color: var(--muted);
  font-weight: 500;
  padding: 8px 12px;
  text-align: left;
  border-bottom: 1px solid var(--border);
  white-space: nowrap;
`;

export const MiniTd = styled.td`
  padding: 10px 12px;
  border-bottom: 1px solid var(--border);
  color: var(--text);
  white-space: nowrap;

  tr:last-child & {
    border-bottom: none;
  }
`;

export const EmptyOrders = styled.div`
  padding: 24px;
  text-align: center;
  color: var(--muted);
  font-size: 12px;
`;

export const ModerationBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  border-top: 1px solid var(--border);
  flex-wrap: wrap;
  gap: 12px;
`;

export const NoticeText = styled.span`
  font-size: 12px;
  color: var(--muted);
`;

export const ActionButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-left: auto;
`;

export const OutlineButton = styled.button`
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 7px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    background: var(--surface2);
    border-color: var(--accent);
    color: var(--accent);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const DestructiveButton = styled.button`
  background: var(--badge-red-bg);
  border: 1px solid transparent;
  color: var(--badge-red-text);
  padding: 7px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.85;
    border-color: var(--badge-red-text);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SuccessButton = styled.button`
  background: var(--badge-green-bg);
  border: 1px solid transparent;
  color: var(--badge-green-text);
  padding: 7px 14px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    opacity: 0.85;
    border-color: var(--badge-green-text);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
