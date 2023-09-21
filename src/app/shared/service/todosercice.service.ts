import { Injectable } from '@angular/core';
import { Itodo } from '../module/module';

@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
 
  public todoArray : Array<Itodo> =[
    {
    id:"dednendne",
     todos :"hello javascript"
  },
  {
    id:"dedndfdendne",
     todos :"hello angular"
  }]
  constructor() { }

  getAllTodos(){
    return this.todoArray
  }

  addTodo(obj:Itodo){
    this.todoArray.push(obj)
  }

  removeTodo(id:string){
 console.log( this.todoArray.find(ele => ele.id === id))
   let getIndex :Itodo = this.todoArray.find(ele => ele.id === id)!
    

   this.todoArray.splice(+getIndex,1)
  }
}
