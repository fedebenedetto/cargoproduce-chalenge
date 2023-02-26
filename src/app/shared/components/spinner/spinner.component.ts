import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit, OnDestroy {

  @Input() valuePaused: number = 0;
  @Output() onPause = new EventEmitter<any>();
  @Output() onFinish = new EventEmitter<boolean>();
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'determinate';

  time: number = 0.1;
  interval: any;
  value = 0;

  constructor() { }

  ngOnDestroy(): void {
    this.pauseTimer();
  }


  ngOnInit() {
    this.startTimer()
  }

  startTimer() {
    this.value = this.valuePaused;
    this.interval = setInterval(() => {
      if (this.value < 100) {
        this.value++;
      } else {
        this.onFinish.emit(true)
        clearInterval(this.interval);
      }
    }, this.time * 1000)
  }

  pauseTimer() {
    this.onPause.emit(this.value);
    clearInterval(this.interval);
  }
}
