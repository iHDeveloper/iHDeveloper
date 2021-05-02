import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'hd-award',
  templateUrl: './award.component.html',
  styleUrls: ['./award.component.scss']
})
export class AwardComponent implements OnInit {
  @Input('month') month = "March";
  @Input('img') img = 'texture/question-mark-2d.png';

  constructor() { }

  ngOnInit(): void {
  }

}
