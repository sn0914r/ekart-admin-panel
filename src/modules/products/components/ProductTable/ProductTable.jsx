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
            <S.Th width="40px">S.No</S.Th>
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
            const isStockCritical = product.stock === 0;

            return (
              <tr key={product._id}>
                <S.Td>{index + 1}</S.Td>
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
                  {product.category ? (
                    <S.CategoryText>{product.category}</S.CategoryText>
                  ) : (
                    <S.CategoryText isUnknown>Unknown</S.CategoryText>
                  )}
                </S.Td>
                <S.Td>₹{product.price?.toLocaleString("en-IN") || "0.00"}</S.Td>
                <S.Td>
                  <S.StockText isCritical={isStockCritical}>
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
