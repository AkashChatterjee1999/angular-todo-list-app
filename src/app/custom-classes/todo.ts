import { UUID } from 'angular2-uuid';
export class Todo {
    id: string;
    name: string;
    description: string;
    location: string;
    priority: number;
    completed: boolean;

    constructor(name: string="", description: string="", location: string="", priority:number=0) {
        this.id = UUID.UUID();
        this.name = name;
        this.description = description;
        this.location = location;
        this.priority = priority;
        this.completed = false;
    }

    public toggleTodoCopletion() {
        this.completed = !this.completed;
    }

}