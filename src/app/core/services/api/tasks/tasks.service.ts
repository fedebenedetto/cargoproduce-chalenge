import { Injectable } from '@angular/core';
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
}
