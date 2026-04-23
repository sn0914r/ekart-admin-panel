import styled from '@emotion/styled';

export const ConfirmContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 10px 0;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: var(--badge-red-bg);
  color: var(--badge-red-text);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
`;

export const MessageText = styled.h3`
  font-size: 15px;
  font-weight: 500;
  color: var(--text);
  margin: 0 0 8px 0;
`;

export const SubText = styled.p`
  font-size: 13px;
  color: var(--muted);
  margin: 0 0 24px 0;
  max-width: 90%;
  line-height: 1.5;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;

export const CancelButton = styled.button`
  flex: 1;
  background: var(--surface2);
  color: var(--text);
  border: 0.5px solid var(--border);
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 13px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    background: var(--border);
  }
`;

export const ConfirmButton = styled.button`
  flex: 1;
  background: ${props => props.$isDestructive ? 'var(--badge-red-text)' : 'var(--accent)'};
  color: #ffffff;
  border: none;
  height: 40px;
  border-radius: 8px;
  font-weight: 500;
  font-size: 13px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  opacity: ${props => props.disabled ? 0.7 : 1};
  font-family: inherit;
  transition: all 0.2s ease;

  &:hover {
    opacity: ${props => props.disabled ? 0.7 : 0.88};
  }
`;
