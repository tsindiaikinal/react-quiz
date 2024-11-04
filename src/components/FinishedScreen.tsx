import { IQuizAction } from '../interfaces/actions.interface';
import Button from './ui/Button';

interface IProps {
  points?: number
  maxPossiblePoints?: number
  highscore?: number
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: IQuizAction) => void
}

function FinishedScreen({ points = 0, maxPossiblePoints = 0, highscore, dispatch }: IProps) {
  if (!maxPossiblePoints) {return <></>;}

  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;

  if (percentage === 100) {emoji = '🥇';}

  if (percentage >= 80 && percentage < 100) {emoji = '🎉';}

  if (percentage >= 50 && percentage < 80) {emoji = '🙃';}

  if (percentage >= 0 && percentage < 50) {emoji = '🤨';}

  if (percentage === 0) {emoji = '🤦‍♂️';}

  return (
    <>
      <p className='result'>
        <span>{emoji}</span>
        You scored <strong>{points}</strong> out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
      </p>
      <p className='highscore'>(Highscore: {highscore} points)</p>
      <Button
        className='btn btn-ui'
        dispatch={dispatch}
        action={{ type: 'restart' }}
      >
        Restart quiz
      </Button>
    </>
  );
}

export default FinishedScreen;
