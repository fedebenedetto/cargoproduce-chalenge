import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonPlayComponent } from './components/button-play/button-play.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

const COMPONENTS = [
  ButtonPlayComponent,
  SpinnerComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
