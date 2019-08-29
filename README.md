# NexownFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



ng new Angular8 --style=scss
npm install @angular/material@8.1.1
npm install @angular/cdk@8.1.1 --save
npm install @ngrx/store@8.2.0 --save
npm install @types/faker@4.1.5 --save


ng g library global-modal --prefix gm
ng build global-modal

ng g library global-snackbar --prefix gs
ng build global-snackbar

#INSTALL JSON SERVER
npm install -g json-server
json-server --watch db.json

Default Repo: https://erniegh@dev.azure.com/erniegh/NexOwn-Revamp/_git/Frontend