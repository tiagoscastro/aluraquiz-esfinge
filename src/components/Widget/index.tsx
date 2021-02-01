import styled from 'styled-components';

export const Widget = styled.div`
  margin: 24px 0px;
  border-radius: 4px;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.contrastText};
  overflow: hidden;

  h1,
  h2,
  h3 {
    margin-bottom: 0;
    font-size: 24px;
    font-weight: 700;
    line-height: 1;
  }

  p {
    font-size: 16px;
    font-weight: 400;
    line-height: 1;
  }
`;

export const WidgetHeader = styled.header`
  padding: 16px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;

  * {
    margin: 0;
  }
`;

export const WidgetContent = styled.div`
  padding: 32px;

  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  ul {
    padding: 0;
    list-style: none;
  }
`;

export const WidgetTopic = styled.a`
  padding: 8px 16px;
  margin-bottom: 8px;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.contrastText};
  text-decoration: none;
  background-color: ${({ theme }) => `${theme.colors.primary}90`};
  cursor: pointer;
  transition: opacity 0.3s, background-color 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }

  input {
    display: none;
  }
`;
