import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { title, description, bg } from '../../db.json';

// Components
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import { Widget, WidgetContent, WidgetHeader } from '../components/Widget';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import db from './api/db';

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState('');

  return (
    <>
      <Head>
        <title>{title} - Alura Quiz</title>
      </Head>

      <QuizBackground bg={bg}>
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
                <Input
                  name="userName"
                  placeholder="Diga-nos seu nome"
                  value={name}
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
