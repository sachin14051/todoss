import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../service/todosercice.service';
import { Itodo } from '../../module/module';
import { IdService } from '../../service/id.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todoArray :Array<Itodo> =[]
  constructor(private _todoService:TodoserviceService,
    private _idSerice : IdService) { }

  ngOnInit(): void {
  this.todoArray= this._todoService.getAllTodos()
  }
  
  onDelete(id:string){
  console.log(id)
  this._todoService.removeTodo(id)
  }
}
