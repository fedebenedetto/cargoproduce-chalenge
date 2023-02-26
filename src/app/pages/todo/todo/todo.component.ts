import { Component, OnInit } from '@angular/core';
import { TasksStoreService } from 'src/app/core/services/store/tasks/tasks.store.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private taskSrv:TasksStoreService) { }

  ngOnInit() {
    this.taskSrv.getTask()
  }


}
