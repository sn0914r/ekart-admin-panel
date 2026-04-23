import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px) scale(0.98); }
  to { opacity: 1; transform: translateY(0) scale(1); }
`;

// =====================
// Layout
// =====================
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(4px);
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  animation: ${fadeIn} 0.2s ease-out;
`;

export const ModalBox = styled.div`
  background: var(--surface);
  border: 0.5px solid var(--border);
  border-radius: 12px; /* Smooth rounded corners */
  width: 100%;
  max-width: ${props => props.$maxWidth || '500px'};
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  animation: ${slideUp} 0.3s cubic-bezier(0.16, 1, 0.3, 1);
`;

// =====================
// Header Area
// =====================
export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-bottom: 0.5px solid var(--border);
  position: sticky;
  top: 0;
  background: var(--surface);
  z-index: 10;
`;

export const ModalTitle = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin: 0;
`;

export const CloseButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  color: var(--muted);
  border: none;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: var(--surface2);
    color: var(--text);
  }
`;

// =====================
// Content
// =====================
export const ModalContent = styled.div`
  padding: 20px;
`;
