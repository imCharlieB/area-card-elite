# Home Assistant Custom Card Starter

This is a starter repository for creating a custom card for Home Assistant.

It uses the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/) - for building and bundling
- [Lit](https://lit.dev) - a lightweight web component library

This file can me used as a started for creating your own custom card, using these technologies.

It also defines node build scripts to enable you to build and watch the TS code, start a home assistant instance (in a container) that will load and use your custom card code.

The repository defined a Home Assistant custom card definition [`my-lit-card`](src/card.ts) and the associated Home Assistant custom card visual editor [`my-lit-card-editor`](src/editor.ts).

The cards are custom component are both registered with ha in the [`main.ts`](src/main.ts) file.

## Repository Structure

### `/src` - Custom Card Source Code

This is where all the source code for the card sits.

The [rollup configuration](./rollup.config.mjs) expectes that the entry code to the card is at `src\main.ts`

### `/dist`

This is where the build targets will save all generated files.

The name of the generated file can be changed in the [rollup configuration](./rollup.config.mjs) but changing the line:

`const output_file = "my-lit-card.js";`

**Note:** If you change output file name, you should also change the name in the [Home Assistant Config File](.hass_dev/configuration.yaml) to enable you to test in Home Assistant.

### `/.hass-dev`

This folder contains a small set of configuration files for running the Home Assistant Test Server. The folder maps directly to the `/config` folder in the test Home Assistant docker container instance, so you can make as many changes as you need to get your custom-card displayed.

To load your custom card's code, you should change `frontend:` setting in [`configuration.yaml`](.hass-dev/configuration.yaml) to be the same as the `output_file` setting in the [rollup configuration](./rollup.config.mjs)

As a default this is:

```
  extra_module_url:
    - http://localhost:4000/my-lit-card.js
```

**NOTE:** the `http://localhost:4000` server is started using the `watch` node script, which serves up the `/dist` folder.

The Home Assistant configuration also sets up a `Showcase` Dashboard which you can use to showcase your custom card. The definition of the view for can be found in `.hass_dev/views/my-lit-card-preview.yaml`.

If you need to setup any entities to showcase your custom card, you can define them by adding them as a `package` in `.hass-dev\packages`. See `.hass_dev/packages/number.yaml` for an example

## Using it...

The easiest way to use this repo is to clone it to your development machine and create a new git repo from it.

Then make changes as you see fit for your custom component!

e.g.:

```bash
> export MY_CARD_FOLDER="my_new_custom_card"
> git clone https://github.com/grillp/ha-custom-card-rollup-ts-lit-starter.git $MY_CARD_FOLDER
> cd $MY_CARD_FOLDER
> rm -rf .git
> git init
> git add * .gitignore .hass_dev
> git commit -m "Initial Commit"
```

**Note:** change `<my-new-custom-card>` to be your own repo

Then do the necessary to push the repo to your choice of Git Hosting service.

## Installation

1. Use you favourite node version manager to install an `LTS` version of Node.js (nvm/n/fvm)
2. Run `npm i` to install dependencies

## Development

There are some node scripts defined that you can use during development:

**`watch`**
Starts `rollup` in watch mode to "transpile" any changes you make the any TypeScript Files. It also starts up a local server on port `4000` to serve the transpiled files to the test Home Assistant'.
Note that sometimes `rollup` can be a little fickle. I you make some major structural changes, or just some very incorrect TS syntax, it will stop running. You will then have to restart the `watch` script.

**`start:hass`**
Starts the test Home Assistant docker container instance. This should be used in conjunction with the `watch` script.

The test Home Assistant server is available at [`http://0.0.0.0:8123/onboarding.html`](http://0.0.0.0:8123/onboarding.html)

**`format`**
Formats your TS code with `Prettier`

## Packaging

There is one node script defined to generate a production version of the your custom card code

**`watch`**
It uses the `rollup_terser` library to compact you code even further!
