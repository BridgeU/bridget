import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Form', module)
  .add('Buttons', () => `
    <h5>Primary</h5>
    <button type="button" class="btn btn-success">Save</button><br>

    <h5 class="mt-3">Secondary</h5>
    <button type="button" class="btn btn-secondary">Cancel</button>

    <h5 class="mt-3">With icon</h5>
    <button type="button" class="btn btn-success"><i class="material-icons">bookmark</i> Save</button>
  `)
  .add('Text input - with label', () => `
    <div class="form-group">
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    </div>
  `)
  .add('Text input - without label', () => `
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email address">
  `)
  .add('Select input', () => `
    <select class="custom-select">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  `);
