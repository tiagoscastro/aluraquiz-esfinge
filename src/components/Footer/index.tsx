/* eslint "react/jsx-one-expression-per-line": "off" */
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  padding: 16px;
  border-radius: 4px;
  background-color: #00000070;
  display: flex;
  align-items: center;

  img {
    width: 64px;
    margin-right: 24px;
  }

  a {
    color: white;
    text-decoration: none;
    transition: 0.3s;

    &:hover,
    &:focus {
      opacity: 0.5;
    }

    span {
      text-decoration: underline;
    }
  }

  p {
    color: white;
  }
`;

export default function Footer(props) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <FooterWrapper {...props}>
      <a href="https://www.alura.com.br/">
        <img
          src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg"
          alt="Logo Alura"
        />
      </a>

      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
}
