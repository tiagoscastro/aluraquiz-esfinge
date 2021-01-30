import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme as AppTheme } from '../../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  html,
  body {
    min-height: 100vh;
  }

  body {
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.secondary};
  }

  #__next {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={AppTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
