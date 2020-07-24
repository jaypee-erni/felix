import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-icon-message',
  templateUrl: './icon-message.component.html',
  styleUrls: ['./icon-message.component.scss']
})
export class IconMessageComponent implements OnInit {
  @Input() public className;
  constructor() { }

  ngOnInit() {}

}
