import { IQuizAction } from '../interfaces/actions.interface';

interface IProps {
  numQuestions: number | undefined
  dispatch: (action: IQuizAction) => void
}

function StartScreen({ numQuestions, dispatch }: IProps) {
  if (!numQuestions) {
    return <></>;
  }

  return (
    <div className='start'>
      <h2>Welcome to The React Quiz!</h2>
      <h3>{numQuestions} questions to test your react mastery</h3>
      <button
        className='btn btn-ui'
        onClick={() => dispatch({ type: 'quizStart' })}
      >
        Let's start!
      </button>
    </div>
  );
}

export default StartScreen;
