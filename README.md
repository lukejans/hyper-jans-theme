![Hyper jans theme screenshot](screenshot.png)

<h1 align="center"><b>hyper-jans-theme</b></h1>

[![GitHub stars](https://img.shields.io/github/stars/lukejans/hyper-jans-theme.svg?style=social&label=Stars)](https://github.com/lukejans/hyper-jans-theme/stargazers) [![GitHub followers](https://img.shields.io/github/followers/lukejans.svg?style=social&label=Follow)](https://github.com/lukejans?tab=followers) [![Tweet for help](https://img.shields.io/twitter/follow/lukejanss.svg?style=social&label=Tweet%20@lukejanss)](https://twitter.com/lukejanss)

> Just a colorful dark theme built for [Vercel's](https://vercel.com/) terminal [Hyper.js](https://hyper.is/).

## Installation Options

Ensure you have [Hyper.js](https://hyper.is) terminal installed. If not, run the following command from your terminal.

```zsh
$ brew install --cask hyper
```

#### **Option 1:** Hyper plugin manager

Then run the following from the command line:

```zsh
$ hyper install hyper-jans-theme
```

#### **Option 2:** Manually

Open your `~/.hyper.js` configuration file and add `"hyper-jans-theme"` to your plugins section.

```js
  plugins: [...'hyper-jans-theme'],
```

Save changes made to `~./hyper.js`, reload your terminal and happy coding!

## My `~/.hyper.js` Configuration

```js
module.exports = {
  config: {
    fontSize: 13,
    // font family with optional fallbacks
    fontFamily: '"SF Mono", "Fira Code", monospace',
    // custom padding (CSS format, i.e.: `top right bottom left`)
    padding: '12px 30px 40px 30px',
    // hyperline configuration
    hyperline: {
      plugins: ['hostname', 'network', 'cpu', 'memory'],
    },
  },
  // a list of plugins to fetch and install from npm
  plugins: ['hyperline', 'hyper-pane'],
};
```

Here I use [SF Mono](https://developer.apple.com/fonts/) for my font with [Fira Code](https://fonts.google.com/specimen/Fira+Code) as a fallback for powerline icons. I also added some additional padding to accommodate for the [hyperline plugin](https://github.com/Hyperline/hyperline) I use.
