import { Component, OnInit } from '@angular/core';
import { TitleTextModel, QuizContentModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-paymet-tab3',
  templateUrl: './paymet-tab3.component.html',
  styleUrls: ['./paymet-tab3.component.scss']
})
export class PaymetTab3Component implements OnInit {

  data: TitleTextModel;
  quiz: QuizContentModel;
  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Quiz Financial Fitness zum Thema Zahlungsmittel',
      content: `Mit der korrekten Beantwortung der folgenden Aufgaben kannst du deinen Financial Fitness-Score erhohen`,
    };
    this.quiz = {
      title: '[Thema]',
      subtitle: '[Auggabentext]',
      data: [
        {value: 1, name: '[Antwort-Option 1]'},
        {value: 2, name: '[Antwort-Option 2]'},
        {value: 3, name: '[Antwort-Option 3]'},
        {value: 4, name: '[Antwort-Option 4]'}
      ]
    };
  }

}
