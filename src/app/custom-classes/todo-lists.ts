import { Todo } from "./todo";
export class TodoList {
    name: string;
    todoItems: Todo[];
    constructor(name: string, todoItems: Todo[]) {
        this.name = name;
        this.todoItems = todoItems;
    }
    addTodoItem(todo: Todo) {
        this.todoItems.push(todo);
    }
    deleteTodoItem(todoId: string) {
        this.todoItems = this.todoItems.filter(todo => todo.id !== todoId);
    }
}