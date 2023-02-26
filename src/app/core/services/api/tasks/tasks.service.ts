import { Injectable } from '@angular/core';
import { Task } from 'src/app/core/models/task';
import { URL } from '../../configuracion-url';
import { HttpBaseService } from '../http-base/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpSrv: HttpBaseService) { }

  getTasks() {
    return this.httpSrv.get(URL.TASK);
  }

  postTask(task: Task) {
    let loTask = task;
    loTask.done = false;
    loTask.timeSpent = 0;
    return this.httpSrv.post(URL.TASK, loTask);
  }

  putTask(task: Task) {
    return this.httpSrv.put(`${URL.TASK}/${task.id}`, task)
  }
}
