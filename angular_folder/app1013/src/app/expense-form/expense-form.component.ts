import { Component, OnInit } from '@angular/core';
import { Category } from '../category';
import { ExpenseInterface } from '../expense';
import { ExpenseService } from '../expense.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-expense-form',
  templateUrl: './expense-form.component.html',
  styleUrls: ['./expense-form.component.css']
})
export class ExpenseFormComponent implements OnInit {

  constructor(
    private expensesService: ExpenseService
  ) { 
    //this.enumKeys=Object.keys(this.enumCategories);
  }

  public enumCategories = Category;
  enumKeys = Object.keys;

  expenseRecord: ExpenseInterface = {} as ExpenseInterface;

  ngOnInit(): void {

  }

  addNewExpense(expenseForm: NgForm) { 
    let exp: ExpenseInterface = {
      amount: expenseForm.form.value.amount,
      description: expenseForm.form.value.description,
      category: expenseForm.form.value.category
    }
    this.expensesService.addExpenseToList(exp);
  }

}
