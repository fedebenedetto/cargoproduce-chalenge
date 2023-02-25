import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  isPlay: boolean = false;
  isHover: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  isPlayed(data: boolean) {
    this.isPlay = data;
    this.hover();
  }

  hover() {
    this.isHover = true
  }

  noHover() {
    this.isHover = false

  }
}
