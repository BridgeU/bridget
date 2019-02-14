# bridget 💡
BridgeU’s style guide, based on Bootstrap.

This package is basically a wrapper around [Bootstrap][5] with our own spin.
We even started with a full import instead of [picking the components][6]
we’ll be using. This style guide is heavily under development, so please bare
with us and a fast changing codebase.


## To-do
- [x] Write a few base [stories][1] as a start
- [x] Set a page-wide [decorator][2] for better-looking Storybook pages
- [x] Export package for production
- [x] Export our Storybook as a [static app][0]
- [ ] Check [addons][4] and see if there is anything helpful there
  - https://github.com/storybooks/storybook/blob/next/addons/storysource
  - https://github.com/storybooks/storybook/tree/master/addons/info


## Features
- 📖 Previewable
- 🔁 Live reloading
- 📦 Exportable


## Install
Run the following commands on your computer:

1. `git clone git@github.com:BridgeU/bridget.git`
1. `cd bridget`
1. `npm install`
1. `npm run watch`

Your browser will open on [`http://localhost:9001`][0], where a local server
is running, keeping that page up to date. If you change any of the files at
`/src`, that page will update in a couple of seconds, allowing you to preview
your changes in almost real time.


## Export
Running `npm run build` will update `dist/` with our JavaScript and CSS, which
we should do every time we commit changes. This folder will contain the files
we’ll import from other projects and allow us to reuse this style guide.

## Deploying App
Running `npm run build-app` will create a `/public` folder with the compiled
whole application (if needed and once it's built, it can be run by
`npm run static-app`).

## Helpful links
- [Bridget - the story of a style guide][the-story]
- [Design system, style-guide and components][design-system]


[0]: http://localhost:9001
[1]: https://storybook.js.org/basics/writing-stories/
[2]: https://storybook.js.org/basics/writing-stories/#using-decorators
[3]: https://storybook.js.org/basics/exporting-storybook/
[4]: https://storybook.js.org/addons/addon-gallery/
[5]: https://getbootstrap.com/docs/4.3/getting-started/theming/
[6]: https://getbootstrap.com/docs/4.3/getting-started/theming/#importing
[the-story]: https://paper.dropbox.com/doc/Bridget-the-story-of-a-style-guide--AXfhcc9ueLVCadMh292KhdXIAg-Iu0YrK8VAKelUQPU2vwVB
[design-system]: https://paper.dropbox.com/doc/Design-system-style-guide-and-components--AXdr9oRQ_LYjUhpP4Fz89Cg8Ag-GjYKuPtF06IWRHFoQzYug
