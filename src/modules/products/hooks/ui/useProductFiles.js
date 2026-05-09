import { useState, useEffect } from "react";

export const useProductFiles = (setValue) => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [draggedIdx, setDraggedIdx] = useState(null);

  // Sync selectedFiles with react-hook-form
  useEffect(() => {
    setValue("files", selectedFiles, { shouldValidate: true });
  }, [selectedFiles, setValue]);

  const handleFilesChange = (e) => {
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

  return {
    selectedFiles,
    draggedIdx,
    handleFilesChange,
    removeFile,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    setSelectedFiles,
  };
};
