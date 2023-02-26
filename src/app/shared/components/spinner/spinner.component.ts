import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import * as moment from 'moment';

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

  timeLeft: number = 90; // 1.5 minutes in seconds
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
    this.value = this.valuePaused;
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft--;
        this.value = ((90 - this.timeLeft) / 90) * 100; // Update value based on time left
        let time = this.timeLeft; // Format time as minutes and seconds
        this.onTime.emit(time);
      } else {
        this.onFinish.emit(true);
        clearInterval(this.interval);
      }
    }, 1000);
  }

  pauseTimer() {
    this.onPause.emit(this.value);
    clearInterval(this.interval);
  }

}
