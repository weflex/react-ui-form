"use strict";

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  UIForm,
  UIRow,
  UIButton,
  UIDateInput,
  UITimeInput,
} from '../src/index.jsx';

class ExampleIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '2015-04-22',
      time: '12:20',
    };
  }
  render() {
    return (
      <UIForm>
        <UIRow name="common button">
          <UIButton text="button" />
        </UIRow>
        <UIRow name="block button">
          <UIButton text="block button" block={true} />
        </UIRow>
        <UIRow name="date input">
          <UIDateInput flex={0.5} value={this.state.date} />
          <UITimeInput flex={0.5} value={this.state.time} />
        </UIRow>
      </UIForm>
    );
  }
}

(function () {
  ReactDOM.render(
    <ExampleIndex />,
    document.getElementById('root-container'));
})();