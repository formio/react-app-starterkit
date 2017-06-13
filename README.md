Form.io React Starter Application
---------------------------------
This is a starter application that uses React, Bootstrap, Webpack, Gulp, and Form.io to create a powerful Serverless application platform.

Installation
---------
Download this application within your local machine, and then type the following.

```
npm install
```

Running
-----------
You can develop within this application by typing the following

```
npm run serve
```

This will launch the application locally @ https://localhost:3000. Now, whenever you make changes, those will be directly reflected within the launched application.


Building
------------
Once you have your application developed, it is now time to build the application for deployment. This can be done by typing the following.

```
npm run build
```

This will generate the **dist** folder which you can then use to install within any webserver, Github Page, an Amazon S3 bucket, etc.

Application Generation
----------
This application was generated using the amazing [Fountain.js](http://fountainjs.io/) system. To build your own, follow these steps.

  - Install Yeoman
    `npm install -g yo`
  - Install Fountain.js Webapp Generator
    `npm install -g generator-fountain-webapp`
  - Create a new folder, and then generate your webapp.
    `mkdir webapp && cd webapp`
  - Generate the application.
    `yo fountain-webapp`
  - Follow the on-screen instructions providing the following input.
    - `Which JavaScript framework do you want?` **React**
    - `Which module management do you want?` **Webpack with NPM**
    - `Which JS preprocessor do you want?` **ES2015 today with Babel**
    - `Which CSS preprocessor do you want?` **SASS**
    - `Which Continuous Integration platform do you want?` **none**
    - `Do you want a sample app?` **A working landing page**
    - `Would you like a router?` **React router**
  - Install Bootstrap SAAS, Bootswatch, and Form.io
    `npm install --save bootstrap-sass bootswatch react-formio`
  - Make the following changes to get started.
    - https://github.com/formio/react-app-starterkit/commit/1a5ca83371438535d7420e6087da7b85bc71aedc
    - https://github.com/formio/react-app-starterkit/commit/5d57fd4c70f4e1b836d46b4c4aeb549dfffbe183


Have fun!

- The Form.io Team