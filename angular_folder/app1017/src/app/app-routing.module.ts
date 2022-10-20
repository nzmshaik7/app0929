import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { TriviaSelectionFormComponent } from './trivia-selection-form/trivia-selection-form.component';
import { UsersListComponent } from './users-list/users-list.component';

const routes: Routes = [
  { path: "userslist", component: UsersListComponent },
  { path: "", component: TriviaSelectionFormComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
