import Modal from "@shared/components/Modal";
import Loader from "@shared/components/Loader";
import {
  ShoppingBag,
  CreditCard,
  ShoppingCart,
  Heart,
  Mail,
  Phone,
  Calendar,
  Shield,
  UserCheck,
  UserX,
} from "lucide-react";
import * as S from "./UserDetailsModal.styles";
import { ROLE_LABELS, isSameUser } from "../../constants/userRoles";
import { RoleBadge, StatusBadge, IdText } from "../UsersTable/UsersTable.styles";
import { useGetUserByIdQuery } from "../../hooks/api/useGetUserByIdQuery";
import { useAuthStore } from "@app/store/authStore";
import { useDocumentTitle } from "@shared/hooks/useDocumentTitle";

const formatDate = (dateString) => {
  if (!dateString) return "—";
  try {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return dateString;
  }
};

const getInitials = (name) => {
  if (!name) return "U";
  return name
    .split(" ")
    .map((w) => w[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
};

const UserDetailsModal = ({
  isOpen,
  onClose,
  userId,
  onEditRole,
  onToggleStatus,
}) => {
  const currentAuthUser = useAuthStore((state) => state.user);
  const { data: response, isLoading, isError, error } = useGetUserByIdQuery(userId);

  const detailData = response?.data;
  const user = detailData?.user;

  useDocumentTitle(isOpen && user?.name ? `${user.name} — Profile` : null);

  if (!isOpen) return null;

  const stats = detailData?.stats || {
    totalOrders: 0,
    totalSpent: 0,
    cartItemsCount: 0,
    wishlistItemsCount: 0,
  };
  const recentOrders = detailData?.recentOrders || [];

  const isSelf = isSameUser(currentAuthUser, user);
  const isSuspended = user?.isActive === false;

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={user?.name ? `${user.name} — 360° Profile` : "User Overview"}
      maxWidth="850px"
    >
      {isLoading ? (
        <div style={{ height: "300px", position: "relative" }}>
          <Loader />
        </div>
      ) : isError || !user ? (
        <div style={{ padding: "28px", textAlign: "center", color: "var(--badge-red-text)" }}>
          {error?.message || "Failed to load user details"}
        </div>
      ) : (
        <S.ModalContainer>
          {/* Top Header Card */}
          <S.ProfileHeaderCard>
            <S.ProfileIdentityGroup>
              <S.LargeAvatar>{getInitials(user.name)}</S.LargeAvatar>
              <S.ProfileDetails>
                <S.ProfileNameRow>
                  <S.ProfileFullName>{user.name || "Unnamed User"}</S.ProfileFullName>
                  <S.ProfileBadgeGroup>
                    <RoleBadge className={user.role}>
                      {ROLE_LABELS[user.role] || user.role}
                    </RoleBadge>
                    <StatusBadge className={user.isActive ? "active" : "suspended"}>
                      {user.isActive ? "Active" : "Suspended"}
                    </StatusBadge>
                  </S.ProfileBadgeGroup>
                </S.ProfileNameRow>

                <S.ProfileMetaInfo>
                  <span>
                    <Mail size={13} /> {user.email || "No email"}
                  </span>
                  <span>
                    <Phone size={13} /> {user.phone || "No phone"}
                  </span>
                  <span>
                    <Calendar size={13} /> Joined {formatDate(user.createdAt)}
                  </span>
                </S.ProfileMetaInfo>
              </S.ProfileDetails>
            </S.ProfileIdentityGroup>

            <IdText title="User ID">ID: {user.id || user._id}</IdText>
          </S.ProfileHeaderCard>

          {/* Quick Metrics Grid */}
          <S.StatsGrid>
            <S.StatCard>
              <S.StatIconWrapper>
                <ShoppingBag size={18} />
              </S.StatIconWrapper>
              <S.StatInfo>
                <S.StatValue>{stats.totalOrders ?? 0}</S.StatValue>
                <S.StatLabel>Total Orders</S.StatLabel>
              </S.StatInfo>
            </S.StatCard>

            <S.StatCard>
              <S.StatIconWrapper>
                <CreditCard size={18} />
              </S.StatIconWrapper>
              <S.StatInfo>
                <S.StatValue>₹{(stats.totalSpent ?? 0).toLocaleString()}</S.StatValue>
                <S.StatLabel>Total Spend</S.StatLabel>
              </S.StatInfo>
            </S.StatCard>

            <S.StatCard>
              <S.StatIconWrapper>
                <ShoppingCart size={18} />
              </S.StatIconWrapper>
              <S.StatInfo>
                <S.StatValue>{stats.cartItemsCount ?? 0}</S.StatValue>
                <S.StatLabel>Cart Items</S.StatLabel>
              </S.StatInfo>
            </S.StatCard>

            <S.StatCard>
              <S.StatIconWrapper>
                <Heart size={18} />
              </S.StatIconWrapper>
              <S.StatInfo>
                <S.StatValue>{stats.wishlistItemsCount ?? 0}</S.StatValue>
                <S.StatLabel>Wishlist Items</S.StatLabel>
              </S.StatInfo>
            </S.StatCard>
          </S.StatsGrid>

          {/* Recent Orders Section */}
          <S.SectionContainer>
            <S.SectionTitle>
              <span>Recent Orders</span>
              <span style={{ fontSize: "12px", color: "var(--muted)", fontWeight: "normal" }}>
                Latest {recentOrders.length} orders
              </span>
            </S.SectionTitle>

            <S.OrdersTableWrapper>
              {recentOrders.length === 0 ? (
                <S.EmptyOrders>No orders recorded for this user.</S.EmptyOrders>
              ) : (
                <S.MiniTable>
                  <thead>
                    <tr>
                      <S.MiniTh>Order ID</S.MiniTh>
                      <S.MiniTh>Date</S.MiniTh>
                      <S.MiniTh>Items</S.MiniTh>
                      <S.MiniTh>Amount</S.MiniTh>
                      <S.MiniTh>Order Status</S.MiniTh>
                      <S.MiniTh>Payment</S.MiniTh>
                      <S.MiniTh>Shipping</S.MiniTh>
                    </tr>
                  </thead>
                  <tbody>
                    {recentOrders.map((ord) => (
                      <tr key={ord.id || ord.orderId}>
                        <S.MiniTd>
                          <IdText>{ord.orderId}</IdText>
                        </S.MiniTd>
                        <S.MiniTd>{formatDate(ord.createdAt)}</S.MiniTd>
                        <S.MiniTd>{ord.itemsCount ?? 1} item(s)</S.MiniTd>
                        <S.MiniTd style={{ fontWeight: 600 }}>
                          ₹{(ord.subTotal ?? 0).toLocaleString()}
                        </S.MiniTd>
                        <S.MiniTd>{ord.orderStatus}</S.MiniTd>
                        <S.MiniTd>{ord.paymentStatus}</S.MiniTd>
                        <S.MiniTd>{ord.shippingStatus}</S.MiniTd>
                      </tr>
                    ))}
                  </tbody>
                </S.MiniTable>
              )}
            </S.OrdersTableWrapper>
          </S.SectionContainer>

          {/* Moderation & Actions Footer */}
          <S.ModerationBar>
            {isSelf ? (
              <S.NoticeText>
                You are viewing your own admin profile. Self-moderation actions are disabled.
              </S.NoticeText>
            ) : (
              <S.NoticeText>
                Manage user permissions and account access state safely.
              </S.NoticeText>
            )}

            <S.ActionButtonGroup>
              <S.OutlineButton
                type="button"
                onClick={() => {
                  onClose();
                  onEditRole(user);
                }}
                disabled={isSelf}
              >
                <Shield size={14} />
                Change Role
              </S.OutlineButton>

              {isSuspended ? (
                <S.SuccessButton
                  type="button"
                  onClick={() => {
                    onClose();
                    onToggleStatus(user);
                  }}
                  disabled={isSelf}
                >
                  <UserCheck size={14} />
                  Reactivate Account
                </S.SuccessButton>
              ) : (
                <S.DestructiveButton
                  type="button"
                  onClick={() => {
                    onClose();
                    onToggleStatus(user);
                  }}
                  disabled={isSelf}
                >
                  <UserX size={14} />
                  Suspend Account
                </S.DestructiveButton>
              )}
            </S.ActionButtonGroup>
          </S.ModerationBar>
        </S.ModalContainer>
      )}
    </Modal>
  );
};

export default UserDetailsModal;
