# Just Another Text Editor (J.A.T.E)

## Description

A modern web-based text editor application, J.A.T.E allows developers to create notes or code snippets even without an internet connection. Built with next-gen JavaScript and bundled using webpack, this application also uses IndexedDB for reliable storage and retrieval of notes for later use.

The application can be installed on your desktop for easy access, and it uses a service worker for efficient loading and offline functionality.

## Features

- JavaScript files bundled using webpack
- Generated HTML file, service worker, and manifest file via webpack plugins
- Next-gen JavaScript support for the latest browser capabilities
- IndexedDB for immediate database storage upon entering content
- Installable as a desktop application
- Registered service worker for precaching of static assets and efficient loading
- Deployment-ready with build scripts for Heroku

## Installation

- Clone the repository and navigate to the project folder.
- Run `npm install` to install dependencies.
- To start the application locally, run `npm run start`.
- To build the application for production, run `npm run build`.

## Usage

- Open the application in a web browser.
- Type your notes or code snippets in the text editor.
- Your content is automatically saved when you click outside the DOM window.
- If you close and reopen the text editor, your content is retrieved from the IndexedDB.
- To install the application on your desktop, click the Install button.

## Deployment

- Ensure you have a Heroku account and have installed the Heroku CLI.
- Run `heroku create` to create a new application on Heroku.
- Push your code to the Heroku remote using `git push heroku main`.
- Your application is now live on Heroku!

## Live Demo

Visit the deployed application here: [Live Demo](https://text-editor-landon-7ee1ee0670db.herokuapp.com/)
