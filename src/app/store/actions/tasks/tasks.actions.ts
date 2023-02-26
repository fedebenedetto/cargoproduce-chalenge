import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/core/models/task';

export const getTasks = createAction('[GetTasks] getTasks');
export const setGetTasksResponse = createAction('[SetGetTasksResponse] setGetTasksResponse', props<{ task: Task[] }>());
export const setGetTasksError = createAction('[SetGetTasksError] setGetTasksError', props<{ error: Error }>());