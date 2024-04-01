import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class BookEditRoute extends Route {
  @service router;

  beforeModel(transition) {
    if (!transition.from || transition.from.name != 'book.index') {
      this.router.transitionTo('book');
    }
  }

  setupController(controller, model) {
    super.setupController(controller, model);
    controller.set('model', model);
    controller.set('name', model.attributes.name);
    controller.set('author', model.attributes.author);
    controller.set('publisher', model.attributes.publisher);
  }
}
