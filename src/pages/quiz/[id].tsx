import { GetServerSideProps } from 'next';
import { ThemeProvider } from 'styled-components';
import db from '../../../db.json';
import Quiz from '../../screens/Quiz';

type Db = typeof db;

interface QuizProps {
  externalDb: Db;
}

export default function ExternalsQuizzes({ externalDb }: QuizProps) {
  return (
    <ThemeProvider theme={externalDb.theme}>
      <Quiz db={externalDb} />
    </ThemeProvider>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const [projectName, githubUser] = query.id.split('___');
  const url = `https://${projectName}.${githubUser}.vercel.app/api/db`;

  const externalDb = await fetch(url)
    .then(response => {
      if (response.ok) return response.json();
      throw new Error('Falha ao requisitar os dados');
    })
    .then(json => json)
    .catch(error => console.error(error));

  return {
    props: {
      externalDb,
    },
  };
};
