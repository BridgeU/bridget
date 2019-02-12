import { configure, addDecorator } from '@storybook/html';

const req = require.context('../src/stories', true, /\.js$/);
const loadStories = () => req.keys().forEach(filename => req(filename));

const storyAsString = (story) => `<div class="container m-5">${story}</div>`;
const storyAsNode = (story) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'container m-5';
  wrapper.appendChild(story);
  return wrapper;
};

addDecorator(story => {
  const tale = story();
  return typeof tale === "string" ? storyAsString(tale) : storyAsNode(tale);
});
configure(loadStories, module);
