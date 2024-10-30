import { useEffect, useReducer } from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { IQuizState } from './interfaces/states.interface';
import { EAppStatus } from './enums/status.enum';
import Loader from './components/Loader';
import ErrorView from './components/ErrorView';
import StartScreen from './components/StartScreen';
import { statusAppReducer } from './reducers/status-app.reducer';
import Question from './components/Question';
import NextButton from './components/NextButton';
import Progress from './components/Progress';

const initialState: IQuizState = {
  questions: [],
  status: EAppStatus.loading,
  index: 0,
  answer: null,
  points: 0,
};

function App() {
  const [state, dispatch] = useReducer(statusAppReducer, initialState);

  const { questions, status, index, answer, points } = state;
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
        <NextButton
          dispatch={dispatch}
          answer={answer}
        />
      </Main>
    </div>
  );
}

export default App;
