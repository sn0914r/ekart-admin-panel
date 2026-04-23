import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// =====================
// Animations
// =====================
const float = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
  100% { transform: translateY(0px); }
`;

const pulse = keyframes`
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0.2); /* using accent color */
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 15px rgba(79, 70, 229, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(79, 70, 229, 0);
  }
`;

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

// =====================
// Layout
// =====================
export const NotFoundWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--bg);
  padding: 2rem 0;
`;

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${float} 6s ease-in-out infinite;
`;

export const AnimatedIconWrapper = styled.div`
  position: relative;
  width: 72px;
  height: 72px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  color: var(--accent);
  box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.05);

  .pulse-ring {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: inherit;
    animation: ${pulse} 2s infinite;
  }

  .icon {
    /* Subtle slow spin to make the compass active */
    animation: ${spin} 20s linear infinite;
  }
`;

// =====================
// Typography
// =====================
export const ErrorCode = styled.h1`
  font-size: 80px;
  font-weight: 700;
  line-height: 1;
  color: var(--text);
  margin: 0 0 8px 0;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, var(--text) 0%, var(--muted) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 12px 0;
`;

export const Description = styled.p`
  font-size: 12px; /* Based on UI_DESIGNS.md standard body sizing */
  color: var(--muted);
  max-width: 400px;
  margin: 0 0 32px 0;
  line-height: 1.6;
`;

// =====================
// Buttons
// =====================
export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const PrimaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--accent);
  color: #ffffff;
  border: none;
  font-size: 12px;
  font-weight: 500;
  padding: 7px 16px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.88;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(79, 70, 229, 0.2);
  }
`;

export const SecondaryButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--surface2);
  color: var(--text);
  border: 0.5px solid var(--border);
  font-size: 12px;
  font-weight: 400;
  padding: 7px 14px;
  border-radius: 8px;
  cursor: pointer;
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    background: var(--border);
    transform: translateY(-1px);
  }
`;
