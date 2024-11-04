import { EAppStatus } from '../enums/status.enum';
import { IQuestions } from './questions.interface';

export interface IQuizState {
  allottedTime: number
  answer: number | null
  index: number
  points: number
  questions: IQuestions[] | []
  highscore: number
  status: EAppStatus
}
