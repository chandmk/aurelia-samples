let todos = [];
let counter = 0;

export class TodosAPI {
  get(id) {
    return todos[id] || null;
  }

  getList() {
    let todoList = [];
    for(let todo of todos) {
      todoList.push(todos[todo.id]);
    }

    return todoList;
  }

  markAsComplete(id){
    if(todos[id]) {
      todos[id].markAsComplete();
    }
  }

  markAllAsComplete() {
    for(let todo of todos) {
      todo.markAsComplete();
    }
  }

  markAsIncomplete(id) {
    if(todos[id]) {
      todos[id].markAsIncomplete();
    }
  }

  markAllAsIncomplete(id) {
    for(let todo of todos) {
      todo.markAsIncomplete();
    }
  }

  remove(id) {
    delete todos[id];
  }

  removeCompleted() {
    for(let todo of todos){
      if(todo.completed) {
        delete todo;
      }
    }
  }

  update(id, title) {
    todos[id].updateTitle(title);
  }

  add(title) {
    var id = counter++;
    todos[id] = new Todo(id, title);
  }
}

class Todo {
  constructor(id, title, completed = false){
    this.id = id;
    this.title = title,
    this.completed = completed
  }

  markAsComplete(){
    this.completed = true;
  }
  markAsIncomplete(){
    this.completed = false;
  }
  updateTitle(title) {
    this.title = title;
  }
}
