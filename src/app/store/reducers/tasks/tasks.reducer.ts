import { createReducer, on } from '@ngrx/store';
import { getTasks, postTasks, putTasks, setGetTasksError, setGetTasksResponse, setPostTasksError, setPostTasksResponse, setPutTasksError, setPutTasksResponse } from '../../actions';
import { GetTaskState } from '../../states/task/getTask.state';
import { PostTaskState } from '../../states/task/postTask.state';
import { PutTaskSate } from '../../states/task/putTask.state';

export interface TaskState {
    getTaskState: GetTaskState;
    postTaskState: PostTaskState,
    putTaskState: PutTaskSate
}

export const initialTaskState: TaskState = {
    getTaskState: { state: 'EMPTY', getTastResponse: undefined, error: null },
    putTaskState: { state: 'EMPTY', response: undefined, error: null },
    postTaskState: { state: 'EMPTY', response: undefined, error: null }

}

const _taskReducer = createReducer(initialTaskState,

    on(getTasks, state => ({
        ...state,
        getTaskState: { state: 'LOADING' }
    })),

    on(setGetTasksResponse, (state, { task }) => ({
        ...state,
        getTaskState: { state: 'SUCCESS', getTastResponse: task }
    })),

    on(setGetTasksError, (state, { error }) => ({
        ...state,
        getTaskState: { state: 'ERROR', getTastResponse: undefined, error }
    })),

    on(postTasks, state => ({
        ...state,
        postTaskState: { state: 'LOADING' }
    })),

    on(setPostTasksResponse, (state, { response }) => ({
        ...state,
        postTaskState: { state: 'SUCCESS', response }
    })),

    on(setPostTasksError, (state, { error }) => ({
        ...state,
        postTaskState: { state: 'ERROR', error }
    })),


    on(putTasks, state => ({
        ...state,
        putTaskState: { state: 'LOADING' }
    })),

    on(setPutTasksResponse, (state, { response }) => ({
        ...state,
        putTaskState: { state: 'SUCCESS', response }
    })),

    on(setPutTasksError, (state, { error }) => ({
        ...state,
        putTaskState: { state: 'ERROR', error }
    })),
);

export function taskReducer(state: any, action: any) {
    return _taskReducer(state, action);
}