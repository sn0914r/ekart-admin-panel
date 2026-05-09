import React from "react";
import * as S from "../OrderDetailModal.styles";

const OrderSummary = ({ order }) => {
  return (
    <>
      <S.SectionTitle>Order Summary</S.SectionTitle>
      <S.InfoGroup>
        <div>
          <S.Label>Order ID</S.Label>
          <S.Value>{order._id}</S.Value>
        </div>
        <div>
          <S.Label>Customer Email</S.Label>
          <S.Value>{order.email}</S.Value>
        </div>
      </S.InfoGroup>

      <S.InfoGroup>
        <div>
          <S.Label>Sub Total</S.Label>
          <S.Value style={{ fontWeight: 600 }}>
            ₹{order.subTotal?.toLocaleString("en-IN")}
          </S.Value>
        </div>
        <div>
          <S.Label>Payment ID</S.Label>
          <S.Value>
            {order.paymentDetails?.razorpayPaymentId || "N/A"}
          </S.Value>
        </div>
      </S.InfoGroup>

      <S.InfoGroup>
        <div>
          <S.Label>Payment Status</S.Label>
          <S.Badge
            className={`payment ${order.paymentStatus?.toLowerCase()}`}
          >
            {order.paymentStatus}
          </S.Badge>
        </div>
        <div>
          <S.Label>Order Status</S.Label>
          <S.Badge
            className={`order ${order.orderStatus?.toLowerCase()}`}
          >
            {order.orderStatus}
          </S.Badge>
        </div>
      </S.InfoGroup>
    </>
  );
};

export default OrderSummary;
