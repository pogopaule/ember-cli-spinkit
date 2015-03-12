import Ember from "ember";
import { test, module } from 'qunit';
import startApp from '../helpers/start-app';
var App;

module('SpinKit spinner test', {
  setup: function() {
    App = startApp();
  },
  teardown: function() {
    Ember.run(App, App.destroy);
  }
});

test('A SpinKit spinner should be present', function(assert) {
  assert.expect(1);

  visit('/');
  assert.equal(find('.spinner').length, 1, 'expected to find element with class spinner');
});
