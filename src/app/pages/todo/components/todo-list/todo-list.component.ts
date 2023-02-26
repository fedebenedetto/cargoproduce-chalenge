import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/core/models/task';
import { TasksStoreService } from 'src/app/core/services/store/tasks/tasks.store.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit, OnDestroy {

  tasks?: Task[];
  todos?: any[];
  taskSusc = new Subscription();
  constructor(private taskSrv: TasksStoreService) { }
  ngOnDestroy(): void {
    this.taskSusc.unsubscribe();
  }

  ngOnInit() {
    this.getTask()
  }

  getTask() {
    let loTask: any;
    this.taskSusc = this.taskSrv.getProperty().subscribe(({ getTaskState }) => {
      if (getTaskState.state === 'LOADING') {
        loTask = null
      }
      if (getTaskState.state === 'SUCCESS' && !loTask) {
        loTask = getTaskState.getTastResponse;
        this.tasks = getTaskState?.getTastResponse;
        this.todos = this.tasks?.map(task => {
          return {
            ...task,
            buttonEnabled: false
          }
        })
      }
    })
  }
}
