import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-app/tests/helpers';
import { setupMirage } from 'ember-cli-mirage/test-support';
import { later } from '@ember/runloop';

module('Acceptance | authors', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /authors', async function (assert) {
    await visit('/authors');

    assert.strictEqual(currentURL(), '/authors');
  });

  test('checking authors', async function (assert) {
    this.server.loadFixtures();
    await visit('/authors');
    assert.dom('.box-view').exists();
  });
});
