import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class BookEditController extends Controller {
  @service router;

  @action
  async updateBook(id) {
    let data = {
      name: this.name,
      author: this.author,
      publisher: this.publisher,
    };

    let JSONdata = {
      data: {
        attributes: data,
      },
    };

    let response = await fetch(`/books/${id}`, {
      method: 'PUT',
      body: JSON.stringify(JSONdata),
    });

    if (response.ok) {
      alert('Book updated successfully');
      this.router.refresh();
    } else {
      alert('Failed to update book details');
    }
  }
}
