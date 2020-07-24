import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title-text',
  templateUrl: './title-text.component.html',
  styleUrls: ['./title-text.component.scss']
})
export class TitleTextComponent implements OnInit {

  @Input() public data;

  constructor() { }

  ngOnInit() {}

}
