import {TodosAPI} from './todos-api';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoItemAdded} from './messages';

export class TodoList {
  static inject = [TodosAPI, EventAggregator];
  constructor(api, ea) {
    this.editTodo = {};
    this.api = api;
    this.updateList();
    ea.subscribe(TodoItemAdded, msg => this.updateList());
  }

  get hasInCompleted() {
    return this.todoList.find(t => t.completed == false) != undefined;
  }

  updateList() {
    this.todoList = this.api.getList();
  }

  markAllAsComplete() {
    this.api.markAllAsComplete();
    this.todoList = this.api.getList();
  }

  remove(todo) {
    this.api.remove(todo.id);
  }

  edit(todo) {
    this.editTodo = todo;
  }

  update(){
    console.log(this.editTodo);
    this.api.update(this.editTodo.id, this.editTodo.title);
    this.editTodo = {};
    this.updateList();
  }

}
