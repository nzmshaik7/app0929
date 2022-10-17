import { Component, OnInit } from '@angular/core';
import { ExpenseInterface } from '../expense';
import { ExpenseService } from '../expense.service';
import { Category } from '../category';

@Component({
  selector: 'app-expenses-list',
  templateUrl: './expenses-list.component.html',
  styleUrls: ['./expenses-list.component.css']
})
export class ExpensesListComponent implements OnInit {

  constructor(
    private expensesService: ExpenseService
  ) { }

  public Cat = Category;

  expenseList: ExpenseInterface[] = [] as ExpenseInterface[];

  ngOnInit(): void {
    this.expensesService.getExpenseList().subscribe(
      (res:ExpenseInterface[]) => {this.expenseList = res, console.log(this.expenseList)}
    ), (error: any) => console.log(`Error retrieving expenses List: ${error}`);
  }

}
