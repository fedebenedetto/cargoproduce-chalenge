import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/core/models/task';
import { TasksStoreService } from 'src/app/core/services/store/tasks/tasks.store.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task?: any;
  @ViewChild('inputFisico') txtInputFisico?: ElementRef;

  txtInput: FormControl = new FormControl(this.task?.name, Validators.required);

  editando: boolean = false;

  constructor(private taskSrv: TasksStoreService) { }

  ngOnInit() {
  }

  editar() {

    this.editando = true;
    this.txtInput?.setValue(this.task?.name);

    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;

    if (this.txtInput.invalid) { return; }
    if (this.txtInput.value === this.task?.name) { return; }

    this.taskSrv.putTask({ id: this.task?.id, name: this.txtInput.value })

  }

  getFinish(data: boolean) {
    this.taskSrv.putTask({ id: this.task?.id, done: data , name: this.task?.name })
  }

  getOnClick(data:boolean){
    this.task.buttonEnabled = data;
  }
}
