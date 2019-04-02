import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Navigation', module)
  .add('Primary nav', () => `
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary py-3">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img src="/logo.svg" width="22" height="22" alt="U" class="d-inline-block align-baseline" />
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-nav-alt-markup" aria-controls="navbar-nav-alt-markup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbar-nav-alt-markup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#"><i class="material-icons md-16">dashboard</i> Dashboard <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="#"><i class="material-icons">account_balance</i> Schools</a>
          </div>
          <div class="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <a class="nav-item nav-link" href="#">Logout</a>
          </div>
        </div>
      </div>
    </nav>
  `)
  .add('Secondary nav - dashboard', () => `
    <div class="bg-white">
      <div class="container">
        <nav class="nav bg-white py-2 secondary-nav">
          <a class="nav-link text-center active" href="#">
            <div class="text-body">Recommendations</div>
            <div class="h4 font-weight-bold mb-0">1314</div>
          </a>
          <a class="nav-link text-center" href="#">
            <div class="text-body">Shortlists</div>
            <div class="h4 font-weight-bold mb-0">523</div>
          </a>
          <a class="nav-link text-center" href="#">
            <div class="text-body">Applications</div>
            <div class="h4 font-weight-bold mb-0">145</div>
          </a>

          <form class="form-inline ml-auto my-2 my-lg-0">
            <select class="custom-select mr-1">
              <option selected>Last 30 days</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <select class="custom-select mr-1">
              <option selected>Humanities and arts</option>
              <option value="1">Arts but not fine arts</option>
            </select>
            <select class="custom-select mr-1">
              <option selected>All countries</option>
              <option value="1">United Kingdom</option>
              <option value="2">Spain</option>
              <option value="3">Hong Kong</option>
            </select>
            <button class="btn btn-success my-2 my-sm-0 mr-1" type="submit"><i class="material-icons">arrow_forward</i></button>
          </form>
        </nav>
      </div>
    </div>
  `)
  .add('Secondary nav - schools', () => `
    <div class="bg-white">
      <div class="container">
        <nav class="nav py-2 secondary-nav">
          <a class="nav-link active" href="#"><i class="material-icons">search</i> Find Schools</a>
          <a class="nav-link" href="#"><i class="material-icons">bookmark</i> Saved Schools</a>
        </nav>
      </div>
    </div>
  `)
  .add('School cards', () => `
    <div class="card-deck">
      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="flex-grow-1">
            <h5 class="card-title">Hogwarts School of Witchcraft and Wizardry</h5>
            <h6 class="card-subtitle mb-4 text-muted">London, UK</h6>
          </div>
          <div class="card-text">
            <span class="badge badge-success mb-2">Large school</span>
            <div>Senior class size</div>
            <div class="mb-4"><strong>56</strong></div>
          </div>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-success"><i class="material-icons">date_range</i> Book Visit</a>
            <a href="#" class="btn btn-link-secondary"><i class="material-icons">bookmark_outline</i> Save</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="flex-grow-1">
            <h5 class="card-title">Beauxbatons Academy</h5>
            <h6 class="card-subtitle mb-4 text-muted">Paris, France</h6>
          </div>
          <div class="card-text">
            <span class="badge badge-warning mb-2">Medium school</span>
            <div>Senior class size</div>
            <div class="mb-4"><strong>56</strong></div>
          </div>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-success"><i class="material-icons">date_range</i> Book Visit</a>
            <a href="#" class="btn btn-link-secondary"><i class="material-icons">bookmark_outline</i> Save</a>
          </div>
        </div>
      </div>

      <div class="card">
        <div class="card-body d-flex flex-column">
          <div class="flex-grow-1">
            <h5 class="card-title">Durmstrang Institute</h5>
            <h6 class="card-subtitle mb-4 text-muted">Helsinki, Finland</h6>
          </div>
          <div class="card-text">
            <span class="badge badge-danger mb-2">Small school</span>
            <div>Senior class size</div>
            <div class="mb-4"><strong>56</strong></div>
          </div>
          <div class="d-flex justify-content-between">
            <a href="#" class="btn btn-success"><i class="material-icons">date_range</i> Book Visit</a>
            <a href="#" class="btn btn-link-secondary"><i class="material-icons">bookmark_outline</i> Save</a>
          </div>
        </div>
      </div>
    </div>
  `);;
