export const VALID_ORDER_STATUS = ["CREATED", "CONFIRMED", "CANCELLED"];

export const VALID_SHIPPING_STATUS = [
  "PENDING",
  "PACKED",
  "SHIPPED",
  "DELIVERED",
  "CANCELLED",
];

export const VALID_PAYMENT_STATUS = [
  "PENDING",
  "PAID",
  "REFUND PENDING",
  "REFUNDED",
];

export const VALID_ORDER_SORT_FIELDS_ADMIN = [
  "orderId",
  "email",
  "subTotal",
  "paymentStatus",
  "shippingStatus",
  "orderStatus",
  "createdAt",
  "-orderId",
  "-email",
  "-subTotal",
  "-paymentStatus",
  "-shippingStatus",
  "-orderStatus",
  "-createdAt",
];
