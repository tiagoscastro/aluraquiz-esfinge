import db from '../../../db.json';
import Quiz from '../../screens/Quiz';

export default function QuizPage() {
  return <Quiz db={db} />;
}
