export class ChildRouter {
  heading = 'Child Router';
  configureRouter(config, router) {
      config.map([
        {route: ['','welcome'], moduleId: './welcome', nav:true, title:'Welcome'},
        {route: 'flicker', moduleId: './flicker', nav:true},
        {route: 'child-router', moduleId: './child-router', nav: true, title: 'Child Router'}
      ]);
    this.router = router;    
  }
}
