import { Component, Input, OnInit } from '@angular/core';
import { Todo } from 'src/app/custom-classes/todo';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})

export class TodoListComponent implements OnInit {

  @Input() todoName: string;
  @Input() todos: Todo[];

  constructor() { 
    this.todoName = '';
    this.todos = [];
  }

  // refresh the state of the todos from the local storage here
  ngOnInit(): void {

  }

}
