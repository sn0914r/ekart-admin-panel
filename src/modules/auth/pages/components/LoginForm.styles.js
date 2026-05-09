import styled from "@emotion/styled";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: var(--bg);
  padding: 24px;
`;

export const LoginCard = styled.div`
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 10px;
  padding: 32px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
`;

export const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 32px;
`;

export const LoginTitle = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 8px;
`;

export const LoginSubtitle = styled.p`
  font-size: 13px;
  color: var(--muted);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 11px;
  font-weight: 500;
  color: var(--muted);
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 12px;
  font-size: 13px;
  border: 0.5px solid var(--border);
  border-radius: 8px;
  background: var(--bg);
  color: var(--text);
  font-family: inherit;
  transition: border-color 0.15s;

  &:focus {
    outline: none;
    border-color: var(--accent);
  }
`;

export const ErrorText = styled.span`
  font-size: 11px;
  color: var(--badge-red-text);
  margin-top: 4px;
`;

export const SubmitButton = styled.button`
  background: var(--accent);
  color: #ffffff;
  border: none;
  font-size: 13px;
  font-weight: 500;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.88;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
