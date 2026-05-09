import React from "react";
import * as S from "../OrderDetailModal.styles";

const ShippingAddress = ({ address }) => {
  if (!address) return null;

  return (
    <S.BottomRow>
      <S.SectionTitle>Shipping Destination</S.SectionTitle>
      <div style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.5 }}>
        <span style={{ fontWeight: 600, color: "var(--text)" }}>{address.name}</span> • {address.phone}<br/>
        <span style={{ color: "var(--muted)" }}>
          {address.address}<br />
          {address.city}, {address.state} {address.pincode}<br />
          {address.country}
        </span>
      </div>
    </S.BottomRow>
  );
};

export default ShippingAddress;
