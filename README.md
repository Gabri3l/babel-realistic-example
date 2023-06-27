# babel-realistic-example

Just run

```shell
npm install
```

now you can make any changes to the `index.js` file and use different plugins that you can specify in `.babelrc` (make sure to install the relative plugin first). You can generate the transpiled source with sourcemaps as follows

```shell
npx babel index.js --out-file compiled.js --source-maps
```
