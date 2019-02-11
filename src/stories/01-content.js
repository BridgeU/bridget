import { storiesOf } from '@storybook/html';

import '../app.js';

storiesOf('Content', module)
  .add('Headings and paragraphs', () => `
    <table class="table">
      <thead>
        <tr>
          <th>Heading</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <p><code class="highlighter-rouge">&lt;h1&gt;&lt;/h1&gt;</code></p>
          </td>
          <td><span class="h1">h1. Bootstrap heading</span></td>
        </tr>
        <tr>
          <td>
            <p><code class="highlighter-rouge">&lt;h2&gt;&lt;/h2&gt;</code></p>
          </td>
          <td><span class="h2">h2. Bootstrap heading</span></td>
        </tr>
        <tr>
          <td>
            <p><code class="highlighter-rouge">&lt;h3&gt;&lt;/h3&gt;</code></p>
          </td>
          <td><span class="h3">h3. Bootstrap heading</span></td>
        </tr>
        <tr>
          <td>
            <p><code class="highlighter-rouge">&lt;h4&gt;&lt;/h4&gt;</code></p>
          </td>
          <td><span class="h4">h4. Bootstrap heading</span></td>
        </tr>
        <tr>
          <td>
            <p><code class="highlighter-rouge">&lt;h5&gt;&lt;/h5&gt;</code></p>
          </td>
          <td><span class="h5">h5. Bootstrap heading</span></td>
        </tr>
        <tr>
          <td>
            <p><code class="highlighter-rouge">&lt;h6&gt;&lt;/h6&gt;</code></p>
          </td>
          <td><span class="h6">h6. Bootstrap heading</span></td>
        </tr>
      </tbody>
    </table>
  `);
