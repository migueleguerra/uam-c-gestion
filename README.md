# UAM-C Gestión

It is a web application that helps make the courses and teachers schedule for each trimester for each coordination of the [Universidad Autónoma Metropolitana - Cuajimalpa](http://www.cua.uam.mx). The user that operates this application will have the option to add or delete courses and professors directly on their local database system, using a user interface to do it. Later, this information will help create the schedule and download this tables as .xls file. 

## Prerequisites

These are the programs you need to have installed in you local computer:

* [Node.js](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/)
* [GIT](https://git-scm.com/)
* [NPM](https://www.npmjs.com/)

### Installing

A step by step series of examples that tell you how to get a development env running.

Download by clicking the download button or clone the Github repertory using the following command:
```
$ git clone https://github.com/Guetop/uam-c-gestion.git
```
Navigate to the folder and run the following command to install all the dependencies:
```
$ npm install
```
Run Node.js (make sure you have MongoDB running)
```
$ node server.js
```
You'll see the following message in the terminal:
```
listening on port 8000
```
Open the web app by typing "localhost:8000" in your web browser.

## Built With

* [Angularjs@1.6.9](https://angularjs.org/) - *Front end framework used*
* [Express@4.16.3](http://expressjs.com/) - *Back end framework used*
* [Bootstrap@4.1](https://getbootstrap.com/) - *CSS framework used*
* [Mongoose@5.0.16](http://mongoosejs.com/) - *MongoDB object modeling used*

## Authors

* **Miguel Guerra** - *Initial work*
