import React from "react";
import * as S from "../OrderDetailModal.styles";

const ShippingAddress = ({ address }) => {
  if (!address) return null;

  return (
    <S.BottomRow>
      <S.SectionTitle>Shipping Destination</S.SectionTitle>
      <S.AddressContainer>
        <S.AddressName>{address.name}</S.AddressName>
        <S.AddressPhone>{address.phone}</S.AddressPhone>
        
        <S.AddressDetails>
          <span>{address.address}</span>
          <span>{address.city}</span>
          <span>{address.state} {address.pincode}</span>
          <span>{address.country}</span>
        </S.AddressDetails>
      </S.AddressContainer>
    </S.BottomRow>
  );
};

export default ShippingAddress;
