import { Injectable } from '@angular/core';
import { catchError, Observable, of, single, switchMap } from 'rxjs';
import { QuestionInterface } from './question-interface';
import { TriviaInterface } from './trivia-interface';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from './user-interface';
import { SubscriptionLoggable } from 'rxjs/internal/testing/SubscriptionLoggable';
import { Secret } from './secret';

@Injectable({
  providedIn: 'root'
})
export class TriviaService {

  constructor(
    private http: HttpClient
  ) { }

  dbURL: string = Secret.dbUrl;
  apikey: string = Secret.dbApikey;
  hash =  {
      headers: { "x-apikey": this.apikey }
    }

  getTriviaQuestions(triviaSelection: TriviaInterface): Observable<any> {
    let questions:QuestionInterface[] = [] as QuestionInterface[];

    const localapiUrl:string = Secret.triviaUrl;
    const difficulty: string = triviaSelection.difficultyLevel;
    const category: string = triviaSelection.category;
    const limit: number = 5;
    
    return this.http.get(`${localapiUrl}?categories=${category}&limit=${limit}&difficulty=${difficulty}`);
  }

  submitScore(userDetails: UserInterface): Observable<any> {
    const userone = {
      username: userDetails.username,
      totalscore: userDetails.totalScore,
      totalquestionsanswered: userDetails.totalQuestionsAnswered,
      cummulativepoints: userDetails.cummulativePoints
    }
    return this.http.post(this.dbURL, userone, this.hash).pipe(
      switchMap((res:any) => {
        return of('success');
      }),
      catchError(e => {
        console.log('error adding user to the database', e);
        return of('error');
      }));
  }

  getAllUsersInfo(): Observable<UserInterface[]> {
    const apikey = '635162c7626b9c747864adce';

    return this.http.get(this.dbURL, this.hash).pipe(
      switchMap((res:any) => {
        let usersList: UserInterface[] = [] as UserInterface[];
        res.forEach(
          (user: {
            _id: string | undefined;
            cummulativepoints: number; id: string | undefined; 
            username: string; totalscore: number; 
            totalquestionsanswered: number; 
          }) => {
            let singleUser: UserInterface = {} as UserInterface;
            singleUser.id = user._id;
            singleUser.username = user.username;
            singleUser.totalScore = user.totalscore;
            singleUser.totalQuestionsAnswered = user.totalquestionsanswered;
            singleUser.cummulativePoints = user.cummulativepoints;
            usersList.push(singleUser);
          }
        )
        return of(usersList);
      })

    );
  }

  deleteSingleUser(userid: string): Observable<any> {
    console.log('printingDeleteUrL');
    console.log(`${this.dbURL}/${userid}`);
    return this.http.delete( `${this.dbURL}/${userid}`, this.hash);
  }
}
