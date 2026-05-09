import OrderTable from "../components/OrderTable";
import OrderDetailModal from "../components/OrderDetailsModal";
import OrdersHeader from "../components/OrderHeader/OrdersHeader";
import { useOrderPageFlow } from "../hooks/ui/useOrderPageFlow";
import Loader from "@shared/components/Loader/Loader";
import * as S from "./OrdersPage.styles";

const OrdersPage = () => {
  const {
    orders,
    isLoading,
    isError,
    error,
    activeOrderId,
    openOrderDetailsModel,
    closeOrderDetailsModel,
  } = useOrderPageFlow();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div style={{ color: "var(--badge-red-text)", padding: "24px" }}>
        Failed to load orders: {error.message}
      </div>
    );

  return (
    <S.PageLayout>
      <S.MainContentWrapper>
        <OrdersHeader />

        <OrderTable orders={orders} onView={openOrderDetailsModel} />
      </S.MainContentWrapper>

      {activeOrderId && (
        <OrderDetailModal
          isOpen={!!activeOrderId}
          onClose={closeOrderDetailsModel}
          orderId={activeOrderId}
        />
      )}
    </S.PageLayout>
  );
};

export default OrdersPage;
