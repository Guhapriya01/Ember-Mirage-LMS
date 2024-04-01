import Route from '@ember/routing/route';

export default class LatestBooksRoute extends Route {
  model() {
    return fetch('https://www.googleapis.com/books/v1/volumes?q=hi')
      .then((response) => response.json())
      .then((data) => {
        return data.items;
      });
  }
}
