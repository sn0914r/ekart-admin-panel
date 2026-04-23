import styled from "@emotion/styled";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TopRow = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  flex: 1;
  background: var(--surface2);
  border-radius: 12px;
  padding: 16px;
  max-height: 400px;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const RightColumn = styled.div`
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const BottomRow = styled.div`
  background: var(--surface2);
  border-radius: 12px;
  padding: 16px;
`;

export const SectionTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

// =====================
// Custom Products Look
// =====================
export const ProductItem = styled.div`
  display: flex;
  gap: 12px;
  padding: 12px;
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 8px;
  margin-bottom: 12px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export const ProductImage = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  background: var(--bg);
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;

  .name {
    font-size: 13px;
    font-weight: 500;
    color: var(--text);
    margin-bottom: 4px;
  }

  .meta {
    font-size: 11px;
    color: var(--muted);
  }
`;

// =====================
// Info Groupings
// =====================
export const InfoGroup = styled.div`
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
`;

export const Label = styled.div`
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  margin-bottom: 4px;
`;

export const Value = styled.div`
  font-size: 13px;
  color: var(--text);
  word-break: break-all;
`;

// =====================
// Common Badges
// =====================
export const Badge = styled.span`
  font-size: 10px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;

  &.payment.paid {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }
  &.payment.pending {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }

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
`;

// =====================
// Transistion State Logic
// =====================
export const TransitionGroup = styled.div`
  display: flex;
  gap: 8px;
`;

export const TransitionButton = styled.button`
  font-size: 11px;
  font-weight: 500;
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
  color: #fff;
  opacity: ${(props) => (props.disabled ? 0.6 : 1)};

  &.packed,
  &.shipped,
  &.delivered {
    background: var(--accent);
  }

  &.cancelled {
    background: var(--badge-red-bg);
    color: var(--badge-red-text);
  }

  &:hover:not(:disabled) {
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

// =====================
// History Timeline
// =====================
export const Timeline = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: 4px;
    top: 4px;
    bottom: 4px;
    width: 2px;
    background: var(--border);
  }
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 16px;
  position: relative;
  z-index: 1;

  .dot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 0 4px var(--surface2);
    margin-top: 4px;
    flex-shrink: 0;
  }

  .content {
    display: flex;
    flex-direction: column;

    .status {
      font-size: 12px;
      font-weight: 500;
      color: var(--text);
    }

    .time {
      font-size: 11px;
      color: var(--muted);
      margin-top: 2px;
    }
  }
`;
