import { Task } from "src/app/core/models/task";
import { BaseState } from "../base.state";

export interface GetTaskState extends BaseState {
    getTastResponse?:Task[]
}
