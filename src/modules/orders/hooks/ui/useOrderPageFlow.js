import { useState } from "react";
import { useOrdersQuery } from "../api/useOrdersQuery";

export const useOrderPageFlow = () => {
  const { data: serverOrders, isLoading, isError, error } = useOrdersQuery();
  const [activeOrderId, setActiveOrderId] = useState("");

  const openOrderDetailsModel = (order) => setActiveOrderId(order._id);
  const closeOrderDetailsModel = () => setActiveOrderId("");

  const orders = serverOrders?.data || [];

  return {
    activeOrderId,
    orders,
    isLoading,
    isError,
    error,
    openOrderDetailsModel,
    closeOrderDetailsModel,
  };
};
