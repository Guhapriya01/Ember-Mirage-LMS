export default function (server) {
  server.db.loadData({
    directors: [{ name: 'Richard' }, { name: 'John' }],
  });

  // server.create('author', {
  //   name: 'Richard',
  //   numBooksWritten: 30,
  // });

  // server.create('author', {
  //   name: 'John',
  // });

  // server.createList('author', 3);

  server.loadFixtures();

  server.createList('book', 3);

  server.create('book', {
    name: "Pitman's Journal of Commercial Education",
    authorId: 1,
  });

  server.create('book', {
    authorId: 2,
  });

  server.create('book', {
    name: 'Helo world',
    authorId: 3,
  });
}
