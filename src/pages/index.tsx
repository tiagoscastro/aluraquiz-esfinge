import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { title, description, bg, external } from '../../db.json';

// Components
import QuizBackground from '../components/QuizBackground';
import QuizContainer from '../components/QuizContainer';
import QuizLogo from '../components/QuizLogo';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTopic,
} from '../components/Widget';
import Input from '../components/Input';
import Button from '../components/Button';
import Footer from '../components/Footer';
import GitHubCorner from '../components/GitHubCorner';
import Link from '../components/Link';

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

          <Widget
            as={motion.section}
            variants={{
              show: { opacity: 1, y: 0 },
              hidden: { opacity: 0, y: '100%' },
            }}
            initial="hidden"
            animate="show"
            transition={{ duration: 0.5 }}
          >
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

          <Widget
            as={motion.section}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <WidgetContent>
              <h1>Quizes da Galera</h1>

              <ul>
                {external.map(link => {
                  const [projectName, githubUser] = link
                    .replace(/\//g, '')
                    .replace('https:', '')
                    .replace('.vercel.app', '')
                    .split('.');

                  return (
                    <li key={link}>
                      <WidgetTopic
                        as={Link}
                        href={`/quiz/${projectName}___${githubUser}`}
                      >
                        {`${githubUser}/${projectName}`}
                      </WidgetTopic>
                    </li>
                  );
                })}
              </ul>
            </WidgetContent>
          </Widget>

          <Footer
            as={motion.footer}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
            initial="hidden"
            animate="show"
            transition={{ delay: 0.5, duration: 0.5 }}
          />
        </QuizContainer>
        <GitHubCorner projectUrl="https://github.com/tiagoscastro" />
      </QuizBackground>
    </>
  );
}
