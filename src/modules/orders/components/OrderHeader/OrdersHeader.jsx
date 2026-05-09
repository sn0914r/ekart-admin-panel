import React from "react";
import * as S from "./OrdersHeader.styles";

const OrdersHeader = () => {
  return (
    <S.TopArea>
      <S.TitleSection>
        <S.PageTitle>Orders</S.PageTitle>
        <S.PageSubtitle>
          Track, manage, and dispatch customer orders.
        </S.PageSubtitle>
      </S.TitleSection>

      <S.ControlsSection>
        {/* Search and Filters can be added here in the future */}
      </S.ControlsSection>
    </S.TopArea>
  );
};

export default OrdersHeader;
