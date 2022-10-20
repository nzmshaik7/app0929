import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Difficulty } from '../difficulty';
import { QuestionInterface } from '../question-interface';

@Component({
  selector: 'app-trivia-question-form',
  templateUrl: './trivia-question-form.component.html',
  styleUrls: ['./trivia-question-form.component.css']
})
export class TriviaQuestionFormComponent implements OnInit {

  constructor() { }

  @Input() question: QuestionInterface = {} as QuestionInterface;
  @Input() ipDifficulty: string = '';

  @Output() sendAnswer = new EventEmitter<QuestionInterface>();


  ngOnInit(): void {
  }

  submitAnswer(ans: NgForm): void {
    this.question.answerSelected = ans.form.value.answerSelected;
    this.sendAnswer.emit(this.question);
  }
  submitAnswerTwo(choice: string): void {
    this.question.answerSelected = choice;
    this.sendAnswer.emit(this.question);
  }

}
