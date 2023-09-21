import { Component, OnInit } from '@angular/core';
import { TodoserviceService } from '../../service/todosercice.service';
import { IdService } from '../../service/id.service';
import { Itodo } from '../../module/module';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  id !: string
  constructor(private _todoService: TodoserviceService,
    private _idService: IdService) { }

  ngOnInit(): void {
  }

  addTodo(msg: HTMLInputElement) {
   
    let obj: Itodo = {
      id: this._idService.getId(),
      todos: msg.value
    }
    msg.value=''
    console.log(obj)
    this._todoService.addTodo(obj)
  }
}
