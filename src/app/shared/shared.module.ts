import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonPlayComponent } from './components/button-play/button-play.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'
import { TimerComponent } from './components/timer/timer.component';
import { ToTimePipe } from './pipes/toTime.pipe';

const COMPONENTS = [
  ButtonPlayComponent,
  SpinnerComponent,
  TimerComponent
]

const PIPES = [
  ToTimePipe
]

@NgModule({
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ],
  imports: [
    CommonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule { }
