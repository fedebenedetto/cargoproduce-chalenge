import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MIN30 } from 'src/app/core/constants/constants';
import { Task } from 'src/app/core/models/task';
import { TasksStoreService } from 'src/app/core/services/store/tasks/tasks.store.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task?: Task;
  @ViewChild('inputFisico') txtInputFisico?: ElementRef;

  txtInput: FormControl = new FormControl(this.task?.name, Validators.required);

  editando: boolean = false;

  timeUsed: number = 0;

  isPaused: boolean = false;

  constructor(private taskSrv: TasksStoreService) { }

  ngOnInit() {
    this.timeUsed = this.task?.timeSpent === 0 ? 0 : MIN30 - this.task?.timeSpent!;
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
    this.taskSrv.putTask({ id: this.task?.id, done: true, name: this.task?.name })
  }

  getOnClick(data: boolean) {
    this.isPaused = data;
  }

  getPaused(data: number) {
    this.taskSrv.putTask({ id: this.task?.id, timeSpent: data, name: this.task?.name, done: false })

  }
}
