import { createAction, props } from '@ngrx/store';
import { Task } from 'src/app/core/models/task';

export const getTasks = createAction('[GetTasks] getTasks');
export const setGetTasksResponse = createAction('[SetGetTasksResponse] setGetTasksResponse', props<{ task: Task[] }>());
export const setGetTasksError = createAction('[SetGetTasksError] setGetTasksError', props<{ error: Error }>());

export const getOneTasks = createAction('[GetTasks] getOneTasks',props<{id:number}>());
export const setGetOneTasksResponse = createAction('[SetGetOneTasksResponse] setGetOneTasksResponse', props<{ task: Task }>());
export const setGetOneTasksError = createAction('[SetGetOneTasksError] setGetOneTasksError', props<{ error: Error }>());

export const postTasks = createAction('[PostTasks] postTasks',props<{task:Task}>());
export const setPostTasksResponse = createAction('[SetPostTasksResponse] setPostTasksResponse', props<{ response:any }>());
export const setPostTasksError = createAction('[SetPostTasksError] setPostTasksError', props<{ error: Error }>());

export const putTasks = createAction('[PutTasks] putTasks',props<{task:Task}>());
export const setPutTasksResponse = createAction('[SetPutTasksResponse] setPutTasksResponse', props<{ response:Task }>());
export const setPutTasksError = createAction('[SetPutTasksError] setPutTasksError', props<{ error: Error }>());