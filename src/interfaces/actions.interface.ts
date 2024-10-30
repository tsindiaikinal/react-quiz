import { EAppStatus } from '../enums/status.enum';

export interface IQuizAction {
  type: string
  payload?: any
  status?: EAppStatus
}
