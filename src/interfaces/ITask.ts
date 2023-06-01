import type IProject from "./IProject";

export default interface ITask {
  timeInSecs: number,
  description: string,
  project: IProject
}