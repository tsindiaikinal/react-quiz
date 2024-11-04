import { EAppStatus } from '../enums/status.enum';

export interface IQuizAction {
  type: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any
  status?: EAppStatus
}
