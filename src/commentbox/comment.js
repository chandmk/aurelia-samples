import {bindable} from 'aurelia-framework';
import marked from 'chjj-marked';
import sanitizeHtml from 'sanitize-html';

export class Comment {
  @bindable text;
  @bindable author;
  
  constructor(author, text) {
    this.author = author;   
    this.text = text;
  }
  
  get markedText() {
    return sanitizeHtml(marked(this.text));
  }
}
