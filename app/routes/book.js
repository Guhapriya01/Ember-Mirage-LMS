import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookRoute extends Route {
  @service router;

  model() {
    // let searchTerm = params.searchTerm;
    // if (searchTerm) {
    //   data = await fetch(`/books/${searchTerm}`).then((res) => res.json());
    // } else {
    // }

    let data = fetch('/books')
      .then((res) => res.json())
      .then((r) => r.data);

    return data;
  }

  // afterModel(model, transition) {
  //   if (!model.length) {
  //     console.log(model);
  //     this.router.transitionTo('book.view', model);
  //   }
  // }

  resetController(controller, isExiting, transition) {
    this._super(...arguments);
    controller.set('name', null);
    controller.set('author', null);
    controller.set('publisher', null);
  }
}
