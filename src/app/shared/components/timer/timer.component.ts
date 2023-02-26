import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  @Output() onFinish = new EventEmitter<any>();
  @Output() onPaused = new EventEmitter<any>();
  @Output() onClick = new EventEmitter<boolean>();

  @Input() valuePaused: number = 0;
  isPlay: boolean = false;
  isHover: boolean = false;
  timeElapsed: number = 0;
  constructor() { }

  ngOnInit() {
  }

  isPlayed(data: boolean) {
    this.isPlay = data;
    this.onClick.emit(this.isPlay)
  }

  hover() {
    this.isHover = true
  }

  noHover() {
    this.isHover = false

  }

  getInterval(data: any) {
    this.onPaused.emit(data);
  }

  getFinish(data: boolean) {
    this.onFinish.emit(data)
  }

  getTime(data: number) {
    this.timeElapsed = data;
  }
}
