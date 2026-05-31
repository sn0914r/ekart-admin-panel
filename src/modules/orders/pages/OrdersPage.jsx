import OrderTable from "../components/OrderTable";
import OrderDetailModal from "../components/OrderDetailsModal";
import OrdersHeader from "../components/OrderHeader/OrdersHeader";
import Pagination from "@shared/components/Pagination/Pagination";
import { useOrderPageFlow } from "../hooks/ui/useOrderPageFlow";
import Loader from "@shared/components/Loader/Loader";
import ErrorState from "@shared/components/ErrorState";
import * as S from "./OrdersPage.styles";

const OrdersPage = () => {
  const {
    orders,
    pagination,
    isLoading,
    isError,
    error,
    activeOrderId,
    openOrderDetailsModel,
    closeOrderDetailsModel,
    searchTerm,
    setSearchTerm,
    filters,
    handleFilterChange,
    sorts,
    handleSort,
    page,
    setPage,
    limit,
    setLimit,
  } = useOrderPageFlow();

  return (
    <S.PageLayout>
      <S.MainContentWrapper>
        <OrdersHeader 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        {isLoading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "60px 0" }}>
            <Loader />
          </div>
        ) : isError ? (
          <ErrorState 
            title="Failed to load orders" 
            message={error?.message} 
          />
        ) : (
          <>
            <OrderTable 
              orders={orders} 
              onView={openOrderDetailsModel}
              sorts={sorts}
              onSort={handleSort}
              hasPagination={!!pagination}
            />
            {pagination && (
              <Pagination 
                currentPage={page} 
                totalPages={pagination.totalPages} 
                onPageChange={setPage} 
                limit={limit}
                onLimitChange={setLimit}
                limitOptions={[10, 20, 30, 50]}
              />
            )}
          </>
        )}
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
