import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from 'src/app/core/models/task';
import { getTasks, postTasks, putTasks } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {


  constructor(private store: Store<AppState>) { }

  getTask() {
    this.store.dispatch(getTasks())
  }

  postTask(task: Task) {
    this.store.dispatch(postTasks({ task }))
  }

  putTask(task: Task) {
    this.store.dispatch(putTasks({ task }))
  }
  getProperty() {
    return this.store.select('tasks')
  }
}
