import { createReducer, on } from '@ngrx/store';
import { getTasks, setGetTasksError, setGetTasksResponse } from '../../actions';
import { GetTaskState } from '../../states/task/getTask.state';

export interface TaskState {
    getTaskState: GetTaskState;
}

export const initialTaskState: TaskState = {
    getTaskState: { state: 'EMPTY', getTastResponse: undefined, error: null },
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
);

export function taskReducer(state: any, action: any) {
    return _taskReducer(state, action);
}