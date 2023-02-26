import { ActionReducerMap } from "@ngrx/store";
import * as reducers from './reducers';




export interface AppState {
    tasks:reducers.TaskState
}



export const appReducers: ActionReducerMap<AppState> = {
    tasks:reducers.taskReducer
}