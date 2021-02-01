import styled from 'styled-components';
import Link from '../Link';

interface BackProps {
  href: string;
}

const StyledLink = styled(Link)`
  width: 32px;
  height: 32px;
  display: inline-block;
  transition: 0.3s;

  &:hover {
    opacity: 0.5;
  }
`;

const SVG = styled.svg`
  vertical-align: middle;

  path {
    fill: ${({ theme }) => theme.colors.contrastText};
  }
`;

export default function BackLinkArrow({ href }: BackProps) {
  return (
    <StyledLink href={href}>
      <SVG
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z"
          fill="white"
          fillOpacity="0.87"
        />
      </SVG>
    </StyledLink>
  );
}
