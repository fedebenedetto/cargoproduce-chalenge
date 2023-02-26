import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as moment from 'moment';
import { MIN30 } from 'src/app/core/constants/constants';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  @Input() valuePaused: number = 0;
  @Output() onPause = new EventEmitter<any>();
  @Output() onFinish = new EventEmitter<boolean>();
  @Output() onTime = new EventEmitter<number>();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';

  timeLeft: number = MIN30; // 30 minutes in seconds
  interval: any = 0;
  value = 0;

  constructor() { }

  ngOnDestroy(): void {
    this.pauseTimer();
  }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    this.timeLeft = this.valuePaused !== 0 ? this.valuePaused : this.timeLeft;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.value = ((MIN30 - this.timeLeft) / MIN30) * 100;
        this.onTime.emit(this.timeLeft);
      } else {
        this.onFinish.emit(true);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pauseTimer() {
    if (this.timeLeft > 0)
      this.onPause.emit(this.timeLeft);
      
    clearInterval(this.interval);
  }

}
