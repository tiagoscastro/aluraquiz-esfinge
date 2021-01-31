import { AppProps } from 'next/dist/next-server/lib/router/router';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { theme as AppTheme } from '../../db.json';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    font-family: 'Lato', sans-serif;
    color: ${({ theme }) => theme.colors.contrastText};
  }

  html,
  body {
    min-height: 100vh;
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
