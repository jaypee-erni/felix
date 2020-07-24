import { Component, OnInit } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-increase-tab1',
  templateUrl: './increase-tab1.component.html',
  styleUrls: ['./increase-tab1.component.scss']
})
export class IncreaseTab1Component implements OnInit {

  data: TitleTextModel;
  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Allgemeines',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.`,
    };
  }

}
