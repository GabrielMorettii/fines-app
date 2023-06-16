import { InitSessionDTO } from './InitSessionDTO'

export interface ISessionContext {
  closeSession: () => void
  initSession: (data: InitSessionDTO) => void
}
