import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/custom-classes/todo';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: Todo;
  @Output() createTodo: EventEmitter<Todo> = new EventEmitter();
  constructor() { 
    this.todo = new Todo();
  }

  ngOnInit(): void {
    
  }

}
