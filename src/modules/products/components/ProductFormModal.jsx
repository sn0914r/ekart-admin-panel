import { useEffect, useState } from "react";
import { Upload, X, GripHorizontal, ShieldAlert } from "lucide-react";
import { useProductForm } from "../useProductForm";
import Modal from "../../../shared/components/Modal/Modal";
import {
  FormWrapper,
  FormRow,
  FormGroup,
  Label,
  Input,
  Select,
  TextArea,
  CheckboxGrid,
  ErrorText,
  FileLabel,
  ImagePreviewWrapper,
  ImagePreview,
  DndGrid,
  SubmitButton,
} from "./ProductFormModal.styles";

const CATEGORY_SIZES = {
  Shirts: ["S", "M", "L", "XL", "XXL"],
  Pants: ["28", "30", "32", "34", "36"],
  Shoes: ["6", "7", "8", "9", "10"],
};

const ProductFormModal = ({ isOpen, onClose, initialData }) => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isEditing,
    watch,
    setValue,
  } = useProductForm(initialData, onClose);

  // Local state for dragging images natively
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [draggedIdx, setDraggedIdx] = useState(null);

  const category = watch("category");
  // We need to watch sizes natively to manage checkboxes
  const selectedSizes = watch("attributes.size") || [];

  const handleSizeToggle = (size) => {
    const current = [...selectedSizes];
    if (current.includes(size)) {
      setValue(
        "attributes.size",
        current.filter((s) => s !== size),
        { shouldValidate: true },
      );
    } else {
      setValue("attributes.size", [...current, size], { shouldValidate: true });
    }
  };

  // Drag and Drop Interceptors
  const handleFileChange = (e) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setSelectedFiles((prev) => [...prev, ...newFiles]);
    }
  };

  const removeFile = (idxToRemove) => {
    setSelectedFiles((prev) => prev.filter((_, idx) => idx !== idxToRemove));
  };

  const handleDragStart = (idx) => {
    setDraggedIdx(idx);
  };

  const handleDragOver = (e, idx) => {
    e.preventDefault();
    if (draggedIdx === null || draggedIdx === idx) return;

    // Swap files live while holding
    const newFiles = [...selectedFiles];
    const draggedFile = newFiles[draggedIdx];
    newFiles.splice(draggedIdx, 1);
    newFiles.splice(idx, 0, draggedFile);

    setSelectedFiles(newFiles);
    setDraggedIdx(idx);
  };

  const handleDragEnd = () => {
    setDraggedIdx(null);
  };

  // Sync selectedFiles dynamically right back into the react hook form "files" mapping array
  useEffect(() => {
    setValue("files", selectedFiles, { shouldValidate: true });
  }, [selectedFiles, setValue]);

  // Clean wipe memory when modal toggles
  useEffect(() => {
    if (!isOpen) {
      setSelectedFiles([]);
      setDraggedIdx(null);
    }
  }, [isOpen]);

  const availableSizes = CATEGORY_SIZES[category] || CATEGORY_SIZES["Shirts"];

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isEditing ? "Edit Product Settings" : "Add New Product"}
      maxWidth="650px"
    >
      <FormWrapper onSubmit={handleSubmit}>
        <FormRow>
          <FormGroup style={{ flex: 2 }}>
            <Label>Product Name</Label>
            <Input
              type="text"
              {...register("name")}
              placeholder="E.g. Wireless Headphones"
            />
            {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
          </FormGroup>
          <FormGroup style={{ flex: 1 }}>
            <Label>Category</Label>
            <Select {...register("category")}>
              <option value="Shirts">Shirts</option>
              <option value="Pants">Pants</option>
              <option value="Shoes">Shoes</option>
            </Select>
            {errors.category && (
              <ErrorText>{errors.category.message}</ErrorText>
            )}
          </FormGroup>
        </FormRow>

        <FormGroup>
          <Label>Product Description</Label>
          <TextArea
            {...register("description")}
            placeholder="Outline standard item specifics..."
          />
          {errors.description && (
            <ErrorText>{errors.description.message}</ErrorText>
          )}
        </FormGroup>

        <FormRow>
          <FormGroup>
            <Label>Price Base (₹)</Label>
            <Input
              type="number"
              step="0.01"
              {...register("price", { valueAsNumber: true })}
              placeholder="129.00"
            />
            {errors.price && <ErrorText>{errors.price.message}</ErrorText>}
          </FormGroup>

          <FormGroup>
            <Label>Initial Stock</Label>
            <Input
              type="number"
              {...register("stock", { valueAsNumber: true })}
              placeholder="34"
            />
            {errors.stock && <ErrorText>{errors.stock.message}</ErrorText>}
          </FormGroup>
        </FormRow>

        <FormRow>
          <FormGroup>
            <Label>Color</Label>
            <Input
              type="text"
              {...register("attributes.color")}
              placeholder="E.g. Midnight Blue"
            />
            {errors.attributes?.color && (
              <ErrorText>{errors.attributes.color.message}</ErrorText>
            )}
          </FormGroup>

          <FormGroup>
            <Label>Sizes</Label>
            <CheckboxGrid>
              {availableSizes.map((size) => (
                <label key={size}>
                  <input
                    type="checkbox"
                    checked={selectedSizes.includes(size)}
                    onChange={() => handleSizeToggle(size)}
                  />
                  <div className="chip">{size}</div>
                </label>
              ))}
            </CheckboxGrid>
            {errors.attributes?.size && (
              <ErrorText>{errors.attributes.size.message}</ErrorText>
            )}
          </FormGroup>
        </FormRow>

        {isEditing ? (
          <FormGroup
            style={{
              background: "var(--badge-amber-bg)",
              padding: "16px",
              borderRadius: "8px",
              border: "1px solid var(--border)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "var(--badge-amber-text)",
              }}
            >
              <ShieldAlert size={16} />
              <span style={{ fontSize: "12px", fontWeight: 500 }}>
                Image Management Locked
              </span>
            </div>
            <span
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "4px",
              }}
            >
              Currently, images are not updatable for existing entries. Please
              generate a new product entity entirely if visual assets require
              remapping.
            </span>
          </FormGroup>
        ) : (
          <FormGroup>
            <Label>Product Media Sequence (Drag & Drop Sequence Hub)</Label>
            <label>
              <FileLabel style={{ minHeight: "80px", padding: "16px" }}>
                <Upload
                  size={24}
                  style={{
                    margin: "0 auto 8px",
                    display: "block",
                    color: "var(--muted)",
                  }}
                />
                <span>
                  Click here to stack files against this product payload
                </span>
              </FileLabel>
              <input
                type="file"
                style={{ display: "none" }}
                accept="image/*"
                multiple
                onChange={handleFileChange}
              />
            </label>
            <span
              style={{
                fontSize: "11px",
                color: "var(--muted)",
                marginTop: "4px",
              }}
            >
              We'll take the first image as your absolute primary UI Thumbnail.
            </span>

            {selectedFiles.length > 0 && (
              <DndGrid>
                {selectedFiles.map((file, idx) => (
                  <ImagePreviewWrapper
                    key={`${file.name}-${idx}`}
                    draggable
                    onDragStart={() => handleDragStart(idx)}
                    onDragOver={(e) => handleDragOver(e, idx)}
                    onDragEnd={handleDragEnd}
                    style={{ opacity: draggedIdx === idx ? 0.5 : 1 }}
                  >
                    <ImagePreview
                      src={URL.createObjectURL(file)}
                      alt="Preview Drop"
                    />
                    <div className="overlay">
                      <GripHorizontal
                        size={14}
                        style={{ marginBottom: "8px", color: "#fff" }}
                      />
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        removeFile(idx);
                      }}
                      style={{
                        position: "absolute",
                        top: 4,
                        right: 4,
                        background: "rgba(0,0,0,0.6)",
                        border: "none",
                        color: "#fff",
                        borderRadius: "50%",
                        padding: "4px",
                        cursor: "pointer",
                        zIndex: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <X size={10} />
                    </button>
                  </ImagePreviewWrapper>
                ))}
              </DndGrid>
            )}
            {errors.files && <ErrorText>{errors.files.message}</ErrorText>}
          </FormGroup>
        )}

        <FormGroup
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: "8px",
            marginTop: "8px",
            paddingBottom: "8px",
          }}
        >
          <input type="checkbox" id="isActive" {...register("isActive")} />
          <Label
            htmlFor="isActive"
            style={{ cursor: "pointer", marginBottom: 0 }}
          >
            Active (Product will be visible to customers)
          </Label>
        </FormGroup>

        <SubmitButton type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Processing..." : "Submit"}
        </SubmitButton>
      </FormWrapper>
    </Modal>
  );
};

export default ProductFormModal;
