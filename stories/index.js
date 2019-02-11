/* global document */
import { storiesOf } from '@storybook/html';

import '../src/app.js';

storiesOf('Demo', module)
  .add('heading', () => '<h1>Hello World</h1>')
  .add('button', () => {
    const button = document.createElement('button');
    button.innerText = 'Hello Button';
    button.className = 'btn btn-primary';
    button.addEventListener('click', e => console.log(e));
    return button;
  });
