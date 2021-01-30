import styled from 'styled-components';

interface bgProps {
  bg: string;
}

const QuizBackground = styled.div`
  width: 100%;
  flex: 1;
  background-size: cover;
  background-position: center;
  background-image: url(${({ bg }: bgProps) => bg});
  background-color: ${({ theme }) => theme.colors.mainBg};

  @media screen and (max-width: 500px) {
    background-image: none;

    &:after {
      content: '';
      width: 100%;
      height: 210px;
      background-size: cover;
      background-position: center;
      background-image: linear-gradient(
          transparent,
          ${({ theme }) => theme.colors.mainBg}
        ),
        url(${({ bg }: bgProps) => bg});
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      z-index: 1;
    }

    *:first-child {
      position: relative;
      z-index: 10;
    }
  }
`;

export default QuizBackground;
