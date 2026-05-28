import { useState, useEffect } from "react";
import { useOrdersQuery } from "../api/useOrdersQuery";
import { useDebounce } from "../../../../shared/hooks/useDebounce";

export const useOrderPageFlow = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const [filters, setFilters] = useState({
    paymentStatus: "",
    orderStatus: "",
    shippingStatus: "",
  });
  
  const [sorts, setSorts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // INFO: Reset page to 1 when filters, sorts, search, or limit change
  useEffect(() => {
    setPage(1);
  }, [debouncedSearchTerm, filters, sorts, limit]);

  const queryParams = {
    search: debouncedSearchTerm,
    ...filters,
    ...(sorts.length > 0 ? { sort: sorts.join(",") } : {}),
    page,
    limit,
  };

  const { data: serverOrders, isLoading, isError, error } = useOrdersQuery(queryParams);
  const [activeOrderId, setActiveOrderId] = useState("");

  const openOrderDetailsModel = (order) => setActiveOrderId(order._id);
  const closeOrderDetailsModel = () => setActiveOrderId("");

  const orders = serverOrders?.data || [];
  const pagination = serverOrders?.pagination || null;

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleSort = (field, isMulti) => {
    setSorts((prevSorts) => {
      let newSorts = isMulti ? [...prevSorts] : [];
      
      const ascIndex = prevSorts.indexOf(field);
      const descIndex = prevSorts.indexOf(`-${field}`);

      if (ascIndex > -1) {
        if (isMulti) newSorts[ascIndex] = `-${field}`;
        else newSorts = [`-${field}`];
      } else if (descIndex > -1) {
        if (isMulti) newSorts.splice(descIndex, 1);
        else newSorts = [];
      } else {
        if (isMulti) newSorts.push(field);
        else newSorts = [field];
      }

      return newSorts;
    });
  };

  return {
    activeOrderId,
    orders,
    pagination,
    isLoading,
    isError,
    error,
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
  };
};
