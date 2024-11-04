/* eslint-disable no-unused-vars */
import { IQuizAction } from '../interfaces/actions.interface';

interface IProps {
  answer?: number | null
  index: number
  numQuestions: number
  dispatch: (action: IQuizAction) => void
}

function NextButton({ answer, index, numQuestions, dispatch }: IProps) {
  if (answer === null) {return null;}

  if (index < numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'nextQuestion' })}
      >
        next
      </button>
    );
  }

  if (index === numQuestions - 1) {
    return (
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'finish' })}
      >
        finish
      </button>
    );
  }
}

export default NextButton;
