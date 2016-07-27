import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | spinkit');

test('A SpinKit spinner should be present', function(assert) {
  assert.expect(1);

  visit('/');
  andThen(() => {
    assert.equal(find('.spinner').length, 1, 'expected to find element with class spinner');
  });
});
