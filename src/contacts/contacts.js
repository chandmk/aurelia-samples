import {WebAPI} from './web-api';

export class Contacts {
  static inject = [WebAPI];
  constructor(api) {
    this.api = api;
  }
  configureRouter(config, router){
    config.title = 'Contacts',
    config.map([
      {route:'', moduleId: './no-selection', title: 'Select'},
      {route: 'details/:id', moduleId: './contact-details'}
    ]);
   this.router = router;    
  }
}
