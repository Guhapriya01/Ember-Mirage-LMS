import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';
export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to
    // auto-discover the ember models

    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models,
    },

    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {
  this.get('/authors', (schema, request) => {
    // return ['Anonymous', 'John', 'Richard'];
    // let b = schema.authors.find(1)
    let a = schema.authors.all();
    return a;
  });

  // BOOKS

  this.get('/books', (schema, request) => {
    return schema.books.all();
  });

  this.get('/books/:name', (schema, request) => {
    let name = request.params.name;
    return schema.books.findBy({ author: name });
  });

  this.post(
    '/books'

    // , function (schema, request) {
    //   let a = this.normalizedRequestAttrs();
    //   // let data = JSON.parse(request.requestBody);
    //   schema.books.create(a);
    // }
  );

  this.del('/books/:id', (schema, request) => {
    let id = request.params.id;
    let book = schema.books.find(id);
    book.destroy();
  });

  this.put(
    '/books/:id'
    // , (schema, request) => {
    //   let data = JSON.parse(request.requestBody);
    //   let id = request.params.id;
    //   let book = schema.books.find(id);
    //   book.update(data);
    // }
  );

  this.passthrough('https://www.googleapis.com/books/v1/volumes');

  /*
    Config (with defaults)
    Note: these only affect routes defined after them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing
  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
}
