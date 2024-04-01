import { Model, hasMany, attr } from 'miragejs';

export default Model.extend({
  books: hasMany(),
});
