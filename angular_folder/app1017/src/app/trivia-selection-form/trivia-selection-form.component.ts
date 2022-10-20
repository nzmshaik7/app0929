import { asNativeElements, Component, Directive, OnInit } from '@angular/core';
import { Categories } from '../categories';
import { Difficulty } from '../difficulty';
import { TriviaInterface } from '../trivia-interface';
import { NgForm } from '@angular/forms';
import { TriviaService } from '../trivia.service';
import { QuestionInterface } from '../question-interface';
import { Observable, of, single } from 'rxjs';
import { AnswerInterface } from '../answer-interface';
import { UserInterface } from '../user-interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-trivia-selection-form',
  templateUrl: './trivia-selection-form.component.html',
  styleUrls: ['./trivia-selection-form.component.css']
})
export class TriviaSelectionFormComponent implements OnInit {

  constructor(
    private triviaService : TriviaService,
    private route: ActivatedRoute,
    private router:Router
  ) { }
  
  public enumCategories = Categories;
  public enumDifficulties = Difficulty;
  enumKeys = Object.keys;
  triviaRecord: TriviaInterface = {} as TriviaInterface;

  questionsLoaded: boolean = false;
  triviaQuestions: QuestionInterface[] = [] as QuestionInterface[];
  triviaAnswers: AnswerInterface[] = [] as AnswerInterface[];
  allQuestionsAnswered: boolean = false;
  userDetailsEntered: boolean = false;

  userDetailsForm: UserInterface = {
    username: '',
    totalScore: 0,
    totalQuestionsAnswered: 0,
    cummulativePoints: 0
  } as UserInterface;

  ngOnInit(): void {
  }

  getTriviaQuestions(triviaForm: NgForm): void{
    let triviaSelection: TriviaInterface = {
      difficultyLevel: triviaForm.form.value.difficulty,
      category: triviaForm.form.value.category
    }
    this.triviaRecord.difficultyLevel = triviaForm.form.value.difficulty;
    this.triviaRecord.category = triviaForm.form.value.category;
    this.triviaService.getTriviaQuestions(triviaSelection).subscribe(
      (result) =>  {
        let loadAnswers:AnswerInterface[] = [] as AnswerInterface[];
        let loadQuestions:QuestionInterface[] = [] as QuestionInterface[];

        result.forEach( (ans:any) => {
          let singleAnswer:AnswerInterface= {} as AnswerInterface;
          let singleQuestion:QuestionInterface = {} as QuestionInterface;
          let localAnswerChoices: string[] = [];
          // load answers
          singleAnswer.id = ans.id;
          singleAnswer.question = ans.question;
          singleAnswer.answer = ans.correctAnswer;
          singleAnswer.isUserAnswered = false;
          singleAnswer.isUserAnsweredCorrect = false;
          loadAnswers.push(singleAnswer);
          //load questions:
          singleQuestion.id = ans.id;
          singleQuestion.question = ans.question;
          ans.incorrectAnswers.forEach( (choice:any) => localAnswerChoices.push(choice));
          localAnswerChoices.push(ans.correctAnswer);
          singleQuestion.answerChoices = this.shuffleOptions(localAnswerChoices);
          loadQuestions.push(singleQuestion);
        },

        ),
        // console.log('printingLoadAnswers:', loadAnswers);
        // console.log('printingLoadQuestions:', loadQuestions);
        this.triviaQuestions = loadQuestions,
        this.triviaAnswers = loadAnswers,
        this.questionsLoaded = true; }
    )
  }

  clearQuestionFromList(question: QuestionInterface): void {
    const ind:number = this.triviaQuestions.findIndex(v => v = question);
    this.triviaQuestions.splice(ind, 1);
    if (this.triviaQuestions.length > 0) {
      this.allQuestionsAnswered = false;
    } else {
      this.allQuestionsAnswered =  true;
    }
  }

  loadQuestionToQuestionForm(): QuestionInterface {
    return this.triviaQuestions[0];
  }

  getAnswer(event: QuestionInterface): void {
    const ind = this.triviaAnswers.findIndex(v => v.id == event.id);
    this.triviaAnswers[ind].isUserAnswered = true;

    if(this.userDetailsForm.username !== null ||this.userDetailsForm.username !== undefined ) {
      this.userDetailsForm.totalQuestionsAnswered += 1;
      this.userDetailsForm.cummulativePoints += this.mapDifficultyToWeight(this.triviaRecord.difficultyLevel);
    }
    if (event.answerSelected == this.triviaAnswers[ind].answer) {
      this.triviaAnswers[ind].isUserAnsweredCorrect = true;
      if (this.userDetailsForm.username !== null ||this.userDetailsForm.username !== undefined) {
        this.userDetailsForm.totalScore += this.mapDifficultyToWeight(this.triviaRecord.difficultyLevel);
      }
    } else {
      this.triviaAnswers[ind].isUserAnsweredCorrect = false;
    }

    this.clearQuestionFromList(event);
  }

  submitUserName(event: NgForm):void {
    let userDetails: UserInterface = {} as UserInterface;
    let userScore: number = 0;
    let totalQuestionsAnswered = 0;
    let cummulativePoints = 0;
    this.triviaAnswers.forEach( (answer: AnswerInterface) => {
      totalQuestionsAnswered +=  (answer.isUserAnswered) ? 1: 0;
      cummulativePoints +=  (answer.isUserAnswered) ? this.mapDifficultyToWeight(this.triviaRecord.difficultyLevel): 0;
      if(answer.isUserAnswered && answer.isUserAnsweredCorrect) {
        userScore += this.mapDifficultyToWeight(this.triviaRecord.difficultyLevel);
      }
    });
    this.userDetailsForm.username = event.form.value.username;
    this.userDetailsForm.totalScore = userScore;
    this.userDetailsEntered = true;
  }

  resetTriviaSelectionForm(): void {
    this.questionsLoaded = false;
    this.triviaQuestions = [];
    this.allQuestionsAnswered = false;
  }

  resetUser(): void {
    this.userDetailsForm = {
      username: '',
      totalScore: 0,
      totalQuestionsAnswered: 0,
      cummulativePoints: 0
    };
  }

  submitScoreAndResetUser(): void {
    this.triviaService.submitScore(this.userDetailsForm).subscribe(
      (res) => {
        if(res == 'success') {
          this.resetTriviaSelectionForm();
          this.resetUser();
          this.router.navigate(['/userslist']);
        }
      }
    );
  }

  shuffleOptions(array: string[]) {
    return array.sort(() => Math.random() - 0.5);
  }

  mapDifficultyToWeight(d: string): number {
    if(d.toLowerCase() == 'easy') {
      return 1;
    } else if (d.toLowerCase() == 'medium') {
      return 2;
    } else if(d.toLowerCase() == 'hard') {
      return 3;
    }
    return 1;
  }


}
