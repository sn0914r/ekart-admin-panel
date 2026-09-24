import { useState } from "react";
import { toast } from "sonner";
import { useGetUsersQuery } from "../api/useGetUsersQuery";
import { useUpdateUserMutation } from "../api/useUpdateUserMutation";
import { useDebounce } from "@shared/hooks/useDebounce";
import { useAuthStore } from "@app/store/authStore";
import { isSameUser } from "../../constants/userRoles";

export const useUsersPageFlow = () => {
  const currentAuthUser = useAuthStore((state) => state.user);

  // Search & Filters
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearch = useDebounce(searchTerm, 400);

  const [filters, setFilters] = useState({
    role: "all",
    isActive: "all",
  });

  const [sorts, setSorts] = useState(["-createdAt"]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  // Modals state
  const [activeDetailUserId, setActiveDetailUserId] = useState(null);
  const [roleEditUser, setRoleEditUser] = useState(null);
  const [confirmModalState, setConfirmModalState] = useState({
    isOpen: false,
    user: null,
    type: null, // "suspend" | "activate"
  });

  // Query parameters builder
  const queryParams = {
    page,
    limit,
    search: debouncedSearch,
    role: filters.role,
    isActive: filters.isActive,
    sort: sorts.length > 0 ? sorts.join(",") : "-createdAt",
  };

  const {
    data: serverResponse,
    isLoading,
    isError,
    error,
  } = useGetUsersQuery(queryParams);

  const { mutate: mutateUpdateUser, isPending: isUpdating } =
    useUpdateUserMutation();

  // Handlers
  const handleSearchChange = (val) => {
    setSearchTerm(val);
    setPage(1);
  };

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
    setPage(1);
  };

  const handleSort = (field) => {
    setSorts((prevSorts) => {
      const isAsc = prevSorts.includes(field);
      const isDesc = prevSorts.includes(`-${field}`);

      if (!isAsc && !isDesc) {
        return [`-${field}`]; // Default to desc first
      }
      if (isDesc) {
        return [field]; // Switch to asc
      }
      return ["-createdAt"]; // Reset to default
    });
    setPage(1);
  };

  const handleLimitChange = (newLimit) => {
    setLimit(newLimit);
    setPage(1);
  };

  // Status toggle handler
  const handleOpenStatusConfirm = (user) => {
    const isSelf = isSameUser(currentAuthUser, user);

    if (isSelf) {
      toast.error("You cannot deactivate or suspend your own account");
      return;
    }

    setConfirmModalState({
      isOpen: true,
      user,
      type: user.isActive ? "suspend" : "activate",
    });
  };

  const handleCloseStatusConfirm = () => {
    setConfirmModalState({
      isOpen: false,
      user: null,
      type: null,
    });
  };

  const handleConfirmStatusToggle = () => {
    const { user, type } = confirmModalState;
    if (!user) return;

    const newActiveState = type === "activate";

    mutateUpdateUser(
      {
        userId: user._id || user.id,
        payload: { isActive: newActiveState },
      },
      {
        onSuccess: () => {
          toast.success(
            newActiveState
              ? `Account for ${user.name} has been reactivated`
              : `Account for ${user.name} has been suspended`,
          );
          handleCloseStatusConfirm();
        },
        onError: (err) => {
          toast.error(err?.message || "Failed to update user status");
        },
      },
    );
  };

  // Role edit handler
  const handleOpenEditRole = (user) => {
    const isSelf = isSameUser(currentAuthUser, user);

    if (isSelf) {
      toast.error("You cannot change or demote your own admin role");
      return;
    }

    setRoleEditUser(user);
  };

  const handleCloseEditRole = () => {
    setRoleEditUser(null);
  };

  const handleSaveRole = ({ userId, role }) => {
    mutateUpdateUser(
      {
        userId,
        payload: { role },
      },
      {
        onSuccess: () => {
          toast.success("User role updated successfully");
          handleCloseEditRole();
        },
        onError: (err) => {
          toast.error(err?.message || "Failed to update user role");
        },
      },
    );
  };

  const users = serverResponse?.data || [];
  const pagination = serverResponse?.pagination || null;

  return {
    users,
    pagination,
    isLoading,
    isError,
    error,
    isUpdating,
    // Filter & search
    searchTerm,
    setSearchTerm: handleSearchChange,
    filters,
    handleFilterChange,
    sorts,
    handleSort,
    page,
    setPage,
    limit,
    setLimit: handleLimitChange,
    // Modals
    activeDetailUserId,
    setActiveDetailUserId,
    roleEditUser,
    handleOpenEditRole,
    handleCloseEditRole,
    handleSaveRole,
    confirmModalState,
    handleOpenStatusConfirm,
    handleCloseStatusConfirm,
    handleConfirmStatusToggle,
  };
};
