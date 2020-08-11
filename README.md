## Felix

	# This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.3.
	# Node Version 10.16.0
	# Angular Version 8.1.3
	# Angular-cli Version 8.1.2
	# Repo: https://github.com/jaypee-erni/felix.git


## TO START THE PROJECT LOCALLY
	# npm install
	# npm run packages:build
	# ng serve
	# Open in the browser: http://localhost:4200/
	
## Build the code to production server
	# ng build --prod
	# Go to <project_path>/dist/Felix
	# Coppy all files and paste to your web server

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


## Packages installed
ng g library global-modal --prefix gm
ng g library global-snackbar --prefix gs

##D3 Dounut basis
	# http://embed.plnkr.co/YICxe0/
	# https://itnext.io/add-interactivity-to-your-charts-in-angular-2-applications-with-d3-js-78fd3718e6fb#fromHistory
	# https://dev.to/benjaminadk/basketball-stats-through-d3-react-4m10

	
## SSH Key needed to access the repo - Creating rsa key
	# Open Git bash then : ssh-keygen -t rsa -b 4096 -C "users-email"
	# Make sure to remember the passphrase
	# Open the .pub file created and send it to the repo owner

## Adding rsa key to the ssh agent
	# Open/Create the folder you want the project to be in
	# Open git bash and type: eval $(ssh-agent -s)
	# ssh-add name-of-the-private-key-that-doesnt-have-extensionname
	# enter the passphrase
	# try pulling: git pull git@github.com:jaypee-erni/felix.git
	# even pull is a success there are instances that the origin is not yet added so try: git remote add origin git@github.com:jaypee-erni/felix.git
	



