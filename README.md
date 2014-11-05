# ember-cli-spinkit

Add a [SpinKit](https://github.com/tobiasahlin/SpinKit) loading spinner to your ember-cli project

## Install ##

```bash
npm install ember-cli-spinkit --save-dev
```

## Usage ##

```bash
ember generate spinkit-<name of spinner>
```

For example:
```bash
ember generate spinkit-double-bounce
```
Available Spinners [(Demo)](http://tobiasahlin.com/spinkit/)
- rotating-plane
- fading-circle
- double-bounce
- wave
- wandering-cubes
- pulse
- chasing-dots
- three-bounce
- circle
- cube-grid
- wordpress

In your template, presumably your [loading.hbs](http://emberjs.com/guides/routing/loading-and-error-substates/), include the spinner by adding

```handlebars
{{spinkit-spinner}}
```

## Color ##

By default the spinner color is `#333`.

Check the [SpinKit project](https://github.com/tobiasahlin/SpinKit) or use your browser's inspector to see which CSS classes you should overwrite.

Alternatively, change the color directly in the generated file `vendor/ember-cli-spinkit/styles/spinkit-spinner.css`.
