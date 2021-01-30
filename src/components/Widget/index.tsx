import styled from 'styled-components';

export const Widget = styled.div`
  margin: 24px 0px;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1,
  h2,
  h3 {
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
    padding-top: 16px;
    margin-top: 16px;
    border-top: 1px solid ${({ theme }) => `${theme.colors.secondary}40`};
    list-style: none;

    input {
      margin-right: 16px;
    }
  }

  h2,
  p {
    margin-bottom: 16px;
  }
`;

export const WidgetTopic = styled.a`
  padding: 8px 16px;
  margin-bottom: 8px;
  outline: none;
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => `${theme.colors.primary}40`};
  cursor: pointer;
  transition: opacity 0.3s;
  display: block;

  &:hover,
  &:focus {
    opacity: 0.5;
  }
`;
