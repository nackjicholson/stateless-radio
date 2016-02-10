# stateless-radio

> Stateless Radio React Component

This project is based on the [react-radio-group](https://github.com/chenglou/react-radio-group) project by Cheng Lou.
It behaves very similarly, except that underneath it utilizes stateless function components.

When making a radio group in an HTML form you want to be able to easily select a radio input by default, be able
to respond to selection changes, and control the styling and HTML markup of your form. That's what this react component provides.

## Example

```js
import React from 'react';
import statelessRadioGroup from 'stateless-radio';

const StatelessRadioGroup = statelessRadioGroup(React);

function handleChange(value) {
  // do something with the value of the newly selected radio input.
}

<StatelessRadioGroup name="fruit" selectedValue="orange" onChange={handleChange}>
  {RadioInput =>
    <div>
      <RadioInput value="apple" />Apple
      <RadioInput value="orange" />Orange
      <RadioInput value="watermelon" />Watermelon
    </div>
  }
</StatelessRadioGroup>
```

Produces this HTML when rendered by a component:

```html
<div>
  <input type="radio" name="fruit" value="apple" />Apple
  <input type="radio" name="fruit" value="orange" checked />Orange
  <input type="radio" name="fruit" value="watermelon" />Watermelon
</div>
```

## API

### Factory Function

`statelessRadioGroup :: React => props => ReactElement`

This module exports factory function which takes your instance of `React` as it's argument, and returns the
stateless constructor function for a `StatelessRadioGroup` component.

```js
import statelessRadioGroup from 'stateless-radio';
const StatelessRadioGroup = statelessRadioGroup(React);
```

### <StatelessRadioGroup /> Component

Props:

- **children** *func* *required* A function which builds the content of the radio group
- **defaultValue** *mixed* A value used to compare against the values of the `StatelessRadio` components in order to select the correct one.
- **onSelection** *func* A callback function which is called with a value, whenever the radio group's selection is changed.
- **name** *string* A unique name for identifying the radio inputs. What you'd normally put as the `name` prop on a radio input tag.

### <StatelessRadio />

(Since you're getting that as the argument of your children function, you could have named it anything you wanted really.) Any prop you pass onto it will be transferred to the actual input under the hood.

## Contributing

### NPM Scripts Documentation

**Linting with Eslint**

Configured by default to use the "airbnb/base" eslint preset which provides 
a mostly sane set of rules for writing JavaScript, learn more [here](https://github.com/airbnb/javascript)

`$ npm run lint`

Will lint your code anytime a file changes in the `src` directory. Analyzes your code for adherence to
a [`jscs`](http://jscs.info/) code style specification. Uses the "airbnb" jscs preset.

**Tests with mocha**

`$ npm test`

Runs a test of your `src` code using mocha. Tests can be written using es2015 as well.

`$ npm run cov`

Produces an istanbul coverage report in the `coverage/` directory.

**Dev Mode**

`$ npm run tdd`

Run a file watcher to run the tests anytime a file in `src` is changed.

`$ npm run tdd:lint`

Run a file watcher which performs linting, code style checks, and tests anytime you save a file.

**Transpile to ES5 with Babel**

`$ npm run build`

Packages your library to an es5 commonjs module using webpack and places it in the `dist/` dir.
