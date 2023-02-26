import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() task?: Task;
  @ViewChild('inputFisico') txtInputFisico?: ElementRef;

  txtInput: FormControl = new FormControl( this.task?.name, Validators.required );

  editando: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  editar() {

    this.editando = true;
    this.txtInput?.setValue( this.task?.name );

    setTimeout(() => {
      this.txtInputFisico?.nativeElement.select();
    }, 1);

  }

}
