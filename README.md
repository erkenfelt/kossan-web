# Kossan

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

## Requirements

To be able to compile and run the project locally you need to install nodejs v10+. This will also install the nodejs package manager (npm).
https://nodejs.org/en/download/

The project uses yarn to download and install packages. Download and install yarn.
https://classic.yarnpkg.com/en/docs/install#windows-stable

Since this is an angular project we use angular cli to do cool stuff.
Run `npm install -g @angular/cli` to install it globally.


## Project structure

src
    /app
        /blocks - Reusable components used in the application
        /layout - Header and footer
        /pages - Each page have its' own folder
    /assets - Images, fonts, contact-form script, icons, etc.

## Using git

The project uses git as versioning system, and if you like that you could use it as well. 

## Development server

Run `yarn` to install packages.

Run `yarn start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `yarn build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Deploy

Today I use FileZille to FTP the files in the `dist/` directory to the webserver. This can probably be done more smoothly by using some other tool, but this works for me.
https://filezilla-project.org/

