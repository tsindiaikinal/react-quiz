import { useEffect, useReducer } from 'react';

import Header from './components/Header';
import Main from './components/Main';
import Loader from './components/Loader';
import ErrorView from './components/ErrorView';
import StartScreen from './components/StartScreen';
import { statusAppReducer } from './reducers/status-app.reducer';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';
import FinishedScreen from './components/FinishedScreen';
import Timer from './components/Timer';
import Footer from './components/Footer';
import { INITIAL_STATE } from './constants/reducers.constant';

function App() {
  const [state, dispatch] = useReducer(statusAppReducer, INITIAL_STATE);

  const { questions, status, index, answer, points, highscore, allottedTime } = state;
  const numQuestions = questions?.length;
  const maxPossiblePoints = questions.reduce((acc, cur) => acc + cur.points, 0);

  useEffect(() => {
    fetch('http://localhost:8000/questions')
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: 'dataReceived',
          payload: data,
          status: 2,
        });
      })
      .catch((error) => {
        dispatch({
          type: 'dataFailed',
          payload: error?.message,
        });
      });

    return () => {};
  }, []);

  return (
    <div className='app'>
      <Header />
      <Main>
        {status === 1 && <Loader />}
        {status === 0 && <ErrorView />}
        {status === 2 && (
          <StartScreen
            numQuestions={numQuestions}
            dispatch={dispatch}
          />
        )}
        {status === 3 && questions && (
          <>
            <Progress
              index={index + 1}
              numQuestions={numQuestions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answer={answer}
            />
            <Question
              question={questions[index]}
              answer={answer}
              dispatch={dispatch}
            />
          </>
        )}
        {status === 4 &&
        <FinishedScreen
          points={points}
          maxPossiblePoints={maxPossiblePoints}
          highscore={highscore}
          dispatch={dispatch}
        />
        }
      </Main>
      {status === 3 && questions &&
      <Footer>
        <Timer
          dispatch={dispatch}
          allottedTime={allottedTime}
        />
        <NextButton
          answer={answer}
          index={index}
          numQuestions={numQuestions}
          dispatch={dispatch}
        />
      </Footer>
      }
    </div>
  );
}

export default App;
