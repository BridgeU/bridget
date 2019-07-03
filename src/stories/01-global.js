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
    <h2> Brand Colors </h2>
    <div class="d-flex justify-content-around">
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-primary text-white d-inline-block"></div><code>$primary</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-secondary text-white d-inline-block"></div><code>$secondary</code> 
      </div>
    </div>
    <h2> Neutral Colors </h2>
    <div class="row justify-content-around">
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-white text-white d-inline-block"></div><code>$white</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-light-gray-1 text-white d-inline-block"></div><code>$light-gray-1</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-light-gray-2 text-white d-inline-block"></div><code>$light-gray-2</code> 
      </div>
    </div>
    <div class="row justify-content-around">
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-dark-gray-1 text-white d-inline-block"></div><code>$dark-gray-1</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-dark-gray-2 text-white d-inline-block"></div><code>$dark-gray-2</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-dark-gray-3 text-white d-inline-block"></div><code>$dark-gray-3</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-black text-white d-inline-block"></div><code>$black</code> 
      </div>
    </div>
    <h2> Utility Colors </h2>
    <div class="row justify-content-around">
       <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-success text-white d-inline-block"></div><code>$success</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-danger text-white d-inline-block"></div><code>$danger</code> 
      </div>
      <div class="d-flex align-items-center mb-4">
        <div class="p-4 mr-2 bg-inactive text-white d-inline-block"></div><code>$inactive</code> 
      </div>
    </div>
  `);
