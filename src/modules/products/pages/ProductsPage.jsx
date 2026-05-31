import { Plus } from "lucide-react";
import ProductFormModal from "../components/ProductFormModal";
import ProductTable from "../components/ProductTable";
import ConfirmModal from "../../../shared/components/ConfirmModal/ConfirmModal";
import Loader from "../../../shared/components/Loader/Loader";
import ErrorState from "../../../shared/components/ErrorState";
import Pagination from "../../../shared/components/Pagination/Pagination";
import { useProductsPageFlow } from "../hooks/ui/useProductsPageFlow";
import * as S from "./ProductsPage.styles";

const ProductsPage = () => {
  const {
    products,
    pagination,
    isLoading,
    isError,
    error,
    isModalOpen,
    setIsModalOpen,
    editingProduct,
    productToDelete,
    setProductToDelete,
    handleToggleStatus,
    handleAdd,
    handleEdit,
    handleDeleteClick,
    handleConfirmDelete,
    isDeleting,
    page,
    setPage,
    limit,
    setLimit,
    searchTerm,
    setSearchTerm,
    filters,
    handleFilterChange,
    sorts,
    handleSort,
  } = useProductsPageFlow();

  return (
    <S.PageLayout>
      <S.MainContentWrapper>
        <S.TopArea>
          <S.TitleSection>
            <S.PageTitle>Products</S.PageTitle>
            <S.PageSubtitle>
              Showing {products?.length || 0} of{" "}
              {pagination?.totalProducts || 0} products
            </S.PageSubtitle>
          </S.TitleSection>

          <S.ControlsSection>
            <S.SearchInput
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />

            <S.FilterSelect
              value={filters.status}
              onChange={(e) => handleFilterChange("status", e.target.value)}
            >
              <option value="">All Statuses</option>
              <option value="ACTIVE">Active</option>
              <option value="NOT_ACTIVE">Not Active</option>
            </S.FilterSelect>

            <S.FilterSelect
              value={filters.stockStatus}
              onChange={(e) =>
                handleFilterChange("stockStatus", e.target.value)
              }
            >
              <option value="">All Stock</option>
              <option value="IN_STOCK">In Stock</option>
              <option value="LOW_STOCK">Low Stock</option>
              <option value="OUT_OF_STOCK">Out of Stock</option>
            </S.FilterSelect>

            <S.AddButton onClick={handleAdd}>
              <Plus size={16} /> Add Product
            </S.AddButton>
          </S.ControlsSection>
        </S.TopArea>

        {isLoading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              padding: "60px 0",
            }}
          >
            <Loader />
          </div>
        ) : isError ? (
          <ErrorState
            title="Failed to load products"
            message={error?.message}
          />
        ) : (
          <>
            <ProductTable
              products={products}
              onEdit={handleEdit}
              onDelete={handleDeleteClick}
              onToggleStatus={handleToggleStatus}
              hasPagination={!!pagination}
              sorts={sorts}
              onSort={handleSort}
            />
            {pagination && (
              <Pagination
                currentPage={page}
                totalPages={pagination.totalPages}
                onPageChange={setPage}
                limit={limit}
                onLimitChange={setLimit}
                limitOptions={[10, 20, 30, 50]}
              />
            )}
          </>
        )}
      </S.MainContentWrapper>

      <ProductFormModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialData={editingProduct}
      />

      <ConfirmModal
        isOpen={!!productToDelete}
        onClose={() => setProductToDelete(null)}
        onConfirm={handleConfirmDelete}
        title="Delete Product"
        message={`Are you sure you want to delete "${productToDelete?.name}"?`}
        subMessage="This item will be permanently removed from your catalog. This action cannot be undone."
        confirmText="Yes, Delete"
        isLoading={isDeleting}
        isDestructive={true}
      />
    </S.PageLayout>
  );
};

export default ProductsPage;
