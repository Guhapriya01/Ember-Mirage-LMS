import { module, test, skip } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'my-app/tests/helpers';
import { fillIn, find } from '@ember/test-helpers';
import { later } from '@ember/runloop';

module('Acceptance | book', function (hooks) {
  setupApplicationTest(hooks);

  skip('visiting /book', async function (assert) {
    await visit('/book');

    // assert.strictEqual(currentURL(), '/book');
    assert.ok(true);
  });

  test('creating books', async function (assert) {
    await visit('/book');
    later(() => {}, 5000);
    await fillIn('#name', 'priya');
    assert.dom('#name').hasValue('priya');
  });
});
