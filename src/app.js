import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
 import 'bootstrap';
 import 'bootstrap/css/bootstrap.css!';

@inject(Router)
export class App {
  constructor(router) {
    this.router = router;
    this.router.configure(config=> {
      config.title = "Aurelia";
      config.map([
        {route: ['', 'spreadsheet'], moduleId: './spreadsheet', nav:true, title: 'SpreadSheet'},
        {route: 'welcome', moduleId: './welcome', nav:true, title:'Welcome'},
        {route: 'commentbox', moduleId: './CommentBox/CommentBox', nav:true, title:'Comment Box'},
        {route: 'triggers', moduleId: './triggers', nav:true},
        {route: 'flicker', moduleId: './flicker', nav:true},
        {route: 'child-router', modileId: './child-router', nav: true, title: 'Child Router'},
        {route: 'contacts', moduleId: './contacts/app', nav: true, title: 'Contacts'},
        {route: 'creditcard', moduleId: './creditcard', nav: true, title: 'Credit Card'}
      ]);
    });
  }
}
