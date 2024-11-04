import { IQuizAction } from '../interfaces/actions.interface';
import Button from './ui/Button';

interface IProps {
  numQuestions: number | undefined
  // eslint-disable-next-line no-unused-vars
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
      <Button
        className='btn btn-ui'
        dispatch={dispatch}
        action={{ type: 'quizStart' }}
      >
        Let's start!
      </Button>
    </div>
  );
}

export default StartScreen;
