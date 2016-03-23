"use strict";

const React = require('react');
const renderToStaticMarkup = require('react-dom/server').renderToStaticMarkup;
const cheerio = require('cheerio');
const form = require('../');

describe('base component', function() {

  it('should expect Base modules', function() {
    expect(typeof form.UIForm).toBe('function');
    expect(typeof form.UIRow).toBe('function');
    expect(typeof form.UILabel).toBe('function');
    expect(typeof form.UIText).toBe('function');
    expect(typeof form.UIButton).toBe('function');
    expect(typeof form.UITextInput).toBe('function');
    expect(typeof form.UIDateInput).toBe('function');
    expect(typeof form.UITimeInput).toBe('function');
    expect(typeof form.UIFileInput).toBe('function');
    expect(typeof form.UIOptionPicker).toBe('function');
    expect(typeof form.UIColorPicker).toBe('function');
    expect(typeof form.IControl).toBe('function');
  });

  describe('UIForm', function() {
    it('should return a ui component', function() {
      const node = React.createElement(form.UIForm, {
        className: 'class',
      });
      const $ = cheerio.load(renderToStaticMarkup(node));
      expect($('.class').attr('class')).toBe('ui-form class');
    });
  });

  describe('UIText', function() {
    it('should return a ui component', function() {
      const node = React.createElement(form.UIText, {
        className: 'class',
        text: 'text',
      });
      const $ = cheerio.load(renderToStaticMarkup(node));
      expect($('.class').attr('class')).toBe('class');
      expect($('.class > p').text()).toBe('text');
    });
  });

  describe('UILabel', function() {
    it('should return a ui component', function() {
      const node = React.createElement(form.UILabel, {
        className: 'class',
        text: 'text',
      });
      const $ = cheerio.load(renderToStaticMarkup(node));
      expect($('.class').attr('class')).toBe('class');
      expect($('.class > span').text()).toBe('text');
    });
  });

  describe('UIRow', function() {
    it('should return a ui component', function() {
      const node = React.createElement(form.UIRow, {
        name: 'name',
        hint: 'hint',
        children: React.DOM.div({
          id: 'foo',
        }, 'bar'),
      });
      const $ = cheerio.load(renderToStaticMarkup(node));
      expect($('label > span').text()).toBe('name');
      expect($('#foo').text()).toBe('bar');
    });
  });

  describe('IControl', function() {
    it('should create a IControl instance', function() {
      const control = new form.IControl({
        bindStateCtx: {
          setState: function() {},
          state: {},
        },
        bindStateName: 'property',
      });
      expect(control.bindStateValue).toBe(undefined);
      expect(control.width).toBe('calc(100% - 5px)');
      expect(control.onChangeOnProps).toBe(null);
      const newProps = control.createProps();
      expect(newProps.type).toBe('text');
      expect(newProps.style.width).toBe(control.width);
      expect(typeof newProps.onChange).toBe('function');
      expect(typeof newProps.bindStateCtx).toBe('object');
      expect(typeof newProps.bindStateName).toBe('string');
    });

    describe('IControl.createProps', function() {
      it('should set obj', function() {
        const props = new form.IControl({}).createProps({
          foo: 'bar',
        });
        expect(props.foo).toBe('bar');
      });
      it('should set onChange', function() {
        function foobar() {}
        const ctrl = new form.IControl({
          onChange: foobar,
        });
        const props = ctrl.createProps();
        expect(ctrl.onChangeOnProps).toBe(foobar);
      });
      it('should set onChange', function() {
        function foobar() {}
        const ctrl = new form.IControl({});
        const props = ctrl.createProps({
          onChange: foobar,
        });
        expect(ctrl.onChangeOnProps).toBe(foobar);
      });
      it('should change type', function() {
        const props = new form.IControl({}).createProps({
          type: 'time',
        });
        expect(props.type).toBe('time');
      });
      it('should change width from createProps', function() {
        const props = new form.IControl({}).createProps({
          style: {
            width: '10px',
          },
        });
        expect(props.style.width).toBe('10px');
      });
      it('should change width from element props', function() {
        const props = new form.IControl({
          style: {
            width: '20px',
          },
        }).createProps();
        expect(props.style.width).toBe('20px');
      });
      it('should change other styles', function() {
        const props = new form.IControl({}).createProps({
          style: {
            minWidth: '100px',
          },
        });
        expect(props.style.minWidth).toBe('100px');
        expect(props.style.width).toBe('calc(100% - 5px)');
      });
    });

    describe('IControl.flexbox', function() {
      it('should use a flex', function() {
        for (let flex = 0.1; flex <= 1.0; flex += 0.1) {
          let percent = parseInt(flex * 100);
          let props = new form.IControl({flex: flex}).createProps();
          expect(props.style.width).toBe(`calc(${percent}% - 5px)`);
        }
      });
    });

    describe('IControl.componentDidMount', function() {
      it('should set bindStateValue if value is set', function(next) {
        const ctx = {
          state: {},
          setState: function(newState) {
            expect(newState.property).toBe('foobar');
            next();
          },
        };
        const control = new form.IControl({
          bindStateCtx: ctx,
          bindStateName: 'property',
          value: 'foobar',
        });
        control.componentDidMount();
      });
    });
  });

});