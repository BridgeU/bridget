import { storiesOf } from '@storybook/html';

import '../app.js';
import {
  cardinalRed,
  flamingoRed,
  finchBlue,
} from '../../.storybook/storybook.scss'

storiesOf('Global', module)
  .add('Typography', () => `
    <h1 class="h1">h1. World-class university and careers guidance</h1>
    <br />
    <h2 class="h2">h2. World-class university and careers guidance</h2>
    <br />
    <h3 class="h3">h3. World-class university and careers guidance</h3>
    <br />
    <h3 class="h4">h4. World-class university and careers guidance</h4>
    <br />
    <h3 class="h5">h5. World-class university and careers guidance</h5>
    <br />
    <h3 class="h6">h6. World-class university and careers guidance</h6>
    <br />
    <p>
      <strong>Note:</strong> Just as
      <a class="underline" href="https://getbootstrap.com/docs/4.3/content/typography/"><u>Bootstrap provides</u></a>,
      we have styled <code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>
      to allow us to use the most semantic elements whenever possible,
      but the corresponding <code>.h1</code> through <code>.h6</code> classes
      are also available, for when you want to match the font styling of a
      heading but cannot use the associated HTML element.
    </p>
  `)
  .add('Colors', () => `
    <h3>Brand colors</h3>

    <div class="card storybook__card float-left mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${cardinalRed}"></div>
      <div class="card-body">
        <span class="card-text">${cardinalRed}</span>
        <pre class="card-text font-weight-bold">$cardinal-red</pre>
      </div>
    </div>
    <div class="card storybook__card float-left mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${flamingoRed}"></div>
      <div class="card-body">
        <span class="card-text">${flamingoRed}</span>
        <pre class="card-text font-weight-bold">$flamingo-red</pre>
      </div>
    </div>
    <div class="card storybook__card float-left mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${finchBlue}"></div>
      <div class="card-body">
        <span class="card-text">${finchBlue}</span>
        <pre class="card-text font-weight-bold">$finch-blue</pre>
      </div>
    </div>
  `);
