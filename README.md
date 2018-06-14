# Vue cli3 Storybook setup

This repo is a minimal setup for a vue cli3 project to use Storybook. 

Updated to work with latest @vue/cli 3.0.0-rc.1

# To run this repo directly

```
$ git clone https://github.com/davestaab/vue-cli3-storybook
$ yarn
$ yarn storybook
```
# To setup manually

## Assumptions
I assume the following versions
```
$ node -v 
v8.11.2

$ yarn -v
1.7.0
```

## Install Vue cli
```
yarn global add @vue/cli

vue --version
3.0.0-rc.1
```


## Manual Setup
To setup from scratch take the following steps

1. `vue create <folder-name>`
1. choose default preset (babel, eslint)
1. `cd <folder-name>`
1. `yarn add --dev babel-core@7.0.0-bridge.0`
1. `yarn add --dev @storybook/vue`
1. `yarn add --dev vue-template-compiler`
1. add storybook cmd to `package.json`
    ```
    "scripts": {
        "storybook": "start-storybook -p 9001 -c .storybook"
        ...
    }
    ```
1. add config for babel in `.storybook/.babelrc`
    1. [Babel config](.storybook/.babelrc)
1. add config for webpack in `.storybook/webpack.config.js`
    1. [Webpack config](.storybook/webpack.config.js)
1. add storybook config file in `.storybook/config.js`
    1. [Storybook config](.storybook/config.js)
1. add a story for component in `src/components/HelloWorld.story.js`
    1. [HelloWorld Story](src/components/HelloWorld.story.js)
1. Done! Run storybook
    1. `yarn storybook`

# To Run

* `yarn serve` - run the vue application
* `yarn storybook` - run storybook

# Status

Currently working with the following dependencies.

* @vue/cli 3.0.0-rc.1
* @storybook/vue 3.4.7
* babel-core 7.0.0-bridge.0
* vue-template-compiler 2.5.16
