import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-play',
  templateUrl: './button-play.component.html',
  styleUrls: ['./button-play.component.scss']
})
export class ButtonPlayComponent implements OnInit {

  isPlay: boolean = false;
  @Output() onPlay = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    this.isPlay = !this.isPlay;
    this.onPlay.emit(this.isPlay);
  }
}
