export class Triggers {
  constructor(){
    this.toggle = true;
  }
  doSomething(evt){
    console.log(evt);
  }
  
  toggleCheckBox(){
    console.log("toggle - " + this.toggle);
    this.toggle = !this.toggle;
  }
}
