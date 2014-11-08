import Ember from "ember";
import { test } from 'ember-qunit';
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

test('A SpinKit spinner should be present', function() {
  expect(1);

  visit('/');
  equal(find('.spinner').length, 1, 'expected to find element with class spinner');
});
