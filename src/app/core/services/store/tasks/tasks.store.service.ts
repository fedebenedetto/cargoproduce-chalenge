import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getTasks } from 'src/app/store/actions';
import { AppState } from 'src/app/store/app.reducers';

@Injectable({
  providedIn: 'root'
})
export class TasksStoreService {


constructor(private store: Store<AppState>) { }

  getTask() {
    this.store.dispatch(getTasks())
  }

  getProperty() {
    return this.store.select('tasks')
  }
}
