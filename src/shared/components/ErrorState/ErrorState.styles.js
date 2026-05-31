import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 24px;
  text-align: center;
  width: 100%;

  .error-icon {
    color: var(--badge-red-text);
    opacity: 0.8;
    margin-bottom: 16px;
  }
`;

export const ErrorTitle = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 8px 0;
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 24px 0;
  max-width: 400px;
  line-height: 1.5;
`;

export const RetryButton = styled.button`
  padding: 8px 20px;
  border-radius: 8px;
  background: var(--surface2);
  color: var(--text);
  border: 1px solid var(--border);
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--surface);
    border-color: var(--muted);
  }
`;
