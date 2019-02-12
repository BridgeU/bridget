import { configure, addDecorator } from '@storybook/html';

const req = require.context('../src/stories', true, /\.js$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

addDecorator(story => `<div class="container m-5">${story()}</div>`);
configure(loadStories, module);
