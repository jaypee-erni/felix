import { Component, OnInit } from '@angular/core';
import { TitleTextModel, QuizContentModel } from '../../../../shared/models/general/shared-component.model';

@Component({
  selector: 'app-increase-tab4',
  templateUrl: './increase-tab4.component.html',
  styleUrls: ['./increase-tab4.component.scss']
})
export class IncreaseTab4Component implements OnInit {

  data: TitleTextModel;
  quiz: QuizContentModel;
  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Quiz Financial Fitness zum Thema Geld arbeitet',
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
