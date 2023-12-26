# HA Custom Card Starter

This is a starter repository for creating a custom card for HA (HA).

It uses the following technologies:

- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/) - for building and bundling
- [Lit](https://lit.dev) - a lightweight web component library

This file can me used as a started for creating your own custom card, using these technologies.

It also defines node build scripts to enable you to build and watch the TS code, start a HA instance (in a container) that will load and use your custom card code.

The repository defined a HA custom card definition [`my-lit-card`](src/card.ts) and the associated HA custom card visual editor [`my-lit-card-editor`](src/editor.ts).

The cards are custom component are both registered with ha in the [`main.ts`](src/main.ts) file.

## Repository Structure

### `/src` - Custom Card Source Code

This is where all the source code for the card sits.

The [rollup configuration](./rollup.config.mjs) expectes that the entry code to the card is at `src\main.ts`

There are 4 files in the source code:
| File | Description |
|-- |--
| `main.ts` | This is the main entry point to the module It brings the `card`, `editor` and `common` files together and also has the code to register the custom components with HA
| `card.ts` | Defined the Main Card class |
| `editor.ts` | Defines the Card Editor class |
| `common.ts`| Defines some common constants and interfaces. |

### `/dist`

This is where the build targets will save all generated files.

The name of the generated file can be changed in the [rollup configuration](./rollup.config.mjs) but changing the line:

`const output_file = "my-lit-card.js";`

**Note:** If you change output file name, you should also change the name in the [HA Config File](.hass_dev/configuration.yaml) to enable you to test in HA.

### `/.hass-dev`

This folder contains a small set of configuration files for running the HA Test Server. The folder maps directly to the `/config` folder in the test HA docker container instance, so you can make as many changes as you need to get your custom-card displayed.

To load your custom card's code, you should change `frontend:` setting in [`configuration.yaml`](.hass-dev/configuration.yaml) to be the same as the `output_file` setting in the [rollup configuration](./rollup.config.mjs)

As a default this is:

```
  extra_module_url:
    - http://localhost:4000/my-lit-card.js
```

**NOTE:** the `http://localhost:4000` server is started using the `watch` node script, which serves up the `/dist` folder.

The HA configuration also sets up a `Showcase` Dashboard which you can use to showcase your custom card. The definition of the view for can be found in `.hass_dev/views/my-lit-card-preview.yaml`.

If you need to setup any entities to showcase your custom card, you can define them by adding them as a `package` in `.hass-dev\packages`. See `.hass_dev/packages/number.yaml` for an example

## Using HA custom components in your card or editor

If you are wanting to use spe, of the HA custom components in your card or editor, you have to jump though some hoops at the time of writing.

The biggest problem with using these components is that they are not necessarily loaded into the browser at the time you want to use them. They are 'lazy loaded' by HA so that not all components are loaded when you first start load HA in your browser. This aids in speeding up loading of HA.

There is a good write-up [here](https://github.com/thomasloven/hass-config/wiki/PreLoading-Lovelace-Elements) that shows you how to do it.

In this repo we use the `EntityPicker` class in the editor to select the entity from which we want ot display the value in the card.

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
Starts `rollup` in watch mode to "transpile" any changes you make the any TypeScript Files. It also starts up a local server on port `4000` to serve the transpiled files to the test HA'.
Note that sometimes `rollup` can be a little fickle. I you make some major structural changes, or just some very incorrect TS syntax, it will stop running. You will then have to restart the `watch` script.

**`start:hass`**
Starts the test HA docker container instance. This should be used in conjunction with the `watch` script.

The test HA server is available at [`http://0.0.0.0:8123`](http://0.0.0.0:8123). You will need to go through 3-4 screens of setup when you tun it the first time.
Next time you should be able to just log in, remembering to check the `Keep me logged in` box as you will probably be reloading the page a lot.

**`format`**
Formats your TS code with `Prettier`

## Packaging

There is one node script defined to generate a production version of the your custom card code

**`watch`**
It uses the `rollup_terser` library to compact you code even further!
