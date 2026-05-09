import { Plus } from "lucide-react";
import ProductFormModal from "../components/ProductFormModal";
import ProductTable from "../components/ProductTable";
import ConfirmModal from "../../../shared/components/ConfirmModal/ConfirmModal";
import Loader from "../../../shared/components/Loader/Loader";
import { useProductsPageFlow } from "../hooks/ui/useProductsPageFlow";
import * as S from "./ProductsPage.styles";

const ProductsPage = () => {
  const {
    products,
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
  } = useProductsPageFlow();

  if (isLoading) return <Loader />;
  
  if (isError)
    return (
      <S.ErrorWrapper>
        Failed to load products: {error.message}
      </S.ErrorWrapper>
    );

  return (
    <S.PageLayout>
      <S.MainContentWrapper>
        <S.TopArea>
          <S.TitleSection>
            <S.PageTitle>Products</S.PageTitle>
            <S.PageSubtitle>
              Manage your product catalog and inventory
            </S.PageSubtitle>
          </S.TitleSection>

          <S.ControlsSection>
            <S.AddButton onClick={handleAdd}>
              <Plus size={16} /> Add Product
            </S.AddButton>
          </S.ControlsSection>
        </S.TopArea>

        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
          onToggleStatus={handleToggleStatus}
        />
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
