import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Components', module)
  .add('Icons', () => `
    <div class="h1">
        <i class="material-icons">face</i> Next to some title
    </div>
    <hr />
    <div class="h2">
        <i class="material-icons">face</i> Next to a subtitle
    </div>
    <hr />
    <i class="material-icons">face</i> and some text next to it
    <hr />
    <span>
        <i class="material-icons">face</i>
        inside a span
    </span>
    <hr />
    <button type="button" class="btn btn-primary">
        <i class="material-icons">bookmark</i>
        Progress
    </button>
    <button type="button" class="btn btn-success" style="font-weight: 700;">
        <i class="material-icons">check</i>
        SAVE
    </button>
  `);
