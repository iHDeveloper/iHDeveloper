import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hd-lang',
  templateUrl: './lang.component.html',
  styleUrls: ['./lang.component.scss']
})
export class LangComponent implements OnInit {
  @Input('lang') lang = "Unknown";
  @Input('year') year = "1990";

  constructor() { }

  ngOnInit(): void {
  }

}
