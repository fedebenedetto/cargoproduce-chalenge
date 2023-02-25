import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonPlayComponent } from './components/button-play/button-play.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { TimerComponent } from './components/timer/timer.component';
const COMPONENTS = [
  ButtonPlayComponent,
  SpinnerComponent,
  TimerComponent
]

@NgModule({
  declarations: [
    ...COMPONENTS
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ...COMPONENTS
  ]
})
export class SharedModule { }
