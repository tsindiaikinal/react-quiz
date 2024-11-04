import { INITIAL_STATE, SECONDS_PER_QUESTION } from '../constants/reducers.constant';
import { IQuizAction } from '../interfaces/actions.interface';
import { IQuizState } from '../interfaces/states.interface';

export function statusAppReducer(
  state: IQuizState,
  action: IQuizAction,
): IQuizState {

  switch (action?.type) {
  case 'dataReceived':
    return { ...state, questions: action.payload, status: 2 };

  case 'dataFailed':
    return { ...state, status: 0 };

  case 'quizStart': {
    return { ...state, status: 3, allottedTime: state.questions.length * SECONDS_PER_QUESTION };
  }

  case 'newAnswer': {
    const { correctOption, points } = state.questions[state.index];
    const quantity =
        action.payload === correctOption ? state.points + points : state.points;

    return { ...state, answer: action.payload, points: quantity };
  }

  case 'nextQuestion':
    return { ...state, index: state.index + 1, answer: null };

  case 'finish':
    return { ...state, status: 4, highscore: state.points > state.highscore ? state.points : state.highscore };

  case 'restart':
    return { ...state, ...INITIAL_STATE, questions: state.questions, status: 2 };

  case 'tick':
    return { ...state, allottedTime: state.allottedTime - 1, status: state.allottedTime === 0 ? 4 : state.status };

  default:
    throw new Error('Unknown action');
  }
}
