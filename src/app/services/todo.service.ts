import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';


  const httpOptions:any = {
    headers: new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
  }

@Injectable({
  providedIn: 'root'
})
  

export class TodoService {

  url: string = 'https://jsonplaceholder.typicode.com/todos';
  limit:string = '?_limit=5'

  constructor(private http:HttpClient) { }

  getTodos():Observable<Todo[]> {
    return this.http.get<Todo[]>(`${this.url}${this.limit}`);
  }

  toggleComplete(todo: Todo): Observable<any> {
    const putUrl = `${this.url}/${todo.id}`;
    return this.http.put(putUrl,todo,httpOptions);
  }

  deleteTodoService(todo: Todo): Observable<any> {
    const putUrl = `${this.url}/${todo.id}`;
    return this.http.delete(putUrl,httpOptions);
  }

  addTodoService(todo: Todo): Observable<any> {
    return this.http.post<Todo>(this.url, todo,httpOptions);
  }
}
