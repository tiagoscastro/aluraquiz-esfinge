import Head from 'next/head';
import { useEffect, useState } from 'react';
import db from '../../db.json';
import Button from '../components/Button';

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

type QuestionProps = typeof db.questions[0];

interface WidgetProps {
  totalQuestions: number;
  questionIndex: number;
  question: QuestionProps;
  onSubmit: () => void;
}

function LoadingWidget() {
  return (
    <Widget>
      <WidgetHeader>Carregando...</WidgetHeader>

      <WidgetContent>[Desafio do Loading]</WidgetContent>
    </Widget>
  );
}

function QuestionWidget({
  totalQuestions,
  questionIndex,
  question,
  onSubmit,
}: WidgetProps) {
  const questionId = `question__${questionIndex}`;

  return (
    <Widget>
      <WidgetHeader>
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </WidgetHeader>

      <img src={question.image} width="100%" alt="esfinge" />

      <WidgetContent>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <form
          onSubmit={e => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <ul>
            {question.alternatives.map((alternative, alternativeIndex) => {
              const alternativeId = `alternative__${alternativeIndex}`;

              return (
                <WidgetTopic as="label" htmlFor={alternativeId}>
                  <input id={alternativeId} name={questionId} type="radio" />
                  {alternative}
                </WidgetTopic>
              );
            })}
          </ul>

          <Button type="submit">Confirmar</Button>
        </form>
      </WidgetContent>
    </Widget>
  );
}

export default function Quiz() {
  const screenStates = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT',
  };
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < totalQuestions) setCurrentQuestion(nextQuestion);
    else setScreenState(screenStates.RESULT);
  }

  return (
    <>
      <Head>
        <title>
          Enigma {currentQuestion + 1} - Enigmas da Esfinge - Alura Quiz
        </title>
      </Head>

      <QuizBackground bg={db.bg}>
        <QuizContainer>
          <QuizLogo />

          {screenState === screenStates.LOADING && <LoadingWidget />}

          {screenState === screenStates.QUIZ && (
            <QuestionWidget
              totalQuestions={totalQuestions}
              questionIndex={currentQuestion}
              question={question}
              onSubmit={handleSubmitQuiz}
            />
          )}

          {screenState === screenStates.RESULT && <p>Result</p>}
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
