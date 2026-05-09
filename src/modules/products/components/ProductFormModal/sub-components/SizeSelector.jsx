import * as S from "../ProductFormModal.styles";

const SizeSelector = ({ availableSizes, selectedSizes, onToggle }) => {
  return (
    <S.CheckboxGrid>
      {availableSizes.map((size) => (
        <label key={size}>
          <input
            type="checkbox"
            checked={selectedSizes.includes(size)}
            onChange={() => onToggle(size)}
          />
          <div className="chip">{size}</div>
        </label>
      ))}
    </S.CheckboxGrid>
  );
};

export default SizeSelector;
