import { IQuizAction } from '../interfaces/actions.interface';
import { IQuestions } from '../interfaces/questions.interface';
import Options from './Options';

interface IProps {
  question: IQuestions
  answer: number | null
  dispatch: (action: IQuizAction) => void
}

function Question({ question, answer, dispatch }: IProps) {
  return (
    <div>
      <h4>{question.question}</h4>
      <Options
        question={question}
        answer={answer}
        dispatch={dispatch}
      />
    </div>
  );
}

export default Question;