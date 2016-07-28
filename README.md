# ember-cli-spinkit

Add [SpinKit](https://github.com/tobiasahlin/SpinKit) loading spinners to your ember-cli project

## Install ##

```bash
ember install ember-cli-spinkit
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
- folding-cube
- double-bounce
- wave
- wandering-cubes
- pulse
- chasing-dots
- three-bounce
- circle
- cube-grid

In your template, presumably your [loading.hbs](http://emberjs.com/guides/routing/loading-and-error-substates/), include the spinner by adding

```handlebars
{{spinkit-double-bounce}}
```

**Note**: You can have multiple spinners in your project! You are not limited to one spinner. Simply call `ember generate spinkit-<name of spinner>` multiple times.

## Color ##

By default the spinner color is `#333`.

Check the [SpinKit project](https://github.com/tobiasahlin/SpinKit) or use your browser's inspector to see which CSS classes you should overwrite.

Alternatively, change the color directly in the generated file `vendor/ember-cli-spinkit/styles/spinkit-<name of spinner>.css`.
