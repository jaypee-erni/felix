import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-product-block',
  templateUrl: './product-block.component.html',
  styleUrls: ['./product-block.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductBlockComponent implements OnInit {

  @Input() public data;
  constructor() { }

  ngOnInit() {
  }

}
