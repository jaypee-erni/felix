import { Component, OnInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { TitleTextModel } from '../../../../shared/models/general/shared-component.model';
import { CustomAnimations } from '../../../../shared/animations';

@Component({
  selector: 'app-ausgaben',
  templateUrl: './ausgaben.component.html',
  styleUrls: ['./ausgaben.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: CustomAnimations.animations
})
export class AusgabenComponent implements OnInit {

  @ViewChild('page1', null) private page1: ElementRef;
  @ViewChild('page2', null) private page2: ElementRef;
  @ViewChild('page3', null) private page3: ElementRef;
  data: any[];
  data2: any[];
  smallcol: {};
  currentPage = 1;
  titleD: TitleTextModel;
  titleD2: TitleTextModel;
  titleD3: TitleTextModel;
  bottomright1: TitleTextModel;
  bottomright2: TitleTextModel;
  bottomright3: TitleTextModel;
  currentPage1 = 'active';
  currentPage2 = 'inactive';
  currentPage3 = 'inactive';

  page = 1;
  toggle = false;
  step: any;

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
    this.titleD2 = {
      title: 'Top 3 Vergleich 2',
      content: '',
    };
    this.titleD3 = {
      title: 'Top 3 Vergleich 3',
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
    this.page1.nativeElement.style.display = 'flex';
    this.page2.nativeElement.style.display = 'none';
    this.page3.nativeElement.style.display = 'none';
  }

  togglePage(p: any, p2: any = null) {
    if (p !== null) {
      this.currentPage = p.value;
    } else {
      if (p2 === "+" && this.currentPage < 3) {
        this.currentPage++;
      } else if (p2 === "-" && this.currentPage > 1) {
        this.currentPage--;
      }
    }
    
    this.currentPage1 = (this.currentPage === 1 ? 'active' : 'inactive');
    this.currentPage2 = (this.currentPage === 2 ? 'active' : 'inactive');
    this.currentPage3 = (this.currentPage === 3 ? 'active' : 'inactive');

    this.page1.nativeElement.style.display = 'none';
    this.page2.nativeElement.style.display = 'none';
    this.page3.nativeElement.style.display = 'none';
    if (this.currentPage === 2) {
      this.page2.nativeElement.style.display = 'flex';
    }
    if (this.currentPage === 1) {
      this.page1.nativeElement.style.display = 'flex';
    }
    if (this.currentPage === 3) {
      this.page3.nativeElement.style.display = 'flex';
    }

    console.log(this.currentPage, this.currentPage1);
  }

}
