import { useEffect } from 'react';

import { IQuizAction } from '../interfaces/actions.interface';

interface IProps {
  allottedTime: number
  // eslint-disable-next-line no-unused-vars
  dispatch: (action: IQuizAction) => void
}

function Timer({ allottedTime, dispatch }: IProps) {
  const mins = Math.floor(allottedTime / 60);
  const seconds = allottedTime % 60;

  useEffect(() => {
    const intervalID = setInterval(() => {
      dispatch({ type: 'tick' });
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };

  }, [dispatch]);

  return (
    <div className='timer'>
      {mins < 10 && '0'}{mins}:{seconds < 10 && '0'}{seconds}
    </div>
  );
}

export default Timer;
