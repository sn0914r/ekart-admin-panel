import React from 'react';
import { AlertCircle } from 'lucide-react';
import { ErrorContainer, ErrorTitle, ErrorMessage, RetryButton } from './ErrorState.styles';

const ErrorState = ({ title = "Something went wrong", message, onRetry }) => {
  return (
    <ErrorContainer>
      <AlertCircle size={32} className="error-icon" />
      <ErrorTitle>{title}</ErrorTitle>
      {message && <ErrorMessage>{message}</ErrorMessage>}
      {onRetry && (
        <RetryButton onClick={onRetry}>
          Try Again
        </RetryButton>
      )}
    </ErrorContainer>
  );
};

export default ErrorState;
