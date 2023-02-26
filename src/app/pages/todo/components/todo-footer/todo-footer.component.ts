import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TasksStoreService } from 'src/app/core/services/store/tasks/tasks.store.service';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.scss']
})
export class TodoFooterComponent implements OnInit, OnDestroy {

  pendientes: number = 0;

  taskSusc = new Subscription();
  constructor(private taskSrv:TasksStoreService) { }

  ngOnDestroy(): void {
    this.taskSusc.unsubscribe();
  }

  ngOnInit() {
    this.getTask();
  }

getTask(){
  this.taskSusc = this.taskSrv.getProperty().subscribe(({getTaskState})=>{
    if (getTaskState.state === 'SUCCESS') {
      this.pendientes = getTaskState.getTastResponse?.filter(task=> !task.done).length!
    }
  })
}

}
