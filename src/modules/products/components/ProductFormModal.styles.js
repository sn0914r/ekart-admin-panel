import styled from "@emotion/styled";

// =====================
// Layout
// =====================
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

// =====================
// Inputs
// =====================
export const Label = styled.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
  margin-bottom: 6px;
`;

export const Input = styled.input`
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 12px;
  font-size: 13px;
  font-family: inherit;
  background: var(--surface);
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--accent);
  }

  &::placeholder {
    color: var(--muted);
    opacity: 0.5;
  }
`;

export const Select = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 38px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 0 32px 0 12px;
  font-size: 13px;
  font-family: inherit;
  background-color: var(--surface);
  background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 14px;
  color: var(--text);
  outline: none;
  cursor: pointer;

  &:focus {
    border-color: var(--accent);
  }
`;

export const TextArea = styled.textarea`
  min-height: 80px;
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
  font-size: 13px;
  font-family: inherit;
  background: var(--surface);
  color: var(--text);
  outline: none;
  resize: vertical;

  &:focus {
    border-color: var(--accent);
  }
`;

export const CheckboxGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 4px;

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
  }

  input[type="checkbox"] {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }

  .chip {
    padding: 6px 14px;
    font-size: 12px;
    font-weight: 500;
    border-radius: 8px;
    background: var(--surface2);
    color: var(--text);
    border: 1px solid var(--border);
    transition: all 0.2s ease;
    user-select: none;
  }

  input[type="checkbox"]:checked ~ .chip {
    background: var(--accent);
    color: #fff;
    border-color: var(--accent);
    box-shadow: 0 2px 6px rgba(79, 70, 229, 0.2);
  }

  input[type="checkbox"]:focus-visible ~ .chip {
    outline: 2px solid var(--accent);
    outline-offset: 2px;
  }
`;

export const ErrorText = styled.span`
  color: var(--badge-red-text);
  font-size: 10px;
  margin-top: 4px;
`;

// =====================
// File Upload & Preview
// =====================
export const FileLabel = styled.div`
  border: 1px dashed var(--border);
  border-radius: 8px;
  padding: 24px;
  text-align: center;
  cursor: pointer;
  transition: all 0.2s;
  background: var(--bg);
  min-height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    border-color: var(--accent);
    background: var(--surface2);
  }

  span {
    font-size: 12px;
    color: var(--text);
    font-weight: 500;
  }
`;

export const DndGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 12px;
  margin-top: 16px;
  width: 100%;
`;

export const ImagePreviewWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  cursor: grab;

  &:active {
    cursor: grabbing;
  }

  .overlay {
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    opacity: 0;
    transition: opacity 0.2s;
  }

  &:hover .overlay {
    opacity: 1;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

// =====================
// Buttons
// =====================
export const SubmitButton = styled.button`
  margin-top: 8px;
  background: var(--accent);
  color: #fff;
  border: none;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 13px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.disabled ? 0.7 : 1)};
  transition: all 0.2s ease;

  &:hover {
    opacity: ${(props) => (props.disabled ? 0.7 : 0.88)};
  }
`;
