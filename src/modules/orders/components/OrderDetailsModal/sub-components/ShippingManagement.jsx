import React from "react";
import * as S from "../OrderDetailModal.styles";

const ShippingManagement = ({ 
  currentShipping, 
  allowedTransitions, 
  handleTransition, 
  isPending 
}) => {
  return (
    <S.InfoGroup
      style={{
        borderTop: "0.5px solid var(--border)",
        paddingTop: "16px",
        marginTop: "16px",
      }}
    >
      <div style={{ width: "100%" }}>
        <S.Label style={{ marginBottom: "8px" }}>
          Shipping Management
        </S.Label>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <S.Badge
            className={`shipping ${currentShipping.toLowerCase()}`}
            style={{ fontSize: "12px", padding: "6px 12px" }}
          >
            {currentShipping}
          </S.Badge>

          <S.TransitionGroup>
            {allowedTransitions.map((targetStatus) => {
              const buttonText = targetStatus === 'CANCELLED' 
                ? 'Cancel Order' 
                : `Mark ${targetStatus.charAt(0) + targetStatus.slice(1).toLowerCase()}`;

              return (
                <S.TransitionButton
                  key={targetStatus}
                  onClick={() => handleTransition(targetStatus)}
                  disabled={isPending}
                  className={targetStatus.toLowerCase()}
                >
                  {buttonText}
                </S.TransitionButton>
              );
            })}
          </S.TransitionGroup>
        </div>
      </div>
    </S.InfoGroup>
  );
};

export default ShippingManagement;
