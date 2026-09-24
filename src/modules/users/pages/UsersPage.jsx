import UsersHeader from "../components/UsersHeader/UsersHeader";
import UsersTable from "../components/UsersTable/UsersTable";
import UserDetailsModal from "../components/UserDetailsModal/UserDetailsModal";
import EditRoleModal from "../components/EditRoleModal/EditRoleModal";
import Pagination from "@shared/components/Pagination/Pagination";
import ConfirmModal from "@shared/components/ConfirmModal/ConfirmModal";
import Loader from "@shared/components/Loader/Loader";
import ErrorState from "@shared/components/ErrorState";
import { useUsersPageFlow } from "../hooks/ui/useUsersPageFlow";
import * as S from "./UsersPage.styles";

const UsersPage = () => {
  const {
    users,
    pagination,
    isLoading,
    isError,
    error,
    isUpdating,
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
  } = useUsersPageFlow();

  const isSuspendingAction = confirmModalState.type === "suspend";

  return (
    <S.PageLayout>
      <S.MainContentWrapper>
        <UsersHeader
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          filters={filters}
          onFilterChange={handleFilterChange}
        />

        {isLoading ? (
          <Loader />
        ) : isError ? (
          <ErrorState
            title="Failed to load users"
            message={error?.message || "An unexpected error occurred while fetching users."}
          />
        ) : (
          <>
            <UsersTable
              users={users}
              onView={(u) => setActiveDetailUserId(u._id || u.id)}
              onEditRole={handleOpenEditRole}
              onToggleStatus={handleOpenStatusConfirm}
              sorts={sorts}
              onSort={handleSort}
              hasPagination={Boolean(pagination)}
            />

            {pagination && (
              <Pagination
                currentPage={page}
                totalPages={pagination.totalPages || 1}
                onPageChange={setPage}
                limit={limit}
                onLimitChange={setLimit}
                limitOptions={[10, 20, 30, 50]}
              />
            )}
          </>
        )}
      </S.MainContentWrapper>

      {/* User 360° Profile Modal */}
      {activeDetailUserId && (
        <UserDetailsModal
          isOpen={Boolean(activeDetailUserId)}
          onClose={() => setActiveDetailUserId(null)}
          userId={activeDetailUserId}
          onEditRole={handleOpenEditRole}
          onToggleStatus={handleOpenStatusConfirm}
        />
      )}

      {/* Edit Role Dialog */}
      {roleEditUser && (
        <EditRoleModal
          key={roleEditUser._id || roleEditUser.id}
          isOpen={Boolean(roleEditUser)}
          onClose={handleCloseEditRole}
          user={roleEditUser}
          onSave={handleSaveRole}
          isPending={isUpdating}
        />
      )}

      {/* Suspend / Reactivate Confirmation Dialog */}
      <ConfirmModal
        isOpen={confirmModalState.isOpen}
        onClose={handleCloseStatusConfirm}
        onConfirm={handleConfirmStatusToggle}
        title={isSuspendingAction ? "Suspend User Account" : "Reactivate User Account"}
        message={
          isSuspendingAction
            ? `Are you sure you want to suspend access for ${confirmModalState.user?.name || "this user"}?`
            : `Are you sure you want to reactivate access for ${confirmModalState.user?.name || "this user"}?`
        }
        subMessage={
          isSuspendingAction
            ? "The user will immediately be logged out and cannot sign in until reactivated."
            : "The user will regain standard access to their account and purchases."
        }
        confirmText={isSuspendingAction ? "Yes, Suspend Account" : "Yes, Reactivate"}
        cancelText="Cancel"
        isDestructive={isSuspendingAction}
        isLoading={isUpdating}
      />
    </S.PageLayout>
  );
};

export default UsersPage;
