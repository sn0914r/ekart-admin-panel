import * as S from "./UsersHeader.styles";
import { USER_ROLE_OPTIONS, USER_STATUS_OPTIONS } from "../../constants/userRoles";

const UsersHeader = ({
  searchTerm,
  setSearchTerm,
  filters = {},
  onFilterChange = () => {},
}) => {
  return (
    <S.TopArea>
      <S.TitleSection>
        <S.PageTitle>User Management</S.PageTitle>
        <S.PageSubtitle>
          View user profiles, monitor 360° metrics, and manage roles and permissions.
        </S.PageSubtitle>
      </S.TitleSection>

      <S.ControlsSection>
        <S.FilterSelect
          value={filters.role || "all"}
          onChange={(e) => onFilterChange("role", e.target.value)}
          aria-label="Filter by role"
        >
          {USER_ROLE_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.FilterSelect>

        <S.FilterSelect
          value={filters.isActive || "all"}
          onChange={(e) => onFilterChange("isActive", e.target.value)}
          aria-label="Filter by status"
        >
          {USER_STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </S.FilterSelect>

        <S.SearchInput
          type="text"
          placeholder="Search by name, email, phone..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Search users"
        />
      </S.ControlsSection>
    </S.TopArea>
  );
};

export default UsersHeader;
