import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  @Output() remove = new EventEmitter<Todo>();
  @Output() complete = new EventEmitter<Todo>();
  @Output() reset = new EventEmitter<Todo>();
  
  @Input() todo: Todo = {
    task: '',
    completed: false
  };

  removeTodoItem() {
    this.remove.emit(this.todo);
  }

  completeTodoItem() {
    this.complete.emit(this.todo);
  }
  resetTodoItem() {
    this.reset.emit(this.todo);
  }

  ngOnInit(): void {
  }

}
