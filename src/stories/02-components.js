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
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck1" checked>
          <label class="form-check-label" for="gridCheck1">First checkbox</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck2">
          <label class="form-check-label" for="gridCheck2">Second checkbox</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="gridCheck3" disabled>
          <label class="form-check-label" for="gridCheck3">Second checkbox</label>
        </div>
      </div>

      <fieldset class="form-group">
        <legend class="col-form-label">Radios</legend>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label" for="gridRadios1">
            First radio
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            Second radio
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="form-check-label" for="gridRadios3">
            Third disabled radio
          </label>
        </div>
      </fieldset>
    </form>
  `);
