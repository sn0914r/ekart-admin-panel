import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// =====================
// Animations
// =====================
const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const pulseText = keyframes`
  0%, 100% { opacity: 0.8; }
  50% { opacity: 0.4; }
`;

const innerPulse = keyframes`
  0%, 100% { opacity: 0.6; transform: scale(0.85); box-shadow: 0 0 5px var(--accent); }
  50% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 15px var(--accent); }
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  
  ${({ $fullScreen }) => $fullScreen && `
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(15, 15, 20, 0.85);
    backdrop-filter: blur(8px);
    z-index: 9999;
    padding: 0;
  `}
`;

export const SpinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;

  .loader-text {
    font-size: 12px;
    font-weight: 500;
    color: var(--accent);
    letter-spacing: 0.1em;
    text-transform: uppercase;
    animation: ${pulseText} 1.5s ease-in-out infinite;
  }
`;

export const SpinnerWrapper = styled.div`
  position: relative;
  width: ${(props) => props.$size}px;
  height: ${(props) => props.$size}px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: conic-gradient(
      from 0deg,
      transparent 0%,
      transparent 20%,
      var(--accent) 100%
    );
    animation: ${spin} 1s linear infinite;
    mask-image: radial-gradient(transparent 58%, black 60%);
    -webkit-mask-image: radial-gradient(transparent 58%, black 60%);
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 50%;
    border: 1px solid rgba(99, 102, 241, 0.15);
  }

  .center-dot {
    position: absolute;
    width: ${(props) => props.$size * 0.2}px;
    height: ${(props) => props.$size * 0.2}px;
    background: var(--accent);
    border-radius: 50%;
    z-index: 1;
    animation: ${innerPulse} 2s ease-in-out infinite;
  }
`;
