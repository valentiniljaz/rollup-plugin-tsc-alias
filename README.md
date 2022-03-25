# Rollup plugin: tsc-alias

Replace alias paths with relative paths after typescript compilation during rollup bundling

## Installation

### npm

`npm install rollup-plugin-tsc-alias --save-dev`

### yarn

`yarn add rollup-plugin-tsc-alias --dev`

### Example

To run `tsc-alias` after TS built add the following to `rollup.config.js`:

```JavaScript
import tscAlias from 'rollup-plugin-tscAlias';

export default {
  entry: './src/index.ts',
  output: {
    dest: './dist/bundle.js',
  },
  plugins: [
    tscAlias()
  ]
};
```

## License

MIT
