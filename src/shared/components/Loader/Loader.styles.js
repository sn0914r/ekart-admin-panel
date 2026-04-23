import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// =====================
// Animations
// =====================
const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dasharray: 1, 150;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -124;
  }
`;

const pulseText = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.4; }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  
  /* Fallback for full screen takeover like for App routing */
  ${({ $fullScreen }) => $fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: var(--bg);
    z-index: 9999;
    padding: 0;
  `}
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;

  .loader-text {
    font-size: 11px; /* Follows UI_DESIGNS.md for Labels / muted */
    font-weight: 500;
    color: var(--muted);
    letter-spacing: 0.04em;
    animation: ${pulseText} 1.5s ease-in-out infinite;
  }
`;

export const SpinnerSvg = styled.svg`
  animation: ${rotate} 2s linear infinite;
  /* Add subtle drop shadow to glow on dark backgrounds */
  filter: drop-shadow(0 4px 8px rgba(79, 70, 229, 0.15));

  .path {
    stroke: var(--accent);
    stroke-linecap: round;
    animation: ${dash} 1.5s ease-in-out infinite;
  }
`;
