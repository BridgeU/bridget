# bridget 💡
BridgeU’s style guide


## To-do
- [x] Write a few base [stories][1] as a start
- [x] Set a page-wide [decorator][2] for better-looking Storybook pages
- [ ] Export package for production
- [ ] Export our Storybook as a [static app][0]


## Features
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
_This part is still missing, but it will be something like `npm run build` and
we’ll have a nice, exportable package to put on NPM or something like it._


[0]: http://localhost:9001
[1]: https://storybook.js.org/basics/writing-stories/
[2]: https://storybook.js.org/basics/writing-stories/#using-decorators
[3]: https://storybook.js.org/basics/exporting-storybook/
