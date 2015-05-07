import {TodosAPI} from './todos-api';
import {EventAggregator} from 'aurelia-event-aggregator';
import {TodoItemAdded} from './messages';
export class TodoAdd{
  static inject = [TodosAPI, EventAggregator];
  constructor(api, ea){
    this.title = "";
    this.api = api;
    this.ea = ea;
  }

  addTodo() {
    this.api.add(this.title);
    this.ea.publish(new TodoItemAdded(this.title));
    this.title = "";
    return false;
  }
}
;
