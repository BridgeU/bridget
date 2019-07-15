import { storiesOf } from '@storybook/html';

import '../app.js';
import {
  cardinalRed,
  flamingoRed,
  finchBlue,
} from '../../.storybook/storybook.scss'

storiesOf('Global', module)
  .add('Typography', () => `
    <p class="">World-class university and careers guidance for global secondary schools</p>
    <br />
    <p class="">World-class university and careers guidance for global secondary schools</p>
    <br />
    <p class="">World-class university and careers guidance for global secondary schools</p>
    <br />
    <p class="">World-class university and careers guidance for global secondary schools</p>
    <br />
    <p class="">World-class university and careers guidance for global secondary schools</p>
    <br />
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
