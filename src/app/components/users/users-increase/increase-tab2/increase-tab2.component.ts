import { Component, OnInit } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-increase-tab2',
  templateUrl: './increase-tab2.component.html',
  styleUrls: ['./increase-tab2.component.scss']
})
export class IncreaseTab2Component implements OnInit {

  data: TitleTextModel;
  data2: TitleTextModel;
  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Allgemeines',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.`,
    };
    this.data2 = {
      title: 'Was ist Social Trading?',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.`,
    };
  }

}
