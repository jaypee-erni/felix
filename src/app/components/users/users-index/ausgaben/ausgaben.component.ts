import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-ausgaben',
  templateUrl: './ausgaben.component.html',
  styleUrls: ['./ausgaben.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AusgabenComponent implements OnInit {

  data: any[];
  data2: any[];
  smallcol: {};
  titleD: TitleTextModel;
  bottomright1: TitleTextModel;
  bottomright2: TitleTextModel;
  bottomright3: TitleTextModel;
  constructor() { }

  ngOnInit() {
    this.data = [];
    this.data2 = [];
    this.smallcol = {
      title: 'Du Sparfuchs',
      content: '',
    };
    this.titleD = {
      title: 'Top 3 Ausgaben',
      content: '',
    };
    this.bottomright1 = {
      title: 'Du hast',
      content: '',
    };
    this.bottomright2 = {
      title: '3kg CO2',
      content: '',
    };
    this.bottomright3 = {
      title: 'gespart',
      content: '',
    };

    for (let i = 0; i < 3; i++) {
      this.data.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
      this.data2.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
    }
  }

}
