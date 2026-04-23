import { useState } from "react";
import {
  useProductsQuery,
  useDeleteProductMutation,
  useUpdateProductMutation,
} from "../products.query";
import ProductFormModal from "../components/ProductFormModal";
import ProductTable from "../components/ProductTable";
import ConfirmModal from "../../../shared/components/ConfirmModal/ConfirmModal";
import { toast } from "sonner";
import { Plus, Search, Calendar, ChevronDown } from "lucide-react";
import {
  PageLayout,
  MainContentWrapper,
  TopArea,
  TitleSection,
  PageTitle,
  PageSubtitle,
  ControlsSection,
  SearchInputWrapper,
  StyledInput,
  FilterButton,
  AddButton,
} from "./ProductsPage.styles";
import Loader from "../../../shared/components/Loader/Loader";

const ProductsPage = () => {
  const { data: response, isLoading, isError, error } = useProductsQuery();
  const deleteMutation = useDeleteProductMutation();
  const updateMutation = useUpdateProductMutation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productToDelete, setProductToDelete] = useState(null);

  const handleToggleStatus = (product) => {
    toast.info("Updating status...");
    const newStatus = !product.isActive;
    updateMutation.mutate(
      {
        id: product._id,
        payload: { ...product, isActive: newStatus },
      },
      {
        onSuccess: () => {
          toast.success(
            `Product successfully ${newStatus ? "activated" : "deactivated"}!`,
          );
        },
        onError: () => {
          toast.error("Failed to update status");
        },
      },
    );
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setIsModalOpen(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleDeleteClick = (product) => {
    setProductToDelete(product);
  };

  const handleConfirmDelete = () => {
    if (productToDelete) {
      deleteMutation.mutate(productToDelete._id, {
        onSuccess: () => {
          setProductToDelete(null);
        },
      });
    }
  };

  if (isLoading) return <Loader />;
  if (isError)
    return (
      <div style={{ color: "var(--badge-red-text)", padding: "24px" }}>
        Failed to load products: {error.message}
      </div>
    );

  const products = response?.data || [];

  return (
    <PageLayout>
      <MainContentWrapper>
        <TopArea>
          <TitleSection>
            <PageTitle>Products</PageTitle>
            <PageSubtitle>
              Manage your product catalog and inventory
            </PageSubtitle>
          </TitleSection>

          <ControlsSection>
            {/* <SearchInputWrapper>
              <Search size={16} color="var(--muted)" />
              <StyledInput type="text" placeholder="Search" />
            </SearchInputWrapper> */}

            {/* <FilterButton>
              Date Range <Calendar size={14} />
            </FilterButton>
            
            <FilterButton>
              Category <ChevronDown size={14} />
            </FilterButton> */}

            <AddButton onClick={handleAdd}>
              <Plus size={16} /> Add Product
            </AddButton>
          </ControlsSection>
        </TopArea>

        <ProductTable
          products={products}
          onEdit={handleEdit}
          onDelete={handleDeleteClick}
          onToggleStatus={handleToggleStatus}
        />
      </MainContentWrapper>

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
        isLoading={deleteMutation.isPending}
        isDestructive={true}
      />
    </PageLayout>
  );
};

export default ProductsPage;
