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
  case 'quizStart':
    return { ...state, status: 3 };

  case 'newAnswer': {
    const { correctOption, points } = state.questions[state.index];
    const quantity =
        action.payload === correctOption ? state.points + points : state.points;

    return { ...state, answer: action.payload, points: quantity };
  }

  case 'nextQuestion':
    return { ...state, index: state.index + 1, answer: null };

  case 'prevQuestion':
    return { ...state, index: state.index - 1 };

  default:
    throw new Error('Unknown action');
  }
}
