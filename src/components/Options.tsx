import { IQuizAction } from '../interfaces/actions.interface.ts';
import { IQuestions } from '../interfaces/questions.interface.ts';
import Button from './ui/Button.tsx';

interface IProps {
  question: IQuestions
  answer: number | null
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: IQuizAction) => void
}

function Options({ question, answer, dispatch }: IProps) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, idx) => (
        <Button
          className={`
                        btn btn-option
                        ${idx === answer ? 'answer' : ''}
                        ${hasAnswered ? (idx === question.correctOption ? 'correct' : 'wrong') : ''}`}
          disabled={hasAnswered}
          key={idx}
          dispatch={dispatch}
          action={{ type: 'newAnswer', payload: idx }}
        >
          {option}
        </Button>
      ))}
    </div>
  );
}

export default Options;
