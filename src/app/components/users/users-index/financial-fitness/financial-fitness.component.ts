import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-financial-fitness',
  templateUrl: './financial-fitness.component.html',
  styleUrls: ['./financial-fitness.component.scss']
})
export class FinancialFitnessComponent implements OnInit {

  data: any;
  constructor() { }

  ngOnInit() {

  this.data = [];
  for (let i = 0; i < (8 + Math.floor(Math.random() * 10)); i++) {
    this.data.push([`Index ${i}`, Math.floor(Math.random() * 100)]);
  }
  }

}
