export class TodosAPI {
  constructor() {
    this.todos = [];
    this.counter = 0;
  }

  get(id) {
    return this.todos[id] || null;
  }

  getList() {
    var todoList = [];
    for(let todo of this.todos) {
      todoList.push(this.todos[todo.id]);
    }

    return todoList;
  }

  markAsComplete(id){
    if(this.todos[id]) {
      this.todos[id].markAsComplete();
    }
  }

  markAllAsComplete() {
    for(let todo of this.todos) {
      todo.markAsComplete();
    }
  }

  markAsIncomplete(id) {
    if(this.todos[id]) {
      this.todos[id].markAsIncomplete();
    }
  }

  markAllAsIncomplete(id) {
    for(let todo of this.todos) {
      todo.markAsIncomplete();
    }
  }

  remove(id) {
    delete this.todos[id];
  }

  removeCompleted() {
    for(let todo of this.todos){
      if(todo.completed) {
        delete todo;
      }
    }
  }

  update(todo) {
    this.todos[id].updateTitle(title);
  }

  add(title) {
    var id = counter++;
    this.todos[id] = new Todo(id, title);
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
