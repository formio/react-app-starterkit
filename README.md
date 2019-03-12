Form.io React Starter Application
---------------------------------
This is a starter application that uses React, Bootstrap, Webpack, and Form.io to create a powerful Serverless application.

Installation
---------
 - Download this application within your local machine and then type the following.
```
npm install
```

 - If you have not already, create a project on [https://portal.form.io](https://portal.form.io). You can import the ```src/project.json``` file to add all the forms and resources needed for this project.

 - Modify the ```src/config.js``` file to point the PROJECT_URL variable to the project you created in form.io.

Running
-----------
You can develop within this application by typing the following

```
npm start
```

This will launch the application locally @ https://localhost:3000. Now, whenever you make changes, those will be directly reflected within the launched application.


Building
------------
Once you have your application developed, it is now time to build the application for deployment. This can be done by typing the following.

```
npm run build
```

This will generate the **build** folder which you can then use to install within any webserver, Github Page, an Amazon S3 bucket, etc.

Commands
------------
To see all available commands type the following

```
npm run
```
