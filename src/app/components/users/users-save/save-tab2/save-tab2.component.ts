import { Component, OnInit } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';
import { getDataLine } from '../../../../shared/models/general/d3data.model';

@Component({
  selector: 'app-save-tab2',
  templateUrl: './save-tab2.component.html',
  styleUrls: ['./save-tab2.component.scss']
})
export class SaveTab2Component implements OnInit {
  data: TitleTextModel;
  dataGraph: any[] = getDataLine();
  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Deine Kostenprognose 2020',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
       unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    };
  }

}
