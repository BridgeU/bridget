import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Navigation', module)
  .add('Primary', () => `
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
  .add('Secondary - dashboard', () => `
    <nav class="nav">
      <a class="nav-link active" href="#">Recommendations</a>
      <a class="nav-link" href="#">Shortlists</a>
      <a class="nav-link" href="#">Applications</a>
    </nav>
  `)
  .add('Secondary - schools', () => `
    <nav class="nav">
      <a class="nav-link active" href="#"><i class="material-icons">search</i> Find Schools</a>
      <a class="nav-link" href="#"><i class="material-icons">bookmark</i> Saved Schools</a>
    </nav>
  `);
