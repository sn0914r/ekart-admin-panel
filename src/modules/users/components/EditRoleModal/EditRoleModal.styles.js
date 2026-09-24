import styled from "@emotion/styled";

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const RoleOptionsGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const RoleOptionCard = styled.label`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 12px 14px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.isSelected ? "var(--accent)" : "var(--border)")};
  background: ${(props) => (props.isSelected ? "var(--accent-light)" : "var(--surface)")};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    border-color: var(--accent);
  }

  input[type="radio"] {
    margin-top: 3px;
    accent-color: var(--accent);
    cursor: pointer;
  }
`;

export const RoleTextGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

export const RoleTitle = styled.span`
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
`;

export const RoleDesc = styled.span`
  font-size: 11px;
  color: var(--muted);
`;

export const WarningNote = styled.div`
  font-size: 12px;
  color: var(--muted);
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 10px 12px;
  border-radius: 6px;
  line-height: 1.4;
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-top: 6px;
`;

export const CancelButton = styled.button`
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  padding: 8px 16px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    background: var(--surface2);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const SubmitButton = styled.button`
  background: var(--accent);
  border: 1px solid transparent;
  color: #ffffff;
  padding: 8px 18px;
  border-radius: 6px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s;

  &:hover:not(:disabled) {
    opacity: 0.9;
    transform: translateY(-1px);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
