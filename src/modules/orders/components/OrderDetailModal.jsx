import { toast } from "sonner";
import {
  useOrderDetailsQuery,
  useUpdateShippingMutation,
} from "../orders.query";
import Modal from "../../../shared/components/Modal/Modal";
import Loader from "../../../shared/components/Loader/Loader";
import {
  ModalContainer,
  TopRow,
  LeftColumn,
  RightColumn,
  BottomRow,
  SectionTitle,
  ProductItem,
  ProductImage,
  ProductDetails,
  InfoGroup,
  Label,
  Value,
  Badge,
  TransitionGroup,
  TransitionButton,
  Timeline,
  TimelineItem,
} from "./OrderDetailModal.styles";

const SHIPPING_TRANSITIONS = {
  PENDING: ["PACKED", "CANCELLED"],
  PACKED: ["SHIPPED"],
  SHIPPED: ["DELIVERED"],
  DELIVERED: [],
  CANCELLED: [],
};

const OrderDetailModal = ({ isOpen, onClose, orderId }) => {
  const { data: response, isLoading, isError } = useOrderDetailsQuery(orderId);
  const updateMutation = useUpdateShippingMutation();

  const handleTransition = async (newStatus) => {
    try {
      await updateMutation.mutateAsync({ id: orderId, status: newStatus });
      toast.success(`Shipping status updated to ${newStatus}`);
    } catch (err) {
      toast.error(err.message || "Failed to update shipping status");
    }
  };

  if (!isOpen) return null;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Order Details Dashboard"
      maxWidth="900px"
    >
      {isLoading ? (
        <div style={{ height: "300px", position: "relative" }}>
          <Loader />
        </div>
      ) : isError || !response?.data || response.data.length === 0 ? (
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
        <ModalContainer>
          {(() => {
            // Unwrapping from the array since GET /admin/orders/:id returns data: [{}]
            const order = Array.isArray(response.data)
              ? response.data[0]
              : response.data;
            const currentShipping = order.shippingStatus || "PENDING";
            const allowedTransitions =
              SHIPPING_TRANSITIONS[currentShipping] || [];

            return (
              <>
                <TopRow>
                  <LeftColumn>
                    <SectionTitle>Purchased Items</SectionTitle>
                    {order.orderSnapshot?.map((item) => (
                      <ProductItem key={item.productId || item.name}>
                        <ProductImage src={item.imageUrl} alt={item.name} />
                        <ProductDetails>
                          <div className="name">{item.name}</div>
                          <div className="meta">
                            Qty: {item.quantity} × ₹
                            {item.unitPrice?.toLocaleString("en-IN")}
                          </div>
                        </ProductDetails>
                      </ProductItem>
                    ))}
                    {(!order.orderSnapshot ||
                      order.orderSnapshot.length === 0) && (
                      <div style={{ color: "var(--muted)", fontSize: "12px" }}>
                        No items found in snapshot.
                      </div>
                    )}
                  </LeftColumn>

                  <RightColumn>
                    <SectionTitle>Order Summary</SectionTitle>
                    <InfoGroup>
                      <div>
                        <Label>Order ID</Label>
                        <Value>{order._id}</Value>
                      </div>
                      <div>
                        <Label>Customer Email</Label>
                        <Value>{order.email}</Value>
                      </div>
                    </InfoGroup>

                    <InfoGroup>
                      <div>
                        <Label>Sub Total</Label>
                        <Value style={{ fontWeight: 600 }}>
                          ₹{order.subTotal?.toLocaleString("en-IN")}
                        </Value>
                      </div>
                      <div>
                        <Label>Payment ID</Label>
                        <Value>
                          {order.paymentDetails?.razorpayPaymentId || "N/A"}
                        </Value>
                      </div>
                    </InfoGroup>

                    <InfoGroup>
                      <div>
                        <Label>Payment Status</Label>
                        <Badge
                          className={`payment ${order.paymentStatus?.toLowerCase()}`}
                        >
                          {order.paymentStatus}
                        </Badge>
                      </div>
                      <div>
                        <Label>Order Status</Label>
                        <Badge
                          className={`order ${order.orderStatus?.toLowerCase()}`}
                        >
                          {order.orderStatus}
                        </Badge>
                      </div>
                    </InfoGroup>

                    <InfoGroup
                      style={{
                        borderTop: "0.5px solid var(--border)",
                        paddingTop: "16px",
                        marginTop: "16px",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <Label style={{ marginBottom: "8px" }}>
                          Shipping Management
                        </Label>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <Badge
                            className={`shipping ${currentShipping.toLowerCase()}`}
                            style={{ fontSize: "12px", padding: "6px 12px" }}
                          >
                            {currentShipping}
                          </Badge>

                          <TransitionGroup>
                            {allowedTransitions.map((targetStatus) => (
                              <TransitionButton
                                key={targetStatus}
                                onClick={() => handleTransition(targetStatus)}
                                disabled={updateMutation.isPending}
                                className={targetStatus.toLowerCase()}
                              >
                                Mark as {targetStatus}
                              </TransitionButton>
                            ))}
                          </TransitionGroup>
                        </div>
                      </div>
                    </InfoGroup>
                  </RightColumn>
                </TopRow>

                {order.shippingAddress && (
                  <BottomRow>
                    <SectionTitle>Shipping Destination</SectionTitle>
                    <div style={{ fontSize: "13px", color: "var(--text)", lineHeight: 1.5 }}>
                      <span style={{ fontWeight: 600, color: "var(--text)" }}>{order.shippingAddress.name}</span> • {order.shippingAddress.phone}<br/>
                      <span style={{ color: "var(--muted)" }}>
                        {order.shippingAddress.address}<br />
                        {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.pincode}<br />
                        {order.shippingAddress.country}
                      </span>
                    </div>
                  </BottomRow>
                )}

                <BottomRow>
                  <SectionTitle>Status History</SectionTitle>
                  <Timeline>
                    {[
                      ...(order.shippingStatusHistory || []),
                      ...(order.orderStatusHistory || []),
                    ]
                      .sort((a, b) => new Date(b.at) - new Date(a.at))
                      .map((log, i) => (
                        <TimelineItem key={`${log.status}-${i}`}>
                          <div className="dot" />
                          <div className="content">
                            <div className="status">{log.status}</div>
                            <div className="time">
                              {new Date(log.at).toLocaleString("en-IN")} • by{" "}
                              {log.by}
                            </div>
                          </div>
                        </TimelineItem>
                      ))}
                    {!order.shippingStatusHistory &&
                      !order.orderStatusHistory && (
                        <div
                          style={{ color: "var(--muted)", fontSize: "12px" }}
                        >
                          No history logs available yet.
                        </div>
                      )}
                  </Timeline>
                </BottomRow>
              </>
            );
          })()}
        </ModalContainer>
      )}
    </Modal>
  );
};

export default OrderDetailModal;
