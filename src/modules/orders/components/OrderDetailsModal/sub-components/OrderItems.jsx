import React from "react";
import * as S from "../OrderDetailModal.styles";

const OrderItems = ({ items }) => {
  return (
    <S.LeftColumn>
      <S.SectionTitle>Purchased Items</S.SectionTitle>
      {items?.map((item) => (
        <S.ProductItem key={item.productId || item.name}>
          <S.ProductImage src={item.imageUrl} alt={item.name} />
          <S.ProductDetails>
            <div className="name">{item.name}</div>
            <div className="meta">
              Qty: {item.quantity} × ₹
              {item.unitPrice?.toLocaleString("en-IN")}
            </div>
          </S.ProductDetails>
        </S.ProductItem>
      ))}
      {(!items || items.length === 0) && (
        <div style={{ color: "var(--muted)", fontSize: "12px" }}>
          No items found in snapshot.
        </div>
      )}
    </S.LeftColumn>
  );
};

export default OrderItems;
