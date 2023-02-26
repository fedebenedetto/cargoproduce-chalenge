import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { TasksStoreService } from 'src/app/core/services/store/tasks/tasks.store.service';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss']
})
export class TodoHeaderComponent implements OnInit {
  txtInput: FormControl = new FormControl('', Validators.required );

  constructor(private taskSrv:TasksStoreService) { }

  ngOnInit() {
  }

  agregar() {

    if ( this.txtInput.invalid ) { return; }
    
    this.taskSrv.postTask({name:this.txtInput.value,done:false})

    this.txtInput.reset();
  }
}
