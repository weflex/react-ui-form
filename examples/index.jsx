"use strict";

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  UIForm,
  UIRow,
  UIButton,
} from '../src/index.jsx';

class ExampleIndex extends React.Component {
  constructor(props) {
    super(props);
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
      </UIForm>
    );
  }
}

(function () {
  ReactDOM.render(
    <ExampleIndex />,
    document.getElementById('root-container'));
})();