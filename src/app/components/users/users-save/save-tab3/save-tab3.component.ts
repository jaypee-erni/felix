import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TitleTextModel, QuizContentModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-save-tab3',
  templateUrl: './save-tab3.component.html',
  styleUrls: ['./save-tab3.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SaveTab3Component implements OnInit {

  options = [];
  optSlected = '';
  optSlected2 = '';
  data: TitleTextModel;
  quiz: QuizContentModel;

  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Quiz Financial Fitness zum Thema Sparen',
      content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
      when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    };
    this.quiz = {
      title: '[Lorem Ipsum]',
      subtitle: '[Pick your favorite season]',
      data: [
        {value: 1, name: '[Antwort-Option 1]'},
        {value: 2, name: '[Antwort-Option 2]'},
        {value: 3, name: '[Antwort-Option 3]'},
        {value: 4, name: '[Antwort-Option 4]'}
      ]
    };
  }

}
