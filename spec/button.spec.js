"use strict";

const React = require('react');
const renderToString = require('react-dom/server').renderToString;
const cheerio = require('cheerio');
const UIButton = require('../').UIButton;

describe('button component', function() {

  describe('render', function() {
    it('should render a simpe button', function() {
      const node = React.createElement(UIButton, {
        text: 'button',
        onClick: function foobar() {},
      });
      const $ = cheerio.load(renderToString(node));
      expect($('button').text()).toBe('button');
      console.log(renderToString(node));
    });
  });

});