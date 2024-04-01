import EmberRouter from '@ember/routing/router';
import config from 'my-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('latest-books');
  this.route('home');
  this.route('authors');
  this.route('book', function () {
    this.route('edit', { path: '/edit/:book_id' });
  });
});
