import { CATEGORY_SIZES } from "../../constants/categorySIzes";

export const useProductAttributes = (watch, setValue) => {
  const category = watch("category");
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

  const availableSizes = CATEGORY_SIZES[category] || CATEGORY_SIZES["Shirts"];

  return {
    selectedSizes,
    availableSizes,
    handleSizeToggle,
  };
};
