import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { faker } from '@faker-js/faker';

export default class BookController extends Controller {
  @service router;
  name = null;
  author = null;
  publisher = null;

  @action
  async addBook() {
    let data = {
      name: this.name,
    };

    data['author'] = this.author ? this.author : 'Anoymous';
    data['publisher'] = this.publisher ? this.publisher : 'Unknown';
    data['image'] = faker.image.urlPicsumPhotos();

    let JSONdata = {
      data: {
        attributes: data,
      },
    };

    let response = await fetch('/books', {
      method: 'POST',
      body: JSON.stringify(JSONdata),
    });

    // console.log(response);
    if (response.ok) {
      alert('Book added successfully');
      this.router.refresh();
    } else {
      alert('Failed to add book');
    }
  }

  @action
  async removeBook(id) {
    let response = await fetch(`/books/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      alert('Book removed successfully');
      this.router.refresh();
    } else {
      alert('Failed to remove book');
    }
  }

  // @action
  // searchBook() {
  //   console.log(this.searchTerm);
  //   this.router.transitionTo('book', {
  //     queryParams: { searchTerm: this.searchTerm },
  //   });
  // }
}
