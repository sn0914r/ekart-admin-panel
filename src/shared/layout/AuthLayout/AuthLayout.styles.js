import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import loginSplash from "@assets/login-splash.png";

export const AuthContainer = styled.div`
  display: grid;
  min-height: 100vh;
  background: var(--bg);
  width: 100vw;
  grid-template-columns: 1fr;

  @media (min-width: 768px) {
    grid-template-columns: 7fr 3fr;
  }
`;

export const AuthSplash = styled.div`
  display: none;
  background-image: url(${loginSplash});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-right: 1px solid var(--border);
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(5deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

export const FloatingIconWrapper = styled.div`
  position: absolute;
  color: rgba(255, 255, 255, 0.7);
  animation: ${float} ${({ duration }) => duration || '6s'} ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || '0s'};
  top: ${({ top }) => top};
  left: ${({ left }) => left};
  right: ${({ right }) => right};
  bottom: ${({ bottom }) => bottom};
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.05);
  padding: 16px;
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

export const AuthContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 32px;
  width: 100%;
  background: var(--surface);
  border-left: 1px solid var(--border);

  @media (min-width: 768px) {
    padding: 64px;
  }
`;
