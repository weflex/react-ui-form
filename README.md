# react-ui-form

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Dependency Status][david-image]][david-url]
[![Downloads][downloads-image]][downloads-url]

The UI Component that providing basic form controls which is compatible with React.js

## Get Started

```jsx
import {
  UIForm,
  UIRow,
  UITextInput,
  UIButton,
} from 'react-ui-form';

class ExampleForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: null,
      password: null,
    };
  }
  onLogin() {
    // this.state.username
    // this.state.password
  }
  render() {
    return (
      <UIForm>
        <Row name="username">
          <UITextInput bindStateCtx={this} bindStateName="username" />
        </Row>
        <Row name="username">
          <UITextInput bindStateCtx={this} bindStateName="username" password={true} />
        </Row>
        <Row name="username">
          <UIButton text="login" onClick={this.onLogin.bind(this)} />
        </Row>
      </UIForm>
    )
  }
}

```

## Components

- Basis
  - [`UIForm`](src/base.jsx)
  - [`UIRow`](src/base.jsx)
  - [`UIText`](src/base.jsx)
- Buttons
  - [`UIButton`](src/button/base.jsx)
- Inputs
  - [`UITextInput`](src/input/text.jsx)
  - [`UIDateInput`](src/input/date.jsx)
  - [`UITimeInput`](src/input/time.jsx)
- Pickers
  - [`UIOptionPicker`](src/picker/option.jsx)
  - [`UIColorPicker`](src/picker/color.jsx)


## Installation

```sh
$ npm install react-ui-form
```

## Tests

```sh
$ npm install
$ npm test
```

## Example

```sh
$ cd examples
$ npm install && npm start
$ open ./index.html
```

## License

MIT @ WeFlex

[npm-image]: https://img.shields.io/npm/v/react-ui-form.svg?style=flat-square
[npm-url]: https://npmjs.org/package/react-ui-form
[travis-image]: https://img.shields.io/travis/weflex/react-ui-form.svg?style=flat-square
[travis-url]: https://travis-ci.org/weflex/react-ui-form
[david-image]: http://img.shields.io/david/weflex/react-ui-form.svg?style=flat-square
[david-url]: https://david-dm.org/weflex/react-ui-form
[downloads-image]: http://img.shields.io/npm/dm/react-ui-form.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/react-ui-form