import { EAppStatus } from '../enums/status.enum';

export const INITIAL_STATE = {
  allottedTime: 0,
  answer: null,
  index: 0,
  points: 0,
  questions: [],
  highscore: 0,
  status: EAppStatus.loading,
};

export const SECONDS_PER_QUESTION = 30;
