import styled from 'styled-components';

const Button = styled.button`
  width: 100%;
  padding: 16px;
  outline: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  text-transform: uppercase;
  transition: opacity 0.3s;
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    opacity: 0.5;
  }

  &:disabled {
    background-color: #979797;
    cursor: not-allowed;
  }
`;

export default Button;
