import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Navigation', module)
  .add('Primary nav', () => `
    <nav class="navbar navbar-expand-sm navbar-dark bg-primary py-3">
      <a class="navbar-brand" href="#">
        <img src="/logo.svg" width="22" height="22" alt="U" class="d-inline-block align-baseline" />
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#"><i class="material-icons md-16">dashboard</i> Dashboard <span class="sr-only">(current)</span></a>
          <a class="nav-item nav-link" href="#"><i class="material-icons">account_balance</i> Schools</a>
        </div>
      </div>
    </nav>
  `)
  .add('Secondary nav - dashboard', () => `
    <nav class="nav">
      <a class="nav-link active" href="#">Recommendations</a>
      <a class="nav-link" href="#">Shortlists</a>
      <a class="nav-link" href="#">Applications</a>
    </nav>
  `)
  .add('Secondary nav - schools', () => `
    <nav class="nav">
      <a class="nav-link active" href="#"><i class="material-icons">search</i> Find Schools</a>
      <a class="nav-link" href="#"><i class="material-icons">bookmark</i> Saved Schools</a>
    </nav>
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
