import { Component, OnInit } from '@angular/core';
import { Todo } from './custom-classes/todo';
import { TodoList } from './custom-classes/todo-lists';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: string;
  todoLists: TodoList[];


  constructor() {
    this.title = "Todo-list-app";
    this.todoLists = [];
  }

  ngOnInit():void {
    this.debugCreateDummyTodoLists();
  }

  debugCreateDummyTodoLists() {
    this.todoLists = [
      new TodoList('List1', [ new Todo("Todo1", "Desc1", "location 1", 1)]), 
      new TodoList('List2', []),
      new TodoList('List3', [])
    ]
  }

  todoListExists(name:string) {
    return this.todoLists.filter(todoList => todoList.name === name).length>0;
  }

  addTodoList(name:string) {
    this.todoLists.push(new TodoList(name, []));
  }

}
