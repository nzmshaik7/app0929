import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../budget.service';
import { ExpenseService } from '../expense.service';

@Component({
  selector: 'app-total-numbers',
  templateUrl: './total-numbers.component.html',
  styleUrls: ['./total-numbers.component.css']
})
export class TotalNumbersComponent implements OnInit {

  constructor(
    private budgetsService: BudgetService,
    private expensesService: ExpenseService
  ) { }

  totalExpense: number = 0;
  totalBudget: number = 1000;

  ngOnInit(): void {
    // this.expensesService.getTotalExpenseValue().subscribe(
    //   (val: number) => this.totalExpense = val
    // ),
    //   (error: any) => console.log(`error getting total expense value: ${error}`);

    // this.budgetsService.getTotalbudgetValue().subscribe(
    //   (val: number) => this.totalBudget = val
    // ),
    //   (error: any) => console.log(`error getting total budget value: ${error}`);

    this.expensesService.totalExpenses.subscribe(
      (val: number) => { this.totalExpense = val, console.log(`printingExpenseValue: ${val}`) }
    ),
      (error: any) => console.log(`error getting total expense value: ${error}`);

    this.budgetsService.totalbudgets.subscribe(
      (val: number) => { this.totalBudget += val, console.log(`printingBudgetValue: ${val}`) }
    ),
      (error: any) => console.log(`error getting total budget value: ${error}`);

  }

}
