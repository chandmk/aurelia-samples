import {inject} from 'aurelia-framework';
import {Router} from 'aurelia-router';
import {WebAPI} from './web-api';

@inject(Router)
@inject(WebAPI)
export class Contacts {
  constructor(router, api) {
    this.api = api;
    this.router = router;
    this.router.configure(config => {
      config.title = 'Contacts',
      config.map([
        {route:'', moduleId: './no-selection', title: 'Select'},
        {route: ':id', moduleId: './contact-details'}
      ]);
    })
  }
}
