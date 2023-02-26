import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {


  @Output() onFinish = new EventEmitter<any>();


  isPlay: boolean = false;
  isHover: boolean = false;
  interval:number = 0;
  constructor() { }

  ngOnInit() {
  }

  isPlayed(data: boolean) {
    this.isPlay = data;
  }

  hover() {
    this.isHover = true
  }

  noHover() {
    this.isHover = false

  }

  getInterval(data:any){
    this.interval = data;
  }

  getValue(){
    return this.interval;
  }

  getFinish(data:boolean){
    this.onFinish.emit(data)
  }
}
