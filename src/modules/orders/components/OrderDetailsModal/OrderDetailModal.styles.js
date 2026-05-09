import styled from "@emotion/styled";

/**
 * ============================================================================
 * 1. SHARED MODAL LAYOUT
 * Components: OrderDetailModal
 * ============================================================================
 */

export const ModalContainer = styled.div`
  label: ModalContainer;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const TopRow = styled.div`
  label: TopRow;
  display: flex;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RightColumn = styled.div`
  label: RightColumn;
  flex: 1.2;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

/**
 * ============================================================================
 * 2. SHARED UI ELEMENTS
 * Used by: OrderItems, OrderSummary, ShippingAddress, StatusTimeline, etc.
 * ============================================================================
 */

export const SectionTitle = styled.h3`
  label: SectionTitle;
  font-size: 14px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 16px 0;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const BottomRow = styled.div`
  label: BottomRow;
  background: var(--surface2);
  border-radius: 12px;
  padding: 16px;
`;

export const InfoGroup = styled.div`
  label: InfoGroup;
  display: flex;
  gap: 16px;

  > div {
    flex: 1;
  }
`;

export const Label = styled.div`
  label: Label;
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  margin-bottom: 4px;
`;

export const Value = styled.div`
  label: Value;
  font-size: 13px;
  color: var(--text);
  word-break: break-all;
`;

/**
 * ============================================================================
 * 3. ORDER ITEMS COMPONENT STYLES
 * Components: OrderItems
 * ============================================================================
 */

export const LeftColumn = styled.div`
  label: LeftColumn;
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

export const ProductItem = styled.div`
  label: ProductItem;
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
  label: ProductImage;
  width: 48px;
  height: 48px;
  border-radius: 8px;
  object-fit: cover;
  background: var(--bg);
`;

export const ProductDetails = styled.div`
  label: ProductDetails;
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

/**
 * ============================================================================
 * 4. BADGE SYSTEM
 * Used by: OrderSummary, ShippingManagement
 * ============================================================================
 */

export const Badge = styled.span`
  label: Badge;
  font-size: 10px;
  font-weight: 500;
  padding: 4px 10px;
  border-radius: 20px;
  display: inline-flex;

  /* Payment Variants (OrderSummary) */
  &.payment.paid {
    background: var(--badge-green-bg);
    color: var(--badge-green-text);
  }
  &.payment.pending {
    background: var(--badge-amber-bg);
    color: var(--badge-amber-text);
  }

  /* Order Variants (OrderSummary) */
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

  /* Shipping Variants (ShippingManagement) */
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

/**
 * ============================================================================
 * 5. SHIPPING MANAGEMENT COMPONENTS
 * Components: ShippingManagement
 * ============================================================================
 */

export const TransitionGroup = styled.div`
  label: TransitionGroup;
  display: flex;
  gap: 8px;
`;

export const TransitionButton = styled.button`
  label: TransitionButton;
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

/**
 * ============================================================================
 * 6. STATUS HISTORY TIMELINE
 * Components: StatusTimeline
 * ============================================================================
 */

export const Timeline = styled.div`
  label: Timeline;
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
  label: TimelineItem;
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
