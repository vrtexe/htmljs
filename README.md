# html-dom-js

[![issues](https://img.shields.io/github/issues/vrtexe/html-dom-js.svg?style=flat-square)](https://www.npmjs.com/package/html-dom-js) [![npm](https://img.shields.io/npm/v/html-dom-js.svg?style=flat-square)](https://www.npmjs.com/package/html-dom-js) [![mit](https://img.shields.io/npm/l/html-dom-js.svg?style=flat-square)](https://opensource.org/licenses/MIT)

## Install

```sh
npm install -D html-dom-js
```

## Description

A simple library for creating `html` elements in javascript, uses javascript to initialize the properties of elements and no state handling or reactive object are created.

## Usage

```js
import { div, button, label, input } from 'html-dom-js/html';

document.body.appendChild(
  div({
    attributes: {
      class: 'test-class',
      'aria-label': 'Custom Control',
      onclick: (e) => {
        e.stopPropagation();
        console.log('Abort event triggered!', e);
      },
    },
    props: {
      title: 'Title',
      className: 'custom-class',
      style: {
        height: '100vh',
        margin: '0',
        background: 'white',
        padding: '5px',
      },
    },
    children: [
      label({
        props: {
          htmlFor: 'test',
        },
        children: 'Test Label',
      }),
      input({
        props: {
          type: 'text',
          placeholder: 'Enter text',
          required: true,
        },
      }),
      div({ children: 'Custom Control' }),
      button({
        props: { className: 'example-class' },
        event: {
          click: (e) => {
            e.stopPropagation();
            console.log('Button clicked!', e);
          },
          dblclick: (e) => {
            e.stopPropagation();
            console.log('Button double-clicked!', e);
          },
        },
        children: 'Click',
      }),
    ],
  }),
);
```

A default import is also supported.

```js
import html from '../index.js';

document.body.appendChild(
  html.div({
    children: 'Testing',
  }),
);
```

## Documentation

Every tag has its own method defined, the general `element` function can be used to create any element.
Example:

```js
import { element } from '../index.js';

document.body.appendChild(
  element('div', {
    props: { className: 'test' },
  }),
);
```

Some properties can be defined in multiple ways, the main options are applied in order:

- `props` - Javascript properties of the html element
- `attributes` - Attributes that can be set on the html element ([setAttribute](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute))
- `children` - The content of the element, can be a string, a single child or an array of children.
- `event` - The event listeners are attached last.

```js
import { element } from '../index.js';

document.body.appendChild(
  element('div', {
    props: { className: 'test', onclick: () => {} },
    attributes: { class: 'test', onclick: 'method()' },
    event: {
      onclick: (e) => console.log('Clicked', e),
    },
    children: 'Content',
  }),
);
```

> The mdn javascript/html documentation applies here
> Typescript support and declaration files are included

## License

[MIT](https://github.com/vrtexe/html-dom-js/blob/main/LICENSE.md)
