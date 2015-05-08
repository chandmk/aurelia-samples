 import 'bootstrap';
 import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router) {
      config.title = "Aurelia";
      config.map([
        {route: ['', 'spreadsheet'], moduleId: './spreadsheet', nav:true, title: 'SpreadSheet'},
        {route: 'welcome', moduleId: './welcome', nav:true, title:'Welcome'},
        {route: 'commentbox', moduleId: './commentbox/app', nav:true, title:'Comment Box'},
        {route: 'catalog', moduleId: './catalog/products', nav:true, title:'Catalog'},
        {route: 'triggers', moduleId: './triggers', nav:true},
        {route: 'flicker', moduleId: './flicker', nav:true},
        {route: 'child-router', modileId: './child-router', nav: true, title: 'Child Router'},
        {route: 'contacts', moduleId: './contacts/', nav: true, title: 'Contacts'},
        {route: 'creditcard', moduleId: './creditcard', nav: true, title: 'Credit Card'},
        {route: 'todo', moduleId: './todo/app', nav: true, title: 'Todo'}
      ]);
      this.router = router;
  }
}
