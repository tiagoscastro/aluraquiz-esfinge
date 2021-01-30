import { useState } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { title, description } from '../../db.json';

// Components
import QuizBackground from '../components/QuizBackground';
import { Widget, WidgetContent, WidgetHeader } from '../components/Widget';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import QuizLogo from '../components/QuizLogo';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;

  @media screen and (max-width: 500px) {
    padding: 16px;
    margin: auto;
  }
`;

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <QuizBackground>
      <QuizContainer>
        <QuizLogo />

        <Widget>
          <WidgetHeader>
            <h1>{title}</h1>
          </WidgetHeader>

          <WidgetContent>
            <p>{description}</p>

            <form
              onSubmit={e => {
                e.preventDefault();
                router.push(`/quiz?name=${name}`);
              }}
            >
              <input
                placeholder="Diga-nos seu nome"
                onChange={e => setName(e.target.value)}
              />
              <button type="submit" disabled={name.length === 0}>
                Jogar
              </button>
            </form>
          </WidgetContent>
        </Widget>

        <Widget>
          <WidgetContent>
            <h1>Quizes da Galera</h1>
          </WidgetContent>
        </Widget>

        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/tiagoscastro" />
    </QuizBackground>
  );
}
