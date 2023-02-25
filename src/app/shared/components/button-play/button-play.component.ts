import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-play',
  templateUrl: './button-play.component.html',
  styleUrls: ['./button-play.component.scss']
})
export class ButtonPlayComponent implements OnInit {

  isPlay:boolean = true;
  constructor() { }

  ngOnInit() {
  }

  onClick(){
    this.isPlay = !this.isPlay;
  }
}
