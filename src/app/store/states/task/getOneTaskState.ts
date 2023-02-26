import { Task } from "src/app/core/models/task";
import { BaseState } from "../base.state";

export interface GetOneTaskState extends BaseState{
    task?:Task
}
