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
import tscAlias from 'rollup-plugin-tsc-alias';

export default {
  entry: './src/index.ts',
  output: {
    dest: './dist/bundle.js',
  },
  plugins: [
    tscAlias({
      // OPTIONS
    })
  ]
};
```

All the available options:

<table>
  <thead>
  <tr>
    <th>Option</th>
    <th>Description</th>
    <th>Default Value</th>
  </tr>
  </thead>
  <tbody>
    <tr>
      <td>configFile</td>
      <td>path to tsconfig.json</td>
      <td><code>'tsconfig.json'</code></td>
    </tr>
    <tr>
      <td>watch</td>
      <td>Observe file changes</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>outDir</td>
      <td>Run in a folder leaving the "outDir" of the tsconfig.json (relative path to tsconfig)</td>
      <td><code>tsconfig.compilerOptions.outDir</code></td>
    </tr>
    <tr>
      <td>declarationDir</td>
      <td>Works the same as outDir but for declarationDir</td>
      <td><code>tsconfig.compilerOptions.declarationDir</code></td>
    </tr>
    <tr>
      <td>resolveFullPaths</td>
      <td>Attempt to replace incomplete import paths (those not ending in <code>.js</code>) with fully resolved paths (for ECMAScript Modules compatibility)</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>silent</td>
      <td>Reduced terminal output. This is a deprecated option and no longer has any effect.</td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td>verbose</td>
      <td>Additional information is output to the terminal</td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td>replacers</td>
      <td>Files to import as extra replacers <a href="https://github.com/justkey007/tsc-alias/discussions/73">More info</a></td>
      <td><code>[]</code></td>
    </tr>
    <tr>
      <td>output</td>
      <td>The output object tsc-alias will send logs to.</td>
      <td><code>new Output(options.verbose)</code></td>
    </tr>
  </tbody>
</table>

## Author

This project is maintained by [Valentin Iljaž](https://github.com/valentiniljaz).

## License

MIT

## See also

If you find this Rollup plugin useful, you might also be interested in my other project, [Webacus](https://webacus.dev).

<p>
  <a href="https://webacus.dev" title="Webacus">
    <img src="https://webacus.dev/imgs/icons/webacus_square_logo.jpg" alt="Webacus" width="100px" style="float: left; margin-right: 8px;">
  </a>
  Webacus is the all-in-one toolkit designed to streamline the workflow of web developers. It solves the common problem of needing to quickly perform micro-tasks like encoding/decoding strings or formatting data by providing a unified platform with over 120 interconnected tools. Instead of searching for individual online tools, developers can access everything they need within Webacus, benefiting from a consistent interface and the ability to chain operations together for complex tasks. This local-first approach ensures speed, security, and privacy, allowing developers to focus on coding rather than managing tools.
</p>