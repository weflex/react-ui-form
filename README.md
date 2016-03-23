# react-ui-form

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

