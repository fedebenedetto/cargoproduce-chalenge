import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoFooterComponent } from './components/todo-footer/todo-footer.component';
import { TodoHeaderComponent } from './components/todo-header/todo-header.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';

const COMPONENTS = [
  TodoComponent,
  TodoFooterComponent,
  TodoHeaderComponent,
  TodoItemComponent,
  TodoListComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
