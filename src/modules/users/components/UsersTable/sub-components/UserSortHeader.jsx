import { ArrowUp, ArrowDown } from "lucide-react";
import * as S from "../UsersTable.styles";

const UserSortHeader = ({ field, sorts = [], label, onSort, width }) => {
  const isAsc = sorts.includes(field);
  const isDesc = sorts.includes(`-${field}`);
  const isActive = isAsc || isDesc;

  return (
    <S.Th
      className="sortable"
      onClick={() => onSort && onSort(field)}
      title="Click to toggle sort order"
      style={width ? { width } : {}}
    >
      <div className="th-content">
        <span>{label}</span>
        <span className={`sort-icon-wrapper ${isActive ? "active" : ""}`}>
          {isDesc ? <ArrowDown size={12} /> : <ArrowUp size={12} />}
        </span>
      </div>
    </S.Th>
  );
};

export default UserSortHeader;
