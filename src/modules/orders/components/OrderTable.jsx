import { Eye, PackageOpen } from "lucide-react";
import {
  TableWrapper,
  DataTable,
  Th,
  Td,
  Badge,
  ActionGroup,
  ActionButton,
  IdText,
  DateText
} from "./OrderTable.styles";

const OrderTable = ({ orders, onView }) => {
  if (!orders || orders.length === 0) {
    return (
      <TableWrapper>
        <div style={{ textAlign: 'center', padding: '60px 0', color: 'var(--muted)' }}>
          <PackageOpen size={48} style={{ opacity: 0.3, marginBottom: '16px' }} />
          <p>No orders found.</p>
        </div>
      </TableWrapper>
    );
  }

  return (
    <TableWrapper>
      <DataTable>
        <thead>
          <tr>
            <Th>Order ID</Th>
            <Th>User Email</Th>
            <Th>Amount</Th>
            <Th>Payment</Th>
            <Th>Shipping</Th>
            <Th>Status</Th>
            <Th>Date</Th>
            <Th style={{ textAlign: "right" }}>Action</Th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const dateStr = new Date(order.createdAt).toLocaleDateString("en-IN", {
              day: 'numeric', month: 'short', year: 'numeric'
            });
            
            return (
              <tr key={order._id}>
                <Td><IdText>#{order._id.slice(-6).toUpperCase()}</IdText></Td>
                <Td>{order.email}</Td>
                <Td>₹{order.subTotal?.toLocaleString("en-IN") || "0.00"}</Td>
                <Td>
                  <Badge className={`payment ${order.paymentStatus?.toLowerCase() || 'pending'}`}>
                    {order.paymentStatus || 'PENDING'}
                  </Badge>
                </Td>
                <Td>
                  <Badge className={`shipping ${order.shippingStatus?.toLowerCase() || 'pending'}`}>
                    {order.shippingStatus || 'PENDING'}
                  </Badge>
                </Td>
                <Td>
                  <Badge className={`order ${order.orderStatus?.toLowerCase() || 'created'}`}>
                    {order.orderStatus || 'CREATED'}
                  </Badge>
                </Td>
                <Td><DateText>{dateStr}</DateText></Td>
                <Td style={{ textAlign: "right" }}>
                  <ActionGroup>
                    <ActionButton className="view" title="View Order" onClick={(e) => { e.stopPropagation(); onView && onView(order); }}>
                      <Eye size={14} />
                    </ActionButton>
                  </ActionGroup>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </DataTable>
    </TableWrapper>
  );
};

export default OrderTable;
