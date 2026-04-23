import { Eye, Edit2, Trash2, PackageOpen } from "lucide-react";
import {
  TableWrapper,
  DataTable,
  Th,
  Td,
  ProductCell,
  ProductImage,
  ProductTextContent,
  ProductName,
  ProductSubtext,
  ToggleWrapper,
  ToggleSwitch,
  ToggleText,
  ActionGroup,
  ActionButton,
} from "./ProductTable.styles";

const ProductTable = ({
  products,
  onEdit,
  onDelete,
  onView,
  onToggleStatus,
}) => {
  if (!products || products.length === 0) {
    return (
      <TableWrapper>
        <div
          style={{
            textAlign: "center",
            padding: "60px 0",
            color: "var(--muted)",
          }}
        >
          <PackageOpen
            size={48}
            style={{ opacity: 0.3, marginBottom: "16px" }}
          />
          <p>No products found in the catalog.</p>
        </div>
      </TableWrapper>
    );
  }

  return (
    <TableWrapper>
      <DataTable>
        <thead>
          <tr>
            <Th style={{ width: "40px" }}>S.No</Th>
            <Th>Product Name</Th>
            <Th>Category</Th>
            <Th>Price</Th>
            <Th>Stock</Th>
            <Th>Status</Th>
            <Th style={{ textAlign: "right" }}>Action</Th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => {
            const isStockCritical = product.stock === 0;

            return (
              <tr key={product._id}>
                <Td>{index + 1}</Td>
                <Td>
                  <ProductCell>
                    {product.images && product.images.length > 0 ? (
                      <ProductImage
                        src={product.images[0]}
                        alt={product.name}
                      />
                    ) : product.imageUrl ? (
                      <ProductImage src={product.imageUrl} alt={product.name} />
                    ) : (
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          background: "var(--surface2)",
                          borderRadius: "8px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PackageOpen size={20} color="var(--muted)" />
                      </div>
                    )}
                    <ProductTextContent>
                      <ProductName>{product.name}</ProductName>
                    </ProductTextContent>
                  </ProductCell>
                </Td>
                <Td>
                  {product.category ? (
                    <span
                      style={{ textTransform: "capitalize", fontSize: "13px" }}
                    >
                      {product.category}
                    </span>
                  ) : (
                    <span style={{ color: "var(--muted)", fontSize: "13px" }}>
                      Unknown
                    </span>
                  )}
                </Td>
                <Td>₹{product.price?.toLocaleString("en-IN") || "0.00"}</Td>
                <Td>
                  <span
                    style={{
                      color: isStockCritical
                        ? "var(--badge-red-text)"
                        : "inherit",
                      fontWeight: isStockCritical ? 600 : 400,
                    }}
                  >
                    {product.stock}
                  </span>
                </Td>
                <Td>
                  <ToggleWrapper>
                    <input
                      type="checkbox"
                      checked={product.isActive}
                      onChange={() => onToggleStatus && onToggleStatus(product)}
                    />
                    <ToggleSwitch $isOn={product.isActive} />
                    <ToggleText $isOn={product.isActive}>
                      {product.isActive ? "Active" : "Inactive"}
                    </ToggleText>
                  </ToggleWrapper>
                </Td>
                <Td style={{ textAlign: "right" }}>
                  <ActionGroup>
                    {/* <ActionButton className="view" title="View" onClick={(e) => { e.stopPropagation(); onView && onView(product); }}>
                      <Eye size={14} />
                    </ActionButton> */}
                    <ActionButton
                      className="edit"
                      title="Edit"
                      onClick={(e) => {
                        e.stopPropagation();
                        onEdit && onEdit(product);
                      }}
                    >
                      <Edit2 size={14} />
                    </ActionButton>
                    <ActionButton
                      className="delete"
                      title="Delete"
                      onClick={(e) => {
                        e.stopPropagation();
                        onDelete && onDelete(product);
                      }}
                    >
                      <Trash2 size={14} />
                    </ActionButton>
                  </ActionGroup>
                </Td>
              </tr>
            );
          })}
        </tbody>
      </DataTable>
    </TableWrapper>
  );
};

export default ProductTable;
