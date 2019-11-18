import { storiesOf } from '@storybook/html';

import '../app.js';
import {
  cardinalRed,
  finchBlue,
  parrotGreen,
  ceruleanBlue,
  gray1,
  gray2,
  gray3,
  gray5,
  gray7,
  gray9,
} from '../../.storybook/storybook.scss'

storiesOf('Global', module)
  .add('Introduction', () => `
    <div>

      <p>Welcome to <strong>Bridget</strong>. This is a basic introduction to how to use this design system efficiently.</p>

      <p>Bridget is based on Bootstrap. So, it has lots of components and lot utility classes inbuilt. But our products will need only a subset of what Bootstrap provides. Bridget will define guidelines for the components and classes we use from Bootstrap, and hence this styleguide will only include examples of components we use.</p>

      <p>The style guide is divided into 2 sections - <strong>Global</strong> and <strong>Components</strong></p>

      <p><strong>Global</strong> - This section defines the style guidelines and contains examples of the relevant Bootstrap utility classes. But most of these styles should ideally be a part of the components themselves. In exceptions, use the recommended utility classes accordingly</p>

      <p><strong>Components</strong> - This section contains all the components we use in our products, and their variations. Ultimately, at least 80% of the front-end should be built from just these components</p>

      <p>As a developer, if you encounter a style/design that isn't a part of this styleguide, get in touch with the designer</p>

    </div>
  `)
  .add('Colors', () => `

    <h4>Brand colors</h4>

    <div class="card storybook__card d-inline-block mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${cardinalRed}"></div>
      <div class="card-body">
        <span class="card-text">${cardinalRed}</span>
        <pre class="card-text font-weight-bold">$cardinal-red</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${finchBlue}"></div>
      <div class="card-body">
        <span class="card-text">${finchBlue}</span>
        <pre class="card-text font-weight-bold">$finch-blue</pre>
      </div>
    </div>

    <div class="mb-5"></div>

    <h4>Action colors</h4>

    <div class="card storybook__card d-inline-block mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${parrotGreen}"></div>
      <div class="card-body">
        <span class="card-text">${parrotGreen}</span>
        <pre class="card-text font-weight-bold">$parrot-green</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${ceruleanBlue}"></div>
      <div class="card-body">
        <span class="card-text">${ceruleanBlue}</span>
        <pre class="card-text font-weight-bold">$cerulean-blue</pre>
      </div>
    </div>

    <div class="mb-5"></div>

    <h4>Grays</h4>

    <div class="card storybook__card d-inline-block mr-3 mb-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${gray1}"></div>
      <div class="card-body">
        <span class="card-text">${gray1}</span>
        <pre class="card-text font-weight-bold">$gray-100</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3 mb-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${gray2}"></div>
      <div class="card-body">
        <span class="card-text">${gray2}</span>
        <pre class="card-text font-weight-bold">$gray-200</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3 mb-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${gray3}"></div>
      <div class="card-body">
        <span class="card-text">${gray3}</span>
        <pre class="card-text font-weight-bold">$gray-300</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3 mb-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${gray5}"></div>
      <div class="card-body">
        <span class="card-text">${gray5}</span>
        <pre class="card-text font-weight-bold">$gray-500</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3 mb-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${gray7}"></div>
      <div class="card-body">
        <span class="card-text">${gray7}</span>
        <pre class="card-text font-weight-bold">$gray-700</pre>
      </div>
    </div>

    <div class="card storybook__card d-inline-block mr-3 mb-3">
      <div class="card-img-top storybook__card-img-top" style="background: ${gray9}"></div>
      <div class="card-body">
        <span class="card-text">${gray9}</span>
        <pre class="card-text font-weight-bold">$gray-900</pre>
      </div>
    </div>

    <div>Bootstrap offers 9 shades of gray. But, in our products we will use only the 6 shades above. </div>
  `)
  .add('Typography', () => `
    <p class="mb-5">We use the following font-sizes in our products. In most cases, the font-size should be a part of the component's CSS. If a piece of text doesn't have a specific class, use a font-size utility class to set the font-size</p>

    <div class="font-size-12">Hogwart school of Witchcraft and Wizardry</div>
    <code class="d-block mb-5">.font-size-12 • $font-size-12 • 12px</code>

    <div class="font-size-14">Hogwart school of Witchcraft and Wizardry</div>    
    <code class="d-block mb-5">.font-size-14 • $font-size-14 • 14px</code>

    <div class="font-size-16">Hogwart school of Witchcraft and Wizardry</div>    
    <code class="d-block mb-5">.font-size-16 • $font-size-16 • 16px</code>

    <div class="font-size-18">Hogwart school of Witchcraft and Wizardry</div>    
    <code class="d-block mb-5">.font-size-18 • $font-size-18 • 18px</code>

    <div class="font-size-20">Hogwart school of Witchcraft and Wizardry</div>    
    <code class="d-block mb-5">.font-size-20 • $font-size-20 • 20px</code>

    <div class="font-size-24">Hogwart school of Witchcraft and Wizardry</div>    
    <code class="d-block mb-5">.font-size-24 • $font-size-24 • 24px</code>
  `)
  .add('Spacing', () => `
    <p class="mb-5">Bootstrap offers a lot of <a href="https://getbootstrap.com/docs/4.3/utilities/spacing/">utility classes</a> for margin and padding.</p>

    <h4>Guidelines</h4>

    <ul>
      <li>Always set margin to the right or bottom, using <code>.mr-*</code> or <code>.mb-*</code> classes</li>
      <li>Always set padding equally along the axes, using <code>.px-*</code> or <code>.py-*</code> or <code>.p-*</code> classes</li>
      <li>Use only variations: <code>.p-0</code>, <code>.p-3</code>, <code>.p-4</code>, <code>.p-5</code></li>
    </ul>

    <div class="mb-5"></div>

    <h4>Examples</h4>
    <p>Coming soon...</p>
  `)
  .add('Shadows', () => `
    <p class="mb-5">Bootstrap offers <a href="https://getbootstrap.com/docs/4.3/utilities/shadows/">utility classes</a> for different shadows.</p>

    <h4>Guidelines</h4>

    <ul>
      <li>Most shadows should be set at the component level. We should never have to set shadows using these utility classes</li>
      <li>Never remove a shadow by using <code>.shadow-none</code></li>
      <li><code>.shadow-sm</code> for cards and other static compoennts on the page</li>
      <li><code>.shadow</code> for dropdowns, popovers and other transient components</li>
    </ul>

    <div class="mb-5"></div>

    <h4>Examples</h4>
    <p>Coming soon...</p>
  `)
  .add('Border radii', () => `
    <p class="mb-5">Bootstrap offers <a href="https://getbootstrap.com/docs/4.3/utilities/borders/">utility classes</a> for setting borders and border radii.</p>


    <h4>Guidelines</h4>

    <ul>
      <li>We should never use <code>.border-*</code> to set individual borders</li>
      <li>Border radii should be set at the component level</li>
      <li>Use <code>.rounded-sm</code> for ... and ...</li>
      <li>Use <code>.rounded-lg</code> for ... and ...</li>
    </ul>

    <div class="mb-5"></div>

    <h4>Examples</h4>
    <p>Coming soon...</p>
  `);
