import Modal from "@shared/components/Modal";
import Loader from "@shared/components/Loader";
import OrderItems from "./sub-components/OrderItems";
import OrderSummary from "./sub-components/OrderSummary";
import ShippingManagement from "./sub-components/ShippingManagement";
import ShippingAddress from "./sub-components/ShippingAddress";
import StatusTimeline from "./sub-components/StatusTimeline";
import { useOrderDetails } from "../../hooks/ui/useOrderDetails";
import * as S from "./OrderDetailModal.styles";

const OrderDetailModal = ({ isOpen, onClose, orderId }) => {
  const {
    order,
    isLoading,
    isError,
    currentShipping,
    allowedTransitions,
    handleTransition,
    isUpdating,
  } = useOrderDetails(orderId);

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={order?.orderId ? `Order ${order.orderId}` : "Order Details"}
      maxWidth="900px"
    >
      {isLoading ? (
        <div style={{ height: "300px", position: "relative" }}>
          <Loader />
        </div>
      ) : isError || !order ? (
        <div
          style={{
            padding: "24px",
            textAlign: "center",
            color: "var(--badge-red-text)",
          }}
        >
          Failed to load order details
        </div>
      ) : (
        <S.ModalContainer>
          <S.TopRow>
            <OrderItems items={order.orderSnapshot} />

            <S.RightColumn>
              <OrderSummary order={order} />

              <ShippingManagement
                currentShipping={currentShipping}
                allowedTransitions={allowedTransitions}
                handleTransition={handleTransition}
                isPending={isUpdating}
              />
            </S.RightColumn>
          </S.TopRow>

          <ShippingAddress address={order.shippingAddress} />

          <StatusTimeline timeline={order.timeline} />
        </S.ModalContainer>
      )}
    </Modal>
  );
};

export default OrderDetailModal;
