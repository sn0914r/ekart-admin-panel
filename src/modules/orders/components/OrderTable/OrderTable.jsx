import { PackageOpen } from "lucide-react";
import * as S from "./OrderTable.styles";
import OrderRow from "./sub-components/OrderRow";

const OrderTable = ({ orders, onView }) => {
  if (!orders || orders.length === 0) {
    return (
      <S.TableWrapper>
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)' }}>
          <PackageOpen size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
          <p>No orders found.</p>
        </div>
      </S.TableWrapper>
    );
  }

  return (
    <S.TableWrapper>
      <S.DataTable>
        <thead>
          <tr>
            <S.Th>Order ID</S.Th>
            <S.Th>User Email</S.Th>
            <S.Th>Amount</S.Th>
            <S.Th>Payment</S.Th>
            <S.Th>Shipping</S.Th>
            <S.Th>Status</S.Th>
            <S.Th>Date</S.Th>
            <S.Th style={{ textAlign: "right" }}>Action</S.Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <OrderRow 
              key={order._id} 
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
