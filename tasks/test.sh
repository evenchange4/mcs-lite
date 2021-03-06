#!/bin/bash

set -e

# global linting
echo '💪  Start global linting';
npm run eslint
npm run stylelint
npm run flow

## Interface for each project
echo '💪  Start testing for each packages';
node_modules/.bin/lerna run test --concurrency 1

## Test for building demo page
echo '💪  Start testing for building demo page';
node_modules/.bin/lerna run build-storybook --scope mcs-lite-ui
node_modules/.bin/lerna run build --scope mcs-lite-mobile-web
node_modules/.bin/lerna run build --scope mcs-lite-introduction
