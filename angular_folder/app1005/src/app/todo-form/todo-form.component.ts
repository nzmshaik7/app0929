import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  @Output() save = new EventEmitter<Todo>();
  @Output() remove_item = new EventEmitter<Todo>();
  @Output() complete_task = new EventEmitter<string>();

  constructor() { }
  todo_in_form: Todo = {
    task: '',
    completed: false
  };
  ngOnInit(): void {
  }

  addNewItem(form:NgForm): void {
    let todo_item: Todo = {
      task: form.form.value.task,
      completed: false
    }
    this.save.emit(todo_item);
    this.resetFormfield();
  }

  resetFormfield() {
    this.todo_in_form.task = '';
    this.todo_in_form.completed = false;
  }

  // addItem(task: Todo): void {
  //   this.add_item.emit();
  // }

  // removeItem(task: Todo): void {
  //   this.remove_item.emit();
  // }

  // completeTask(task: Todo): void {
  //   this.complete_task.emit();
  // }

}
