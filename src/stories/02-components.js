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
  `);
