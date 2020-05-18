import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Components', module)
  .add('Buttons', () => `
    <h5>Success button</h5>
    <button type="button" class="btn btn-success">Success</button>

    <div class="mb-5"></div>

    <h5>Secondary button</h5>
    <button type="button" class="btn btn-secondary">Secondary</button>

    <div class="mb-5"></div>

    <h5>Light button</h5>
    <button type="button" class="btn btn-light">Light</button>

    <div class="mb-5"></div>

    <h5>Link button</h5>
    <button type="button" class="btn btn-link">Link button</button>

    <div class="mb-5"></div>

    <h5>Small button</h5>
    <button type="button" class="btn btn-sm btn-success">Small button</button>

    <div class="mb-5"></div>

    <h5>Button with icon</h5>
    <button type="button" class="btn btn-success"><i class="material-icons">bookmark</i> Save</button>

    <div class="mb-5"></div>

    <h5>Disabled button</h5>
    <button type="button" class="btn btn-success" disabled>Success disabled</button>

    <div class="mb-5"></div>

    <h5>
      <a href="https://material.io/design/components/buttons-floating-action-button.html">
        FAB
      </a> (Floating Action button)
    </h5>
    <button type="button" class="btn btn-success btn-fab"><i class="material-icons">add</i></button>

    <hr class="my-5" />

    <h5>Secondary pill button</h5>
    <button type="button" class="btn btn-sm btn-pill-secondary">Secondary</button>

    <div class="mb-5"></div>

    <h5>Danger pill button</h5>
    <button type="button" class="btn btn-sm btn-pill-danger">Danger</button>

    <div class="mb-5"></div>

    <h5>Success pill button</h5>
    <button type="button" class="btn btn-sm btn-pill-success">Success</button>

    <hr class="my-5" />

    <a href="https://getbootstrap.com/docs/4.3/components/buttons/#examples">Boostrap buttons documentation</a>
  `)
  .add('Forms / Input', () => `
    <form>

      <h5>Text input</h5>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Placeholder text">
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>

      <div class="mb-5"></div>

      <h5>Read-only text input</h5>
      <div class="form-group">
        <label for="exampleReadOnly">Readonly</label>
        <input class="form-control" type="text" id="exampleReadOnly" placeholder="Readonly input here..." readonly>
      </div>

      <div class="mb-5"></div>

      <h5>Select</h5>
      <div class="form-group">
        <label for="exampleFormControlSelect1">Example select</label>
        <select class="form-control custom-select" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>

      <div class="mb-5"></div>

      <h5>Textarea</h5>
      <div class="form-group">
        <label for="exampleFormControlTextarea1">Example textarea</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>

      <div class="mb-5"></div>

      <h5>File input</h5>
      <div class="form-group">
        <label for="exampleFormControlFile1">Example file input</label>
        <input type="file" class="form-control-file" id="exampleFormControlFile1">
      </div>

      <div class="mb-5"></div>

      <h5>Checkboxes</h5>
      <div class="form-group">
        <legend class="col-form-label">Select all applicable options</legend>
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

      <div class="mb-5"></div>

      <h5>Radio buttons</h5>
      <div class="form-group">
        <legend class="col-form-label">Select the right answer</legend>
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
      </div>
    </form>

    <div class="mb-5"></div>

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
  `)
  .add('Chips', () => `
    <h5>Simple chip</h5>
    <div class="chip">
      4 locations
    </div>

    <div class="mb-5"></div>

    <h5>Chip with icon</h5>
    <div class="chip">
      Chip with icon <i class="material-icons chip_icon">edit</i>
    </div>
    <div class="mb-5"></div>

    <h5>Multiple chips</h5>
    <div class="chip">
      Multiple chips <i class="material-icons chip_icon">remove_circle</i>
    </div>
    <div class="chip">
      Side by side <i class="material-icons chip_icon">remove_circle</i>
    </div>
  `)
  .add('Badges', () => `
    <div>
    <h5>Success badge</h5>
    <span class="badge badge-pill badge-success">Accepted</span>

    <div class="mb-5"></div>

    <h5>Warning badge</h5>
    <span class="badge badge-pill badge-warning">Pending</span>
    <div class="mb-5"></div>

    <h5>Danger badge</h5>
    <span class="badge badge-pill badge-danger">Rejected</span>

    <hr class="my-5" />

    <a href="https://getbootstrap.com/docs/4.3/components/badge/">Boostrap badges documentation</a>
    </div>
  `)
  .add('Primary nav', () => `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark py-3">
      <a class="navbar-brand" href="#">
        <img src="/logo.svg" width="22" height="22" alt="U" class="d-inline-block align-baseline" />
      </a>

      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <ul class="navbar-nav navbar-pills mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="#">
              <i class="material-icons md-16">dashboard</i> Dashboard
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">
              <i class="material-icons">account_balance</i> Schools
            </a>
          </li>
        </ul>
      </div>
    </nav>
  `)
  .add('Secondary nav - Tabs', () => `
    <p>
      Our own version of
      <a href="https://getbootstrap.com/docs/4.3/components/navs/#tabs">
        base navigation with tabs
      </a>. These are not supposed to be used inside a <code>navbar</code>,
      they are secondary navigation.
      <br>
      If the tab clicking is not working, please reload the page.
    </p>

    <ul class="nav nav-tabs js-nav-tabs">
      <li class="nav-item">
        <a class="nav-link active" href="#">Active tab</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Default tab</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
          Disabled tab
        </a>
      </li>
    </ul>
  `)
  .add('Dropdowns', () => `
    <div>

    <h5>Simple dropdown</h5>
    <div class="dropdown">
      <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Saved Schools
      </button>
      <div class="dropdown-menu shadow" aria-labelledby="dropdownMenuButton">
        <div class="dropdown-item d-flex justify-content-between align-items-center"><a href="#">Some school</a><i class="material-icons">delete</i></div>
        <a class="dropdown-item" href="#">Magical Mystery Schools<i class="material-icons">delete</i></a>
        <a class="dropdown-item" href="#">French International Schools</a>
        <a class="dropdown-item" href="#">Baking Schools</a>
      </div>
    </div>

    <div class="mb-5"><div>

    <hr class="my-5" />

    <a href="https://getbootstrap.com/docs/4.3/components/dropdowns/">Boostrap dropdowns documentation</a>
    </div>
  `)
  .add('Cards', () => `
    <h5>Empty card</h5>
    <div class="card shadow-sm">
      <div class="card-body">

      </div>
    </div>

    <div class="mb-5"></div>

    <h5>School discovery card</h5>
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="d-flex justify-content-between">
          <div class="d-flex flex-column justify-content-center">
            <div class="font-size-18">Harrow Bangkok</div>
            <div class="font-size-12 text-muted">Bangkok, Thailand</div>
          </div>

          <div class="d-flex align-items-center">
            <div class="px-1">20+</div>
            <div class="small text-muted">of</div>
            <div class="px-1">188</div>
            <div class="small text-muted pr-3">senior students match</div>
            <button class="btn btn-success btn-sm px-3">Book Visit</button>
            <button class="btn btn-link-secondary"><i class="material-icons">bookmark</i> Unsave</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5"></div>

    <h5>Visits card</h5>
    <div class="card shadow-sm">
      <div class="card-body">
        <div class="d-flex justify-content-between align-items-center">

          <div class="d-flex flex-column justify-content-center align-items-center">
            <div class="font-size-12 text-muted">Wed</div>
            <div class="font-size-24">4</div>
          </div>

          <div>10:00 - 12:00</div>

          <div class="d-flex flex-column justify-content-center">
            <div class="font-size-18">Harrow Bangkok</div>
            <div class="font-size-12 text-muted">Bangkok, Thailand</div>
          </div>

          <div>
            Message: Sure, come on in!
            <i class="ml-3 hover-pointer material-icons js-info">info</i>
          </div>

          <div class="badge badge-pill badge-success">Accepted</div>
        </div>
      </div>
    </div>
  `)
  .add('Tables', () => `
    <div>

    <h5>Hoverable Table</h5>
    <div class="card shadow-sm p-2">
      <table class="table table-borderless table-hover">
        <thead>
          <tr>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Harry</td>
            <td>Potter</td>
            <td>harry@hogwarts.com</td>
          </tr>
          <tr>
            <td>Hermione</td>
            <td>Granger</td>
            <td>hermione@hogwarts.com</td>
          </tr>
          <tr>
            <td>Ron</td>
            <td>Weasley</td>
            <td>ron@weasley.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  `)
  .add('Modals', () => `
    <div>

    <h5>Simple modal</h5>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
      Launch demo modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            ...
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>

    <div class="mb-5"></div>

    </div>
  `)
  .add('Popovers', () => `
    <div>

    <h5>Simple popover</h5>
    <button type="button" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Popover on top
    </button>

    </div>
  `)
  .add('Alerts', () => `
    <div>

    <h5>Simple success alert</h5>
    <div class="alert alert-success" role="alert">
      A simple success alert—check it out!
    </div>

    </div>
  `);
