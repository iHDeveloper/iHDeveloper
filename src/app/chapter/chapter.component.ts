import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hd-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.scss']
})
export class ChapterComponent implements OnInit {
  @Input('year') year = "2003";
  @Input('num') num = 1;
  @Input('title') title = "Unknown Title";

  constructor() { }

  ngOnInit(): void {
  }

}
