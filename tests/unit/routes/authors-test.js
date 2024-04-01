import { module, test } from 'qunit';
import { setupTest } from 'my-app/tests/helpers';

module('Unit | Route | authors', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:authors');
    assert.ok(route);
  });

  // test('Author', async function (assert) {
  //   await visit('/authors');
  //   console.log(this.server);
  //   assert.equal(this.server.db.directors[0].name, 'Richard');
  // });
});
