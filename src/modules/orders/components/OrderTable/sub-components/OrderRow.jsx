import React from "react";
import { Eye } from "lucide-react";
import * as S from "../OrderTable.styles";

const OrderRow = ({ order, onView }) => {
  const dateStr = new Date(order.createdAt).toLocaleDateString("en-IN", {
    day: 'numeric', month: 'short', year: 'numeric'
  });

  return (
    <tr>
      <S.Td><S.IdText>#{order._id.slice(-6).toUpperCase()}</S.IdText></S.Td>
      <S.Td>{order.email}</S.Td>
      <S.Td>₹{order.subTotal?.toLocaleString("en-IN") || "0.00"}</S.Td>
      <S.Td>
        <S.Badge className={`payment ${order.paymentStatus?.toLowerCase() || 'pending'}`}>
          {order.paymentStatus || 'PENDING'}
        </S.Badge>
      </S.Td>
      <S.Td>
        <S.Badge className={`shipping ${order.shippingStatus?.toLowerCase() || 'pending'}`}>
          {order.shippingStatus || 'PENDING'}
        </S.Badge>
      </S.Td>
      <S.Td>
        <S.Badge className={`order ${order.orderStatus?.toLowerCase() || 'created'}`}>
          {order.orderStatus || 'CREATED'}
        </S.Badge>
      </S.Td>
      <S.Td><S.DateText>{dateStr}</S.DateText></S.Td>
      <S.Td style={{ textAlign: "right" }}>
        <S.ActionGroup>
          <S.ActionButton 
            className="view" 
            title="View Order" 
            onClick={(e) => { 
              e.stopPropagation(); 
              onView && onView(order); 
            }}
          >
            <Eye size={14} />
          </S.ActionButton>
        </S.ActionGroup>
      </S.Td>
    </tr>
  );
};

export default OrderRow;
