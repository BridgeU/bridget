import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Components', module)
  .add('Chips / Pills', () => `
    <span class="chip">
      4 locations
    </span>
    <br>
    <br>
    <span class="chip">
      Chip with icon <i class="material-icons chip_icon">edit</i>
    </span>
    <br>
    <br>
    <span class="chip">
      Multiple chips <i class="material-icons chip_icon">remove_circle</i>
    </span>
    <span class="chip">
      Side by side <i class="material-icons chip_icon">remove_circle</i>
    </span>
  `)
  .add('Buttons', () => `
    <h5>Buttons</h5>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-link">Link (or secondary)</button>

    <h5 class="mt-3">Sizes</h5>
    <button type="button" class="btn btn-success btn-lg">Large button</button>
    <button type="button" class="btn btn-success btn-sm">Small button</button>

    <h5 class="mt-3">Disabled</h5>
    <button type="button" class="btn btn-success" disabled>Success disabled</button>
    <button type="button" class="btn btn-danger" disabled>Danger disabled</button>

    <h5 class="mt-3">With icon</h5>
    <button type="button" class="btn btn-success"><i class="material-icons">bookmark</i> Save</button>

    <h5 class="mt-3">
      <a href="https://material.io/design/components/buttons-floating-action-button.html">
        FAB
      </a> (Floating Action button)
    </h5>
    <button type="button" class="btn btn-success btn-fab"><i class="material-icons">add</i></button>
    <button type="button" class="btn btn-danger btn-fab"><i class="material-icons">remove</i></button>
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
