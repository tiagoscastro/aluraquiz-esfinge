import styled from 'styled-components';

interface InputProps {
  name: string;
  placeholder: string;
  onChange: (e) => void;
}

const InputBase = styled.input`
  width: 100%;
  padding: 16px;
  margin-bottom: 24px;
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.mainBg};
`;

export default function Input({ name, placeholder, onChange }: InputProps) {
  return (
    <InputBase name={name} placeholder={placeholder} onChange={onChange} />
  );
}
