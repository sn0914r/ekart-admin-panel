import { PackageOpen } from "lucide-react";
import * as S from "./OrderTable.styles";
import OrderRow from "./sub-components/OrderRow";
import SortHeader from "./sub-components/SortHeader";

const OrderTable = ({ orders, onView, sorts = [], onSort, hasPagination }) => {
  if (!orders || orders.length === 0) {
    return (
      <S.TableWrapper>
        <S.EmptyStateContainer>
          <PackageOpen size={48} strokeWidth={1.5} color="var(--muted)" style={{ opacity: 0.6 }} />
          <S.EmptyStateTextGroup>
            <S.EmptyStateTitle>No orders found.</S.EmptyStateTitle>
            <S.EmptyStateSubtitle>Try adjusting your filters or search query.</S.EmptyStateSubtitle>
          </S.EmptyStateTextGroup>
        </S.EmptyStateContainer>
      </S.TableWrapper>
    );
  }

  return (
    <S.TableWrapper $hasPagination={hasPagination}>
      <S.DataTable>
        <thead>
          <tr>
            <SortHeader field="orderId" sorts={sorts} onSort={onSort} label="Order ID" width="12%" />
            <SortHeader field="email" sorts={sorts} onSort={onSort} label="User Email" width="22%" />
            <SortHeader field="subTotal" sorts={sorts} onSort={onSort} label="Amount" width="10%" />
            <SortHeader field="paymentStatus" sorts={sorts} onSort={onSort} label="Payment" width="12%" />
            <SortHeader field="orderStatus" sorts={sorts} onSort={onSort} label="Order Status" width="14%" />
            <SortHeader field="shippingStatus" sorts={sorts} onSort={onSort} label="Shipping" width="12%" />
            <SortHeader field="createdAt" sorts={sorts} onSort={onSort} label="Date" width="12%" />
            <S.Th style={{ textAlign: "right", width: "6%" }}>Action</S.Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow 
              key={order.orderId || order._id} 
              order={order} 
              onView={onView} 
            />
          ))}
        </tbody>
      </S.DataTable>
    </S.TableWrapper>
  );
};

export default OrderTable;
