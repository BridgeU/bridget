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

    <hr>

    <h5 class="mt-3">Boostrap default buttons</h5>
    <p>
      These buttons are only here to show what we get “for free” from Bootstrap.
      <br>
      They serve mostly as a design reference for designers, they are not to be used in the app
      unless listed and named in the previous section.
      <br>
      You can see the original ones <a href="https://getbootstrap.com/docs/4.3/components/buttons/#examples">
        <strong>here</strong>
      </a>, where this code came from.
    </p>

    <button type="button" class="btn btn-primary">Primary</button>
    <button type="button" class="btn btn-secondary">Secondary</button>
    <button type="button" class="btn btn-success">Success</button>
    <button type="button" class="btn btn-danger">Danger</button>
    <button type="button" class="btn btn-warning">Warning</button>
    <button type="button" class="btn btn-info">Info</button>
    <button type="button" class="btn btn-light">Light</button>
    <button type="button" class="btn btn-dark">Dark</button>
    <button type="button" class="btn btn-link">Link</button>
  `)
  .add('Forms', () => `
    <h5>Forms</h5>

    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Placeholder text">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div class="form-group">
        <label for="exampleReadOnly">Readonly</label>
        <input class="form-control" type="text" id="exampleReadOnly" placeholder="Readonly input here..." readonly>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div class="form-group">
        <label for="exampleFormControlSelect2">Example multiple select</label>
        <select multiple class="form-control" id="exampleFormControlSelect2" aria-describedby="multiSelectHelp">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <small id="multiSelectHelp" class="form-text text-muted">
          Press Command (for macOS) or Control (for Windows) while clicking the options to select multiple item
        </small>
      </div>

      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div class="form-group">
        <label for="exampleFormControlFile1">Example file input</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>

      <div class="form-group">
        <legend class="col-form-label">Checkboxes</legend>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customSelectedCheck" checked>
          <label class="custom-control-label" for="customSelectedCheck">
            Selected custom checkbox
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customCheck2">
          <label class="custom-control-label" for="customCheck2">
            Unselected custom checkbox
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="customDisabledCheck" disabled>
          <label class="custom-control-label" for="customDisabledCheck">
            Disabled custom checkbox
          </label>
        </div>
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="indeterminateCheck">
          <label class="custom-control-label" for="indeterminateCheck">
            Indeterminate custom checkbox (set by JavaScript)
          </label>
          <small id="indeterminateHelp" class="form-text text-muted">
            (<a href="javascript:window.location.reload(true)">refresh the page
            </a> if you don’t see it)
          </small>
        </div>
      </div>

      <fieldset class="form-group">
        <legend class="col-form-label">Radios</legend>
        <div class="custom-control custom-radio">
          <input type="radio" id="customSelectedRadio" name="customRadio" class="custom-control-input" checked>
          <label class="custom-control-label" for="customSelectedRadio">
            Selected custom radio
          </label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
          <label class="custom-control-label" for="customRadio2">
            Unselected custom radio
          </label>
        </div>
        <div class="custom-control custom-radio">
          <input type="radio" id="customDisabledRadio" name="customRadio" class="custom-control-input" disabled>
          <label class="custom-control-label" for="customDisabledRadio">
            Disabled custom radio
          </label>
        </div>
      </fieldset>
    </form>

    <br>

    <h5>Inline form</h5>

    <form class="form-inline">
      <div class="form-group">
        <label for="staticEmail2" class="sr-only">Email</label>
        <input type="text" readonly class="form-control-plaintext" id="staticEmail2" value="email@example.com">
      </div>
      <div class="form-group mx-sm-3">
        <label for="inputPassword2" class="sr-only">Password</label>
        <input type="password" class="form-control" id="inputPassword2" placeholder="Password">
      </div>
      <button type="submit" class="btn btn-success">Confirm identity</button>
    </form>
  `);
