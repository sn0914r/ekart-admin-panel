import { Eye, Shield, UserCheck, UserX } from "lucide-react";
import * as S from "../UsersTable.styles";
import { ROLE_LABELS, isSameUser } from "../../../constants/userRoles";
import { useAuthStore } from "@app/store/authStore";

const formatDate = (dateString) => {
  if (!dateString) return "—";
  try {
    const d = new Date(dateString);
    return d.toLocaleDateString("en-US", {
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

const UserRow = ({
  user,
  onView,
  onEditRole,
  onToggleStatus,
}) => {
  const currentAuthUser = useAuthStore((state) => state.user);
  const isSelf = isSameUser(currentAuthUser, user);

  const roleLabel = ROLE_LABELS[user.role] || user.role;
  const isSuspended = user.isActive === false;

  return (
    <tr>
      <S.Td>
        <S.UserCell>
          <S.AvatarWrapper>{getInitials(user.name)}</S.AvatarWrapper>
          <S.UserInfo>
            <S.UserName title={user.name}>{user.name || "Unnamed User"}</S.UserName>
            <S.UserEmail title={user.email}>{user.email || "No email"}</S.UserEmail>
          </S.UserInfo>
        </S.UserCell>
      </S.Td>

      <S.Td>
        <S.PhoneText>{user.phone || "—"}</S.PhoneText>
      </S.Td>

      <S.Td>
        <S.RoleBadge className={user.role}>
          {roleLabel}
        </S.RoleBadge>
      </S.Td>

      <S.Td>
        <S.StatusBadge className={user.isActive ? "active" : "suspended"}>
          {user.isActive ? "Active" : "Suspended"}
        </S.StatusBadge>
      </S.Td>

      <S.Td>
        <S.DateText>{formatDate(user.createdAt)}</S.DateText>
      </S.Td>

      <S.Td>
        <S.ActionGroup>
          <S.ActionButton
            className="view"
            onClick={() => onView(user)}
            title="View User 360° Profile"
            aria-label="View user profile"
          >
            <Eye size={15} />
          </S.ActionButton>

          <S.ActionButton
            className="edit-role"
            onClick={() => onEditRole(user)}
            title={isSelf ? "You cannot modify your own role" : "Change User Role"}
            aria-label="Change user role"
            disabled={isSelf}
          >
            <Shield size={15} />
          </S.ActionButton>

          <S.ActionButton
            className={isSuspended ? "activate" : "suspend"}
            onClick={() => onToggleStatus(user)}
            title={
              isSelf
                ? "You cannot suspend your own account"
                : isSuspended
                ? "Reactivate Account"
                : "Suspend Account"
            }
            aria-label={isSuspended ? "Reactivate account" : "Suspend account"}
            disabled={isSelf}
          >
            {isSuspended ? <UserCheck size={15} /> : <UserX size={15} />}
          </S.ActionButton>
        </S.ActionGroup>
      </S.Td>
    </tr>
  );
};

export default UserRow;
