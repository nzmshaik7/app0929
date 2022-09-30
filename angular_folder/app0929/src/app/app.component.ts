import { Component } from '@angular/core';
import { User } from './user';
import { FormsModule, NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app0929';

  displayEdit: boolean = false;

  userObject: User = {
    name: 'userOne',
    age: 20,
    favoriteColor: 'blue'
  }

  addUseDetails(form:NgForm) {
    this.userObject.name = form.form.value.name;
    this.userObject.age = form.form.value.age;
    this.userObject.favoriteColor = form.form.value.favoriteColor;
  }

  toggleEdit() {
    this.displayEdit = !this.displayEdit;
  }

}
