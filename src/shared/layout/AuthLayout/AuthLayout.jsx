import React from "react";
import * as S from "./AuthLayout.styles";
import {
  ShoppingCart,
  Package,
  Truck,
  Tag,
  CreditCard,
  Store,
  Gift,
  Percent,
} from "lucide-react";

const AuthLayout = ({ children }) => {
  return (
    <S.AuthContainer>
      <S.AuthSplash>
        <S.FloatingIconWrapper top="15%" left="15%" duration="7s" delay="0s">
          <ShoppingCart size={40} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper top="25%" right="15%" duration="8s" delay="1s">
          <Package size={32} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper bottom="30%" left="20%" duration="6s" delay="2s">
          <Truck size={48} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper
          bottom="15%"
          right="25%"
          duration="9s"
          delay="0.5s"
        >
          <Tag size={36} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper
          top="45%"
          left="40%"
          duration="7.5s"
          delay="1.5s"
        >
          <CreditCard size={42} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper
          top="60%"
          right="35%"
          duration="6.5s"
          delay="0.8s"
        >
          <Store size={38} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper
          bottom="45%"
          left="10%"
          duration="8.5s"
          delay="2.5s"
        >
          <Gift size={34} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
        <S.FloatingIconWrapper
          top="10%"
          right="40%"
          duration="7.2s"
          delay="1.2s"
        >
          <Percent size={28} strokeWidth={1.5} />
        </S.FloatingIconWrapper>
      </S.AuthSplash>
      <S.AuthContent>{children}</S.AuthContent>
    </S.AuthContainer>
  );
};

export default AuthLayout;
