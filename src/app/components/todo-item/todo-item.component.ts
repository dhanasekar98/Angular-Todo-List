import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { TodoService } from 'src/app/services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  @Input() todo: any;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  
  constructor(private todoservice:TodoService) {}

  ngOnInit(): void {
  }

  // add Dynamic Class 

  setClass() {
    let classes = {
      'is-complete': this.todo.completed
    }

    return classes;
  }


  // onChange 

  onChange(todo:any) {
    todo.completed = !todo.completed;

    this.todoservice.toggleComplete(todo).subscribe(todo =>
    {
      console.log('Completed');
    }
    )
  }

  onClick(todo: any) {
    this.deleteTodo.emit(todo)

  }
}
