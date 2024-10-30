import { IQuizAction } from '../interfaces/actions.interface.ts';
import { IQuestions } from '../interfaces/questions.interface.ts';

interface IProps {
  question: IQuestions
  answer: number | null
  dispatch: (action: IQuizAction) => void
}

function Options({ question, answer, dispatch }: IProps) {
  const hasAnswered = answer !== null;

  return (
    <div className='options'>
      {question.options.map((option, idx) => (
        <button
          className={`
                        btn btn-option 
                        ${idx === answer ? 'answer' : ''} 
                        ${hasAnswered ? (idx === question.correctOption ? 'correct' : 'wrong') : ''}`}
          disabled={hasAnswered}
          key={idx}
          onClick={() => dispatch({ type: 'newAnswer', payload: idx })}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

export default Options;
