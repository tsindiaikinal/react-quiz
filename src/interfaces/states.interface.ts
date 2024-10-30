import { EAppStatus } from '../enums/status.enum';
import { IQuestions } from './questions.interface';

export interface IQuizState {
  questions: IQuestions[] | []
  status: EAppStatus
  index: number
  answer: number | null
  points: number
}
