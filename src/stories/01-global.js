import { storiesOf } from '@storybook/html';

import '../app.js';

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
    <div class="d-flex align-items-center mb-4">
      <div class="p-4 mr-2 bg-primary text-white d-inline-block"></div><code>$primary</code> 
    </div>
    <div class="d-flex align-items-center mb-4">
      <div class="p-4 mr-2 bg-success text-white d-inline-block"></div><code>$success</code> 
    </div>
    <div class="d-flex align-items-center mb-4">
      <div class="p-4 mr-2 bg-secondary text-white d-inline-block"></div><code>$secondary</code> 
    </div>
  `);
