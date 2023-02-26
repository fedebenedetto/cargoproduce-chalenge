import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/core/models/task';
import { URL } from '../../configuracion-url';
import { HttpBaseService } from '../http-base/http-base.service';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpSrv: HttpBaseService) { }

  getTasks(): Observable<Task[]> {
    return this.httpSrv.get(URL.TASK);
  }

  getOneTask(id: number): Observable<Task> {
    return this.httpSrv.get(`${URL.TASK}/${id}`)
  }

  postTask(task: Task): Observable<Task> {
    let loTask = task;
    loTask.done = false;
    loTask.timeSpent = 0;
    return this.httpSrv.post(URL.TASK, loTask);
  }

  putTask(task: Task): Observable<Task> {
    return this.httpSrv.put(`${URL.TASK}/${task.id}`, task)
  }
}
