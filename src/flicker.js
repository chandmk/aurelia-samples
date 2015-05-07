import {HttpClient} from 'aurelia-http-client';

export class Flicker {
  heading = 'Flicker';
  images = [];
  url= 'http://api.flickr.com/services/feeds/photos_public.gne?tags=rainer&tagmode=any&format=json';
  static inject = [HttpClient];
  constructor(http) {
    this.http = http;
  }

  activate(){
    console.log("activate mode");
    return this.http.jsonp(this.url).then(response => {
      this.images = response.content.items;
    })
  }

  canDeactivate(){
    return confirm('Are you sure you want to leave?');
  }
}
