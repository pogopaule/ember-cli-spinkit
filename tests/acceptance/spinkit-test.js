import { visit } from '@ember/test-helpers';
import { module, test } from 'qunit';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | spinkit', function(hooks) {
  setupApplicationTest(hooks);

  test('A SpinKit spinner should be present', async function(assert) {
    assert.expect(1);

    await visit('/');
    debugger;
    assert.dom('.spinner').exists({ count: 1 }, 'expected to find element with class spinner');
  });
});
