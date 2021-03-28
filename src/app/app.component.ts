import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hd-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('showHide', [
      state('show', style({
        opacity: 1,
        display: 'block'
      })),
      state('hide', style({
        opacity: 0,
        display: 'none'
      })),
      transition('hide => show', [
        animate('1s')
      ])
    ])
  ]
})
export class AppComponent implements OnInit{
  title = 'ihdeveloper';

  mode = "terminal";

  ngOnInit(): void {
    setTimeout(() => this.mode = "loading-screen", 2500);
  }
}
