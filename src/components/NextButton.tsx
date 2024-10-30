/* eslint-disable no-unused-vars */
import { IQuizAction } from '../interfaces/actions.interface';

interface IProps {
  answer?: number | null
  dispatch: (action: IQuizAction) => void
}

function NextButton({ answer, dispatch }: IProps) {
  if (answer === null) {
    return null;
  }

  return (
    <button
      className='btn btn-ui'
      onClick={() => dispatch({ type: 'nextQuestion' })}
    >
      next
    </button>
  );
}

export default NextButton;
