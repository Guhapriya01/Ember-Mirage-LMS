import Route from '@ember/routing/route';

export default class AuthorsRoute extends Route {
  model() {
    return fetch('/authors')
      .then((response) => response.json())
      .then((response) => response.data);
  }
}
