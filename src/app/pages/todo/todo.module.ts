import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const COMPONENTS = [
  TodoComponent,
  TodoFooterComponent,
  TodoHeaderComponent,
  TodoItemComponent,
  TodoListComponent
]

const MODULES = [
  CommonModule,
  TodoRoutingModule,
  SharedModule,
  ReactiveFormsModule,
  FormsModule
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    ...MODULES
  ]
})
export class TodoModule { }
