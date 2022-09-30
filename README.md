# PostCSS IPFS [<img src="http://postcss.github.io/postcss/logo.svg" alt="PostCSS" width="90" height="90" align="right">][PostCSS]

[PostCSS] plugin for replacing IPFS strings.

**Write this:**

```css
.foo {
  background-image: url(ipfs://Qmhash/path/to/file.png);
}

.bar {
  background-image: url(ipns://some.ipns.link/path/to/file.png);
}
```

**And get this:**

```css
.foo {
  background-image: url(https://ipfs.io/ipfs/Qmhash/path/to/file.png);
}

.bar {
  background-image: url(https://ipfs.io/ipns/some.ipns.link/path/to/file.png);
}
```

## Installation

`$ npm install postcss-ipfs`

## Usage

```JS
postcss([ require('postcss-ipfs') ])
```

See [PostCSS](https://github.com/postcss/postcss) docs for [examples regarding usage](https://github.com/postcss/postcss#usage).

## Options

### `gateway`

- Type: `string`
- Default: `https://ipfs.io/`

Gateway that will replace `ipfs://` links.

[PostCSS]: https://github.com/postcss/postcss
