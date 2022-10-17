import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BudgetInterface } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-form',
  templateUrl: './budget-form.component.html',
  styleUrls: ['./budget-form.component.css']
})
export class BudgetFormComponent implements OnInit {

  constructor(
    private budgetService: BudgetService
  ) { }

  ngOnInit(): void {
  }

  budgetRecord: BudgetInterface = {} as BudgetInterface;

  addNewBudget(budgetForm: NgForm) { 
    let exp: BudgetInterface = {
      amount: budgetForm.form.value.amount,
    }
    this.budgetService.addbudgetToList(exp);
  }

}
