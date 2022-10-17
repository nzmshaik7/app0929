import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Category } from './category';
import { ExpenseInterface } from './expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }

  expOne: ExpenseInterface = {
    description: 'descriptionOne',
    category: Category.Bills,
    amount: 120
  }

  expTwo: ExpenseInterface = {
    description: 'descriptionTwo',
    category: Category.Clothing,
    amount: 140
  }

  // expenseList: ExpenseInterface[] = [] as ExpenseInterface[];
  expenseList: ExpenseInterface[] = [this.expOne, this.expTwo];

  private _totalExpenses= new BehaviorSubject<number>(
    this.expenseList.reduce((x,y)=>{
      return x + y.amount;
  },0)
  );
  readonly totalExpenses = this._totalExpenses.asObservable();
  
  addExpenseToList(expense: ExpenseInterface): void {
    this.expenseList.push(expense);
    // calculate total:
    let price: number = 0;
    this.expenseList.forEach (
      (exp) => price += exp.amount
    );
    this._totalExpenses.next(price);
  }

  getExpenseList(): Observable<ExpenseInterface[]> {
    let exp: ExpenseInterface[] = [];
    return of(this.expenseList);
  }
  

  getTotalExpenseValue(): Observable<number> {
    let price: number = 0;
    this.expenseList.forEach (
      (exp) => price += exp.amount
    );
    return of(price);
  }
}
