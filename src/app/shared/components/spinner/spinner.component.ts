import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  @ViewChild('loader') loader?: ElementRef;
  @ViewChild('border') border?: ElementRef;

  α = 0;
  π = Math.PI;
  t = 1000;

  constructor() { }

  ngOnInit() {
    this.draw();
  }

  draw() {
    this.α++;
    this.α %= 360;
    const r = ( this.α * this.π / 180 )
      , x = Math.sin( r ) * 125
      , y = Math.cos( r ) * - 125
      , mid = ( this.α > 180 ) ? 1 : 0
      , anim = 'M 0 0 v -125 A 125 125 1 '
             + mid + ' 1 '
             +  x  + ' '
             +  y  + ' z';

    this.loader?.nativeElement.setAttribute( 'd', anim );
    this.border?.nativeElement.setAttribute( 'd', anim );

    setTimeout(() => this.draw(), this.t); // Redraw
  }

}
