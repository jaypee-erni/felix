import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TitleTextComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {}

}
