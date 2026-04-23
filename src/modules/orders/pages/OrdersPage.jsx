import { useState } from "react";
import { useOrdersQuery } from "../orders.query";
import OrderTable from "../components/OrderTable";
import OrderDetailModal from "../components/OrderDetailModal";
import { Search, Calendar, ChevronDown, Download } from "lucide-react";
import {
  PageLayout,
  MainContentWrapper,
  TopArea,
  TitleSection,
  PageTitle,
  PageSubtitle,
  ControlsSection,
  SearchInputWrapper,
  StyledInput,
  FilterButton,
  ExportButton
} from "./OrdersPage.styles";
import Loader from "../../../shared/components/Loader/Loader";

const OrdersPage = () => {
  const { data: response, isLoading, isError, error } = useOrdersQuery();
  const [activeOrderId, setActiveOrderId] = useState(null);

  const handleOpenDetails = (order) => {
    setActiveOrderId(order._id);
  };

  const handleCloseDetails = () => {
    setActiveOrderId(null);
  };

  if (isLoading) return <Loader />;
  if (isError) return <div style={{ color: "var(--badge-red-text)", padding: '24px' }}>Failed to load orders: {error.message}</div>;

  const orders = response?.data || [];

  return (
    <PageLayout>
      <MainContentWrapper>
        <TopArea>
          <TitleSection>
            <PageTitle>Orders</PageTitle>
            <PageSubtitle>Track, manage, and dispatch customer orders.</PageSubtitle>
          </TitleSection>
          
          <ControlsSection>
            {/* <SearchInputWrapper>
              <Search size={16} color="var(--muted)" />
              <StyledInput type="text" placeholder="Search by ID or Email" />
            </SearchInputWrapper>
             */}
            {/* <FilterButton>
              Date Range <Calendar size={14} />
            </FilterButton>
             */}
            {/* <FilterButton>
              Status <ChevronDown size={14} />
            </FilterButton> */}

            {/* <ExportButton>
              <Download size={16} /> Export CSV
            </ExportButton> */}
          </ControlsSection>
        </TopArea>

        <OrderTable 
          orders={orders} 
          onView={handleOpenDetails} 
        />
        
      </MainContentWrapper>

      {activeOrderId && (
        <OrderDetailModal 
          isOpen={!!activeOrderId} 
          onClose={handleCloseDetails} 
          orderId={activeOrderId} 
        />
      )}
    </PageLayout>
  );
};

export default OrdersPage;
