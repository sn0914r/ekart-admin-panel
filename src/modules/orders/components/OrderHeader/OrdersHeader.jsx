import React from "react";
import * as S from "./OrdersHeader.styles";
import {
  VALID_PAYMENT_STATUS,
  VALID_ORDER_STATUS,
  VALID_SHIPPING_STATUS,
} from "../../../../constants/orders";

const OrdersHeader = ({
  searchTerm,
  setSearchTerm,
  filters = {},
  onFilterChange = () => {},
}) => {
  return (
    <S.TopArea>
      <S.TitleSection>
        <S.PageTitle>Orders</S.PageTitle>
        <S.PageSubtitle>
          Track, manage, and dispatch customer orders.
        </S.PageSubtitle>
      </S.TitleSection>

      <S.ControlsSection>
        <S.FilterSelect
          value={filters.paymentStatus || ""}
          onChange={(e) => onFilterChange("paymentStatus", e.target.value)}
        >
          <option value="">All Payments</option>
          {VALID_PAYMENT_STATUS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </S.FilterSelect>
        <S.FilterSelect
          value={filters.orderStatus || ""}
          onChange={(e) => onFilterChange("orderStatus", e.target.value)}
        >
          <option value="">All Orders</option>
          {VALID_ORDER_STATUS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </S.FilterSelect>

        <S.FilterSelect
          value={filters.shippingStatus || ""}
          onChange={(e) => onFilterChange("shippingStatus", e.target.value)}
        >
          <option value="">All Shipping</option>
          {VALID_SHIPPING_STATUS.map((status) => (
            <option key={status} value={status}>
              {status}
            </option>
          ))}
        </S.FilterSelect>

        <S.SearchInput
          type="text"
          placeholder="Search orders..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </S.ControlsSection>
    </S.TopArea>
  );
};

export default OrdersHeader;
