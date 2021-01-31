import styled from 'styled-components';

interface InputProps {
  name: string;
  placeholder: string;
  value: string;
  onChange: (e) => void;
}

const InputBase = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Input({ placeholder, onChange, ...props }: InputProps) {
  return <InputBase placeholder={placeholder} onChange={onChange} {...props} />;
}
