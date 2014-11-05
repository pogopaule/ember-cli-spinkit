# ember-cli-spinkit

Add [SpinKit](https://github.com/tobiasahlin/SpinKit) spinners to your ember-cli project

## Install ##

``bash
npm install ember-cli-spinkit --save-dev
``

## Usage ##

``bash
ember generate spinkit-<name of spinner>
``

For example:
``bash
ember generate spinkit-double-bounce
``
Available Spinners [(Demo)](https://github.com/tobiasahlin/SpinKit)
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

In your template, presumably `loading.hbs` include the spinner by adding

``handlebars
{{spinkit-spinner}}
``

## Color ##

By default the spinner color is `#333`.

Check the [SpinKit project](https://github.com/tobiasahlin/SpinKit) or use your browser's inspector to see which CSS classes you should override.

Alternatively, change the color directly in `vendor/ember-cli-spinkit/styles/spinkit-spinner.css`
