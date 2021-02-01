import Head from 'next/head';
import { useEffect, useState } from 'react';
import dbModel from '../../../db.json';
import AlternativesForm from '../../components/AlternativesForm';
import BackLinkArrow from '../../components/BackLinkArrow';
import Button from '../../components/Button';

// Components
import QuizBackground from '../../components/QuizBackground';
import QuizContainer from '../../components/QuizContainer';
import QuizLogo from '../../components/QuizLogo';
import {
  Widget,
  WidgetContent,
  WidgetHeader,
  WidgetTopic,
} from '../../components/Widget';

type dbType = typeof dbModel;
type QuestionProps = typeof dbModel.questions[0];

interface QuizProps {
  db: dbType;
}

interface QuestionWidgetProps {
  question: QuestionProps;
  questionIndex: number;
  totalQuestions: number;
  onSubmit: () => void;
  addResult: (isCorrect: boolean) => void;
}

interface ResultWidgetProps {
  results: boolean[];
}

function LoadingWidget() {
  return (
    <Widget>
      <WidgetHeader>Carregando...</WidgetHeader>

      <WidgetContent>[Desafio do Loading]</WidgetContent>
    </Widget>
  );
}

function ResultWidget({ results }: ResultWidgetProps) {
  return (
    <Widget>
      <WidgetHeader>
        <h3>Fim do Desafio!</h3>
      </WidgetHeader>

      <WidgetContent>
        <p>Você acertou {results.filter(result => result).length} perguntas</p>

        <ul>
          {results.map((result, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <li key={`result__${index}`}>
              #{index < 9 ? `0${index + 1}` : index + 1} Resultado:{' '}
              {result ? 'Acertou!' : 'Errou!'}
            </li>
          ))}
        </ul>
      </WidgetContent>
    </Widget>
  );
}

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}: QuestionWidgetProps) {
  const questionId = `question__${questionIndex}`;
  const [selectedAlternative, setSelectedAlternative] = useState(undefined);
  const [isQuestionSubmited, setIsQuestionSubmited] = useState(false);
  const hasAlternativeSelected = selectedAlternative !== undefined;
  const isCorrect = selectedAlternative === question.answer;

  return (
    <Widget>
      <WidgetHeader>
        <BackLinkArrow href="/" />
        <h3>{`Pergunta ${questionIndex + 1} de ${totalQuestions}`}</h3>
      </WidgetHeader>

      <img
        src={question.image}
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        alt={question.description}
      />

      <WidgetContent>
        <h2>{question.title}</h2>
        <p>{question.description}</p>

        <AlternativesForm
          onSubmit={e => {
            e.preventDefault();
            setIsQuestionSubmited(true);

            setTimeout(() => {
              addResult(isCorrect);
              onSubmit();
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 3 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative__${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;

            return (
              <WidgetTopic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  id={alternativeId}
                  name={questionId}
                  type="radio"
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                />
                {alternative}
              </WidgetTopic>
            );
          })}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            Confirmar
          </Button>
        </AlternativesForm>
      </WidgetContent>
    </Widget>
  );
}

export default function Quiz({ db }: QuizProps) {
  const screenStates = {
    LOADING: 'LOADING',
    QUIZ: 'QUIZ',
    RESULT: 'RESULT',
  };
  const [screenState, setScreenState] = useState(screenStates.LOADING);
  const totalQuestions = db.questions.length;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const question = db.questions[currentQuestion];
  const [results, setResults] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function addResult(result: boolean) {
    setResults([...results, result]);
  }

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
              question={question}
              questionIndex={currentQuestion}
              totalQuestions={totalQuestions}
              onSubmit={handleSubmitQuiz}
              addResult={addResult}
            />
          )}

          {screenState === screenStates.RESULT && (
            <ResultWidget results={results} />
          )}
        </QuizContainer>
      </QuizBackground>
    </>
  );
}
