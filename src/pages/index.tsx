import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { title, bg } from '../../db.json';

// Components
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import { Widget, WidgetContent, WidgetHeader } from '../components/Widget';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Enigmas da Esfinge - Alura Quiz</title>
      </Head>

      <QuizBackground bg={bg}>
        <QuizContainer>
          <QuizLogo />

          <Widget>
            <WidgetHeader>
              <h1>{title}</h1>
            </WidgetHeader>

            <WidgetContent>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  router.push(`/quiz?name=${name}`);
                }}
              >
                <Input
                  name="userName"
                  placeholder="Diga-nos seu nome"
                  onChange={e => setName(e.target.value)}
                />

                <Button type="submit" disabled={name.length === 0}>
                  Jogar
                </Button>
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
    </>
  );
}
