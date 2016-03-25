"use strict";

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const cheerio = require('cheerio');
const form = require('../');

describe('picker components', function() {

  describe('UIOptionPicker.componentWillMount', function() {

    function expectOptionToBeFirst(options, next) {
      const ctx = {
        state: {},
        setState: function(newState) {
          expect(newState.property).toBe(options[0].value);
          next();
        },
      };
      const picker = new form.UIOptionPicker({
        bindStateCtx: ctx,
        bindStateName: 'property',
        options: options,
      });
      picker.componentWillMount();
    }
    it('should set the first option', function(next) {
      expectOptionToBeFirst([
        {name: 'foobar', value: 'foobar2'},
      ], next);
    });
    it('if the option value is undefined', function(next) {
      expectOptionToBeFirst([
        {name: 'foobar', value: undefined},
      ], next);
    });
  });

});