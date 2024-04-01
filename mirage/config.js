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

  // ------------ BOOKS ------------

  this.get('/books', (schema, request) => {
    return schema.books.all();
  },{timing:2000});

  this.get('/books/:name', (schema, request) => {
    return schema.books.findBy({ author: request.params.name });
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
}
