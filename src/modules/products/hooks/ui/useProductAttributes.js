import { useEffect, useRef, useMemo } from "react";
import { CATEGORY_SIZES } from "../../constants/categorySIzes";

export const useProductAttributes = (watch, setValue) => {
  const category = watch("category");
  const rawSelectedSizes = watch("attributes.size");
  const selectedSizes = useMemo(() => rawSelectedSizes || [], [rawSelectedSizes]);
  const prevCategoryRef = useRef(category);

  const availableSizes = useMemo(() => {
    if (!category) return [];
    return CATEGORY_SIZES[category] || CATEGORY_SIZES[category.toLowerCase()] || [];
  }, [category]);

  useEffect(() => {
    if (prevCategoryRef.current !== undefined && prevCategoryRef.current !== category) {
      if (selectedSizes.length > 0) {
        const validSizes = selectedSizes.filter((s) => availableSizes.includes(s));
        if (validSizes.length !== selectedSizes.length) {
          setValue("attributes.size", validSizes, { shouldValidate: true });
        }
      }
    }
    prevCategoryRef.current = category;
  }, [category, availableSizes, selectedSizes, setValue]);

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

  return {
    selectedSizes,
    availableSizes,
    handleSizeToggle,
  };
};
