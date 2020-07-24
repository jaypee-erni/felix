import { Component, OnInit } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-save-tab1',
  templateUrl: './save-tab1.component.html',
  styleUrls: ['./save-tab1.component.scss']
})
export class SaveTab1Component implements OnInit {
  data: TitleTextModel;
  data2: TitleTextModel;
  constructor() {}

  ngOnInit() {
    this.data = {
      title: 'Allgemeines',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
      took a galley of type and scrambled it to make a type specimen book.`,
    };
    this.data2 = {
      title: 'Produkte',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
      unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    };
  }

}
