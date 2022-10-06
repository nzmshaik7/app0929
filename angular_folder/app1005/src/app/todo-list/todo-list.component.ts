import { Component, OnInit } from '@angular/core';
import { Todo } from './../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor() { }

  listOne: Todo = {
    task: 'taskOne',
    completed: true
  }

  listTwo: Todo = {
    task: 'taskTwo',
    completed: false
  }

  listThree: Todo = {
    task: 'taskThree',
    completed: true
  }

  listFour: Todo = {
    task: 'taskFour',
    completed: false
  }

  listFive: Todo = {
    task: 'taskFive',
    completed: true
  }

  todo_list_array: Todo[] = [
    this.listOne,
    this.listTwo,
    this.listThree,
    this.listFour,
    this.listFive
  ];

  ngOnInit(): void {
  }

  addTodoList(todo_item: Todo) {
    this.todo_list_array.push(todo_item);
  }

  removeTodoItem(todo_item: Todo) {
    const i = this.get_index(todo_item);
    this.todo_list_array.splice(i, 1);
  }

  completeTodoItem(todo_item: Todo) {
    const i = this.get_index(todo_item);
    this.todo_list_array[i].completed = true;
  }

  resetCompleteTodoItem(todo_item: Todo) {
    const i = this.get_index(todo_item);
    this.todo_list_array[i].completed = false;
  }

  get_index(todo_item: Todo): number {
    return this.todo_list_array.findIndex(v => v == todo_item);
  }

  areAllTasksCompleted() {
    const not_completed: Todo[] = this.todo_list_array.filter(task => !task.completed);

    if (not_completed.length == 0) {
      return true;
    }
    return false;
  }

}
