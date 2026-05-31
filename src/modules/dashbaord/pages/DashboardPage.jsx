import { useDashboard } from "../hooks/useDashboard";
import DashboardStats from "../components/DashboardStats/DashboardStats";
import RecentOrders from "../components/RecentOrders/RecentOrders";
import LowStockAlerts from "../components/LowStockAlerts/LowStockAlerts";
import RecentActivity from "../components/RecentActivity/RecentActivity";
import * as S from "./DashboardPage.styles";
import Loader from "@shared/components/Loader";
import ErrorState from "@shared/components/ErrorState";

const DashboardPage = () => {
  const {
    stats,
    recentOrders,
    lowStockItems,
    recentActivity,
    isLoading,
    isError,
    error,
  } = useDashboard();

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div className="container-fluid pt-4">
        <ErrorState 
          title="Failed to load dashboard" 
          message={error?.message} 
        />
      </div>
    );

  return (
    <S.PageLayout>
      <div className="container-fluid pb-4">
        <DashboardStats stats={stats} />
        <div className="row">
          <div className="col-lg-8 mb-4 mb-lg-0">
            <RecentOrders orders={recentOrders} />
          </div>
          <div className="col-lg-4">
            <LowStockAlerts items={lowStockItems} />
            <RecentActivity activities={recentActivity} />
          </div>
        </div>
      </div>
    </S.PageLayout>
  );
};

export default DashboardPage;
