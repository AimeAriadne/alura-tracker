export enum notifyType {
  INFO,
  SUCCESS,
  WARNING,
  DANGER
}

export interface INotify {
  title: string,
  text: string,
  type: notifyType,
  id: number
}