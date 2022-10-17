import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { BudgetInterface } from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  constructor() { }

  budgetList: BudgetInterface[] = [] as BudgetInterface[];

  private _totalbudgets= new BehaviorSubject<number>(
    this.budgetList.reduce((x,y)=>{
      return x + y.amount;
  },0)
  );
  readonly totalbudgets = this._totalbudgets.asObservable();

  getTotalbudgetValue(): Observable<number> {
    let price: number = 0;
    this.budgetList.forEach(
      (bud) => price += bud.amount
    );
    return of(price);
  }

  addbudgetToList(budget: BudgetInterface): void {
    this.budgetList.push(budget);
    // calculate total:
    let price: number = 0;
    this.budgetList.forEach (
      (exp) => price += exp.amount
    );
    this._totalbudgets.next(price);
  }
  
}
