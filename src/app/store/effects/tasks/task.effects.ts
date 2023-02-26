import { Injectable } from "@angular/core";
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, repeat, switchMap } from 'rxjs/operators';
import { Task } from "src/app/core/models/task";
import { TasksService } from "src/app/core/services/api/tasks/tasks.service";

import * as taskActions from '../../actions/tasks/tasks.actions'
@Injectable()
export class TaskEffects {

    constructor(private actions: Actions, private taskSrv: TasksService) {
    }


    getTasks$ = createEffect(() => this.actions.pipe(
        ofType(taskActions.getTasks),
        switchMap(() => this.taskSrv.getTasks()),
        map(response => taskActions.setGetTasksResponse({ task: response! as Task[] })),
        catchError(error => of(taskActions.setGetTasksError({ error }))),
        repeat()));

    getOneTasks$ = createEffect(() => this.actions.pipe(
        ofType(taskActions.getOneTasks),
        switchMap(request => this.taskSrv.getOneTask(request.id)),
        map(response => taskActions.setGetOneTasksResponse({ task: response! })),
        catchError(error => of(taskActions.setGetOneTasksError({ error }))),
        repeat()));

    PostTasks$ = createEffect(() => this.actions.pipe(
        ofType(taskActions.postTasks),
        switchMap(request => this.taskSrv.postTask(request.task)),
        switchMap(response => of(taskActions.setPostTasksResponse({ response }), taskActions.getTasks())),
        catchError(error => of(taskActions.setPostTasksError({ error }))),
        repeat()));

    putTasks$ = createEffect(() => this.actions.pipe(
        ofType(taskActions.putTasks),
        switchMap(request => this.taskSrv.putTask(request.task)),
        switchMap(response => of(taskActions.setPutTasksResponse({ response }), taskActions.getTasks())),
        catchError(error => of(taskActions.setPutTasksError({ error }))),
        repeat()));

}
