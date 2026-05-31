import { Edit2, Trash2, PackageOpen } from "lucide-react";
import * as S from "./ProductTable.styles";
import SortHeader from "./sub-components/SortHeader";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
  onToggleStatus,
  hasPagination,
  sorts = [],
  onSort,
}) => {
  if (!products || products.length === 0) {
    return (
      <S.TableWrapper>
        <S.EmptyStateContainer>
          <S.EmptyStateIcon>
            <PackageOpen size={48} />
          </S.EmptyStateIcon>
          <p>No products found in the catalog.</p>
        </S.EmptyStateContainer>
      </S.TableWrapper>
    );
  }

  return (
    <S.TableWrapper $hasPagination={hasPagination}>
      <S.DataTable>
        <thead>
          <tr>
            <SortHeader field="name" sorts={sorts} onSort={onSort} label="Product Name" />
            <SortHeader field="category" sorts={sorts} onSort={onSort} label="Category" />
            <SortHeader field="price" sorts={sorts} onSort={onSort} label="Price" />
            <SortHeader field="stock" sorts={sorts} onSort={onSort} label="Stock" />
            <S.Th>Status</S.Th>
            <S.Th align="right">Action</S.Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            let stockStatus = 'normal';
            if (product.stock === 0) stockStatus = 'critical';
            else if (product.stock <= 10) stockStatus = 'low';

            return (
              <tr key={product._id}>
                <S.Td>
                  <S.ProductCell>
                    {product.images && product.images.length > 0 ? (
                      <S.ProductImage
                        src={product.images[0]}
                        alt={product.name}
                      />
                    ) : product.imageUrl ? (
                      <S.ProductImage src={product.imageUrl} alt={product.name} />
                    ) : (
                      <S.PlaceholderImage>
                        <PackageOpen size={20} color="var(--muted)" />
                      </S.PlaceholderImage>
                    )}
                    <S.ProductTextContent>
                      <S.ProductName>{product.name}</S.ProductName>
                    </S.ProductTextContent>
                  </S.ProductCell>
                </S.Td>
                <S.Td>
                  {product.category ? (() => {
                    const colors = [
                      { bg: 'var(--badge-green-bg)', text: 'var(--badge-green-text)' },
                      { bg: 'var(--accent-light)', text: 'var(--accent)' },
                      { bg: 'var(--badge-amber-bg)', text: 'var(--badge-amber-text)' },
                      { bg: 'rgba(236, 72, 153, 0.15)', text: '#ec4899' },
                      { bg: 'rgba(168, 85, 247, 0.15)', text: '#a855f7' },
                      { bg: 'rgba(14, 165, 233, 0.15)', text: '#0ea5e9' },
                      { bg: 'rgba(249, 115, 22, 0.15)', text: '#f97316' },
                    ];
                    let hash = 0;
                    for (let i = 0; i < product.category.length; i++) {
                      hash = product.category.charCodeAt(i) + ((hash << 5) - hash);
                    }
                    const color = colors[Math.abs(hash) % colors.length];
                    
                    return (
                      <S.CategoryBadge $bg={color.bg} $text={color.text}>
                        {product.category}
                      </S.CategoryBadge>
                    );
                  })() : (
                    <S.CategoryBadge>Unknown</S.CategoryBadge>
                  )}
                </S.Td>
                <S.Td>₹{product.price?.toLocaleString("en-IN") || "0.00"}</S.Td>
                <S.Td>
                  <S.StockText $status={stockStatus}>
                    {product.stock}
                  </S.StockText>
                </S.Td>
                <S.Td>
                  <S.ToggleWrapper>
                    <input
                      type="checkbox"
                      checked={product.isActive}
                      onChange={() => onToggleStatus && onToggleStatus(product)}
                    />
                    <S.ToggleSwitch $isOn={product.isActive} />
                    <S.ToggleText $isOn={product.isActive}>
                      {product.isActive ? "Active" : "Inactive"}
                    </S.ToggleText>
                  </S.ToggleWrapper>
                </S.Td>
                <S.Td align="right">
                  <S.ActionGroup>
                    <S.ActionButton
                      className="edit"
                      title="Edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit && onEdit(product);
                      }}
                    >
                      <Edit2 size={14} />
                    </S.ActionButton>
                    <S.ActionButton
                      className="delete"
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete && onDelete(product);
                      }}
                    >
                      <Trash2 size={14} />
                    </S.ActionButton>
                  </S.ActionGroup>
                </S.Td>
              </tr>
            );
          })}
        </tbody>
      </S.DataTable>
    </S.TableWrapper>
  );
};

export default ProductTable;
