import { Factory, trait } from 'miragejs';
import { faker } from '@faker-js/faker';

export default Factory.extend({
  name: (i) => `Book ${i}`,
  author: () => faker.person.fullName(),
  image: () => faker.image.urlPicsumPhotos(),
  publisher: () => faker.company.name(),

  // isPublished: () => faker.datatype.boolean(),

  // published: trait({
  //   afterCreate(book, server) {
  //     if (book.isPublished) {
  //       book.update({
  //         publishedAt: faker.date.past(),
  //         publisher: faker.person.fullName(),
  //       });
  //     }
  //   },
  // }),
});
