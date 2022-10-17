import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpenseFormComponent } from './expense-form/expense-form.component';
import { BudgetFormComponent } from './budget-form/budget-form.component';
import { ExpensesListComponent } from './expenses-list/expenses-list.component';
import { TotalNumbersComponent } from './total-numbers/total-numbers.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ExpenseFormComponent,
    BudgetFormComponent,
    ExpensesListComponent,
    TotalNumbersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
