import styled from "@emotion/styled";
import loginSplash from "@assets/login-splash.png";

export const LoginWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: var(--bg);
`;

export const SplashSection = styled.div`
  flex: 1;
  display: none;
  background-image: url(${loginSplash});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-right: 1px solid var(--border);

  @media (min-width: 768px) {
    display: block;
  }
`;

export const FormSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 32px;
  position: relative;
  justify-content: center;

  @media (min-width: 768px) {
    padding: 64px;
    max-width: 600px;
    margin: 0 auto;
  }
`;

export const ThemeToggle = styled.button`
  position: absolute;
  top: 32px;
  right: 32px;
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text);
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: var(--surface2);
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
`;

export const LoginHeader = styled.div`
  margin-bottom: 48px;
`;

export const AdminBadge = styled.div`
  display: inline-block;
  background: var(--surface2);
  border: 1px solid var(--border);
  padding: 6px 12px;
  border-radius: 8px;
  margin-bottom: 16px;
`;

export const BadgeText = styled.span`
  display: block;
  font-size: 10px;
  font-weight: 700;
  color: var(--accent);
  letter-spacing: 0.5px;
  line-height: 1.2;
`;

export const LoginTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  margin-top: 24px;
`;

export const LoginSubtitle = styled.p`
  font-size: 14px;
  color: var(--muted);
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: 13px;
  font-weight: 500;
  color: var(--text);
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px 16px;
  font-size: 14px;
  border: 1px solid var(--border);
  border-radius: 8px;
  background: var(--surface2);
  color: var(--text);
  font-family: inherit;
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 3px var(--accent-light);
  }
`;

export const ErrorText = styled.span`
  font-size: 12px;
  color: var(--badge-red-text);
  margin-top: 4px;
`;

export const SubmitButton = styled.button`
  background: var(--accent);
  color: #ffffff;
  border: none;
  font-size: 14px;
  font-weight: 600;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.2s ease, transform 0.1s ease;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover:not(:disabled) {
    opacity: 0.9;
  }

  &:active:not(:disabled) {
    transform: scale(0.98);
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;
