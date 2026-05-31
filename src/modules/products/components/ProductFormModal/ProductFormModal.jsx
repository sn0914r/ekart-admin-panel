import { useEffect } from "react";
import { useProductForm } from "@modules/products/hooks/ui/useProductForm";
import Modal from "@shared/components/Modal/Modal";
import SizeSelector from "./sub-components/SizeSelector";
import ImageUploader from "./sub-components/ImageUploader";
import LockedNotification from "./sub-components/LockedNotification";
import * as S from "./ProductFormModal.styles";

const ProductFormModal = ({ isOpen, onClose, initialData }) => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isEditing,
    selectedFiles,
    draggedIdx,
    selectedSizes,
    availableSizes,
    handleSizeToggle,
    handleFilesChange,
    removeFile,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setSelectedFiles,
  } = useProductForm(initialData, onClose);

  // Reset local state when modal closes if needed (though hook handles success reset)
  useEffect(() => {
    if (!isOpen) {
      setSelectedFiles([]);
    }
  }, [isOpen, setSelectedFiles]);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? "Edit Product Settings" : "Add New Product"}
      maxWidth="650px"
    >
      <S.FormWrapper onSubmit={handleSubmit}>
        <S.FormRow>
          <S.FormGroup flex={2}>
            <S.Label>Product Name</S.Label>
            <S.Input
              type="text"
              {...register("name")}
              placeholder="E.g. Black Shirt"
            />
            {errors.name && <S.ErrorText>{errors.name.message}</S.ErrorText>}
          </S.FormGroup>
          <S.FormGroup flex={1}>
            <S.Label>Category</S.Label>
            <S.Select {...register("category")}>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Shoes">Shoes</option>
            </S.Select>
            {errors.category && (
              <S.ErrorText>{errors.category.message}</S.ErrorText>
            )}
          </S.FormGroup>
        </S.FormRow>

        <S.FormGroup>
          <S.Label>Product Description</S.Label>
          <S.TextArea
            {...register("description")}
            placeholder="Outline standard item specifics..."
          />
          {errors.description && (
            <S.ErrorText>{errors.description.message}</S.ErrorText>
          )}
        </S.FormGroup>

        <S.FormRow>
          <S.FormGroup>
            <S.Label>Price (₹)</S.Label>
            <S.Input
              type="number"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
              placeholder="129.00"
            />
            {errors.price && <S.ErrorText>{errors.price.message}</S.ErrorText>}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Initial Stock</S.Label>
            <S.Input
              type="number"
              {...register("stock", { valueAsNumber: true })}
              placeholder="34"
            />
            {errors.stock && <S.ErrorText>{errors.stock.message}</S.ErrorText>}
          </S.FormGroup>
        </S.FormRow>

        <S.FormRow>
          <S.FormGroup>
            <S.Label>Color</S.Label>
            <S.Input
              type="text"
              {...register("attributes.color")}
              placeholder="E.g. Midnight Blue"
            />
            {errors.attributes?.color && (
              <S.ErrorText>{errors.attributes.color.message}</S.ErrorText>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Sizes</S.Label>
            <SizeSelector
              availableSizes={availableSizes}
              selectedSizes={selectedSizes}
              onToggle={handleSizeToggle}
            />
            {errors.attributes?.size && (
              <S.ErrorText>{errors.attributes.size.message}</S.ErrorText>
            )}
          </S.FormGroup>
        </S.FormRow>

        {isEditing ? (
          <LockedNotification />
        ) : (
          <ImageUploader
            files={selectedFiles}
            draggedIdx={draggedIdx}
            onFilesChange={handleFilesChange}
            onRemoveFile={removeFile}
            onDragStart={handleDragStart}
            onDragOver={handleDragOver}
            onDragEnd={handleDragEnd}
            error={errors.files}
          />
        )}

        <S.StatusCheckboxWrapper>
          <input type="checkbox" id="isActive" {...register("isActive")} />
          <S.Label htmlFor="isActive" noMargin cursor="pointer">
            Active (Product will be visible to customers)
          </S.Label>
        </S.StatusCheckboxWrapper>

        <S.SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : (isEditing ? "Update Product" : "Create Product")}
        </S.SubmitButton>
      </S.FormWrapper>
    </Modal>
  );
};

export default ProductFormModal;
