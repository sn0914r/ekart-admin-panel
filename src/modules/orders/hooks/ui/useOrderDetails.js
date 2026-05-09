import { toast } from "sonner";
import { useGetOrderById } from "../api/useGetOrderByIdQuery";
import { useUpdateShippingMutation } from "../api/useUpdateOrderShippingStatus";

const SHIPPING_TRANSITIONS = {
  PENDING: ["PACKED", "CANCELLED"],
  PACKED: ["SHIPPED"],
  SHIPPED: ["DELIVERED"],
  DELIVERED: [],
  CANCELLED: [],
};

export const useOrderDetails = (orderId) => {
  const { data: serverOrder, isLoading, isError } = useGetOrderById(orderId);
  const { mutate, isPending } = useUpdateShippingMutation();

  const handleTransition = (newStatus) => {
    mutate(
      { orderId, status: newStatus },
      {
        onSuccess: () => {
          toast.success(`Shipping status updated to ${newStatus}`);
        },
        onError: (err) => {
          toast.error(err.message || "Failed to update shipping status");
        },
      }
    );
  };

  const order =  serverOrder?.data;

  const currentShipping = order?.shippingStatus || "PENDING";
  const allowedTransitions = SHIPPING_TRANSITIONS[currentShipping] || [];

  return {
    order,
    isLoading,
    isError,
    currentShipping,
    allowedTransitions,
    handleTransition,
    isUpdating: isPending,
  };
};
