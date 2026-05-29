import { ArrowUp, ArrowDown } from "lucide-react";
import * as S from "../ProductTable.styles";

const SortHeader = ({ field, sorts = [], label, width, onSort }) => {
  const isAsc = sorts.includes(field);
  const isDesc = sorts.includes(`-${field}`);
  const isActive = isAsc || isDesc;
  
  return (
    <S.Th 
      className="sortable" 
      onClick={(e) => onSort && onSort(field, e.shiftKey)}
      title="Click to sort, Shift-Click for multi-sort"
      width={width}
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

export default SortHeader;
