import { Component, OnInit } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-financial-fitness',
  templateUrl: './financial-fitness.component.html',
  styleUrls: ['./financial-fitness.component.scss'],
})
export class FinancialFitnessComponent implements OnInit {

  data: any;
  smallcol: TitleTextModel;
  constructor() { }

  ngOnInit() {
    this.smallcol = {
      title: 'Deine Financial Fitness',
      content: '',
    };
  }

}
