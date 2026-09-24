import { Users } from "lucide-react";
import * as S from "./UsersTable.styles";
import UserRow from "./sub-components/UserRow";
import UserSortHeader from "./sub-components/UserSortHeader";

const UsersTable = ({
  users = [],
  onView,
  onEditRole,
  onToggleStatus,
  sorts = [],
  onSort,
  hasPagination = false,
}) => {
  if (!users || users.length === 0) {
    return (
      <S.TableWrapper>
        <S.EmptyStateContainer>
          <Users size={48} strokeWidth={1.5} color="var(--muted)" style={{ opacity: 0.6 }} />
          <S.EmptyStateTextGroup>
            <S.EmptyStateTitle>No users found</S.EmptyStateTitle>
            <S.EmptyStateSubtitle>Try adjusting your search query or filter options.</S.EmptyStateSubtitle>
          </S.EmptyStateTextGroup>
        </S.EmptyStateContainer>
      </S.TableWrapper>
    );
  }

  return (
    <S.TableWrapper $hasPagination={hasPagination}>
      <S.DataTable>
        <thead>
          <tr>
            <UserSortHeader
              field="name"
              sorts={sorts}
              onSort={onSort}
              label="User"
              width="30%"
            />
            <S.Th style={{ width: "16%" }}>Phone</S.Th>
            <UserSortHeader
              field="role"
              sorts={sorts}
              onSort={onSort}
              label="Role"
              width="14%"
            />
            <S.Th style={{ width: "14%" }}>Status</S.Th>
            <UserSortHeader
              field="createdAt"
              sorts={sorts}
              onSort={onSort}
              label="Joined Date"
              width="14%"
            />
            <S.Th style={{ textAlign: "right", width: "12%" }}>Actions</S.Th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <UserRow
              key={user._id || user.id}
              user={user}
              onView={onView}
              onEditRole={onEditRole}
              onToggleStatus={onToggleStatus}
            />
          ))}
        </tbody>
      </S.DataTable>
    </S.TableWrapper>
  );
};

export default UsersTable;
