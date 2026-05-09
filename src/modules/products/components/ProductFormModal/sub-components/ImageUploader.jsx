import { Upload, X, GripHorizontal } from "lucide-react";
import * as S from "../ProductFormModal.styles";

const ImageUploader = ({
  files,
  draggedIdx,
  onFilesChange,
  onRemoveFile,
  onDragStart,
  onDragOver,
  onDragEnd,
  error,
}) => {
  return (
    <S.FormGroup>
      <S.Label>Product Media Sequence (Drag & Drop Sequence Hub)</S.Label>
      <label>
        <S.FileLabel>
          <S.UploadIconWrapper>
            <Upload size={24} />
          </S.UploadIconWrapper>
          <span>Click here to stack files against this product payload</span>
        </S.FileLabel>
        <S.HiddenInput
          type="file"
          accept="image/*"
          multiple
          onChange={onFilesChange}
        />
      </label>
      <S.HelperText>
        We'll take the first image as your absolute primary UI Thumbnail.
      </S.HelperText>

      {files.length > 0 && (
        <S.DndGrid>
          {files.map((file, idx) => (
            <S.ImagePreviewWrapper
              key={`${file.name}-${idx}`}
              draggable
              onDragStart={() => onDragStart(idx)}
              onDragOver={(e) => onDragOver(e, idx)}
              onDragEnd={onDragEnd}
              isDragging={draggedIdx === idx}
            >
              <S.ImagePreview src={URL.createObjectURL(file)} alt="Preview Drop" />
              <div className="overlay">
                <S.GripIcon>
                  <GripHorizontal size={14} />
                </S.GripIcon>
              </div>
              <S.RemoveButton
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  onRemoveFile(idx);
                }}
              >
                <X size={10} />
              </S.RemoveButton>
            </S.ImagePreviewWrapper>
          ))}
        </S.DndGrid>
      )}
      {error && <S.ErrorText>{error.message}</S.ErrorText>}
    </S.FormGroup>
  );
};

export default ImageUploader;
