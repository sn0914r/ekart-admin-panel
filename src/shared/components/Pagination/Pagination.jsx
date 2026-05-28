import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import * as S from "./Pagination.styles";

const Pagination = ({ currentPage, totalPages, onPageChange, limit, onLimitChange, limitOptions = [] }) => {
  if (totalPages <= 1 && (!limitOptions || limitOptions.length === 0)) return null;

  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 4) {
        pages.push(1, 2, 3, 4, 5, "...", totalPages);
      } else if (currentPage >= totalPages - 3) {
        pages.push(1, "...", totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages);
      } else {
        pages.push(1, "...", currentPage - 1, currentPage, currentPage + 1, "...", totalPages);
      }
    }
    return pages;
  };

  return (
    <S.PaginationContainer>
      {limitOptions.length > 0 && (
        <S.LimitSelectorWrapper>
          <span className="limit-label">Rows per page:</span>
          <S.LimitSelect 
            value={limit} 
            onChange={(e) => onLimitChange(Number(e.target.value))}
          >
            {limitOptions.map(opt => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </S.LimitSelect>
        </S.LimitSelectorWrapper>
      )}

      {totalPages > 1 && (
        <div style={{ display: 'flex', gap: '8px' }}>
          <S.PageButton
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
          >
            <ChevronLeft size={16} />
          </S.PageButton>

          {getPageNumbers().map((page, index) => {
            if (page === "...") {
              return <S.Ellipsis key={`ellipsis-${index}`}>...</S.Ellipsis>;
            }
            return (
              <S.PageButton
                key={page}
                className={page === currentPage ? "active" : ""}
                onClick={() => onPageChange(page)}
              >
                {page}
              </S.PageButton>
            );
          })}

          <S.PageButton
            disabled={currentPage === totalPages}
            onClick={() => onPageChange(currentPage + 1)}
          >
            <ChevronRight size={16} />
          </S.PageButton>
        </div>
      )}
    </S.PaginationContainer>
  );
};

export default Pagination;
