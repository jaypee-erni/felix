import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TitleTextModel, DataProductModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-paymet-tab1',
  templateUrl: './paymet-tab1.component.html',
  styleUrls: ['./paymet-tab1.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PaymetTab1Component implements OnInit {
  data: TitleTextModel;
  data2: TitleTextModel;
  dataProduct: DataProductModel;

  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Allgemeines',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.`,
    };
    this.data2 = {
      title: 'Peer-Vergleich',
      content: `Gleichaltrige mit einem ahnlichen Zahlungsverhalten wie du nutzen [Product X], da herimit [Vorteil]`,
    };
    this.dataProduct = {
      title: 'Produkte',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown
      printer took a galley of type and scrambled it to make a type specimen book.`,
      products: [
        {title: 'Product1', content: '[Bild Product 1]'},
        {title: 'Product2', content: '[Bild Product 1]'}
      ]
    };
  }

}
