# Check In App

This is a web application that acts as a check-in service for any setting in which a customer 
queues up in a waitlist. In this implementation, it is a doctor's office. The app is built as a single page application using [React.js](https://reactjs.org/), and the server is written with [Node.js](https://nodejs.org) connected to a [MongoDB](https://www.mongodb.com/) database.


## Overview 
- [Node.js](https://nodejs.org) backend webserver
- [React.js](https://reactjs.org/) SPA frontend
- [Redux](https://redux.js.org/) store for managing application state
- [Socket.IO](https://socket.io/) client/server communication
- [SemanticUI](https://react.semantic-ui.com) components for React
- [MongoDB](https://www.mongodb.com/) database connection
- Responsive design

A live version hosted on AWS Elastic Beanstalk & S3 can be seen [here](http://check-in-client.s3-website.us-east-2.amazonaws.com/).

The application itself has two views. The main view, hosted at the root url is for customers/patients. There is a form that allows them to input some information and join the queue. Customer's are listed by first initial and last name only, and no details are shown.

The admin/doctor view can be see from the _/admin_ route. Here, an administrator can view the list of customers in the queue with the details of their registration. An administrator can also choose to admit the next customer/patient, which will alert all clients via the __Now Serving__ comopnent at the top of the page. When the administrator is done with the customer, the __Done__ button can be clicked to dismiss them.

## Running Locally 

In order to run the project locally on your machine you'll need to do a few things.

Start by cloning the repo:
```
git clone https://github.com/ajpriola/react-check-in.git
```

The backend code is contained in the `server/` directory and the frontend app is in the `app/` directory.

### Database

This project uses a MongoDB database. I chose to host mine on MongoDB's [Atlas](https://www.mongodb.com/cloud/atlas) service. Check out this [link](https://www.mongodb.com/cloud/atlas) for a guide on how to get up and running with Atlas.

Alternatively, you can host the database locally or on another cloud service. [Here](https://docs.mongodb.com/manual/tutorial/getting-started/) is a guide to get you started with MongoDB.

However you choose to host your database, you'll need to find your __URI connection string__, we'll use this in the next step.

### Server

`cd` into the `server/` directory and run `npm install` to install the server's dependencies. You will also need to create a `.env` file with a few environment variables in the server's root directory.

```
PORT=<YOUR_PORT_NUMBER>
DB=<YOUR_CONNECTION_URI>
```

Start the server by running the following command:

```
node app.js
```

You should see the following output:

```
Server is running on port <YOUR_PORT_NUMBER>
Connected to the database.
```

### App

`cd` into the `app/` directory and run `npm install` again to install the app's dependencies. You will need to create another `.env` file in this directory with an environment variable pointing to your server. If you are running the server locally, it looks like this:

```
REACT_APP_SOCKET_URL=localhost:<YOUR_PORT_NUMBER>
```

Start the app:

```
npm start
```

Open your browser and go to [localhost:3000](localhost:3000), or whichever port number you chose. You should see the app running!

### Testing

The application comes with a number of unit tests to test components rendering, as well as Redux actions and reducers. The following command will run the tests using [Jest](https://facebook.github.io/jest/):

```
npm test
```

## Deploy

To get the app ready for deployment, run the build command from the `app/` directory:

```
npm run build
```

The `build/` directory that is generated is a deployable app! If you are also deploying your server, make sure to update the `REACT_APP_SOCKET_URL` environment variable to your server's URL in `app/.env`  _**before**_ you generate the build, as webpack uses this during the build process.

## License 
This project is licensed under the MIT License - see [LICENSE](LICENSE) for details.


