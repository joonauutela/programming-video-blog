# Programming-video blog
![ESLint](https://res.cloudinary.com/practicaldev/image/fetch/s---GoJn40g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://cdn-images-1.medium.com/max/398/1%2ATPkhIqPgVzFSSpwdlVwhVw.png)
<img src="https://i.morioh.com/36c5fc09c6.png" height="200" />

## Project description
Show off programming videos that you think deserve more attention. Find interesting videos that you've 
might never seen before.

- A quick demo-video of the project can be found at https://www.youtube.com/watch?v=LJ7ROrYVevY

### Project objectives
- To better understand full-stack development.
- To plan and produce a well structured project.

## Tech

* ReactJs (hooks)
* GraphQL
* MongoDB
* NodeJs
* ESLint
* Apollo
* Express

## Installation

### Server

Go to 'server'-folder as your current working directory.
Install the dependencies and devDependencies.

```
npm install
```

Before starting the server you need to create a MongoDB-cluster
on https://www.mongodb.com/. After creating the cluster, create an '.env' file in root of server.

.env-file should look the following (the secret key can have any value):
```
MONGODB_URI=<your mongodb-URI here>
SECRET_KEY=<your secret key>
```

Start the server with nodemon.
```
npm run start
```

Start the server without nodemon.
```
npm run serve
```

Both commands start the app in the development mode.<br />
Open [http://localhost:5000](http://localhost:5000) to view it in the browser.

### Client

Go to 'client'-folder as your current working directory.
Install the dependencies and devDependencies and start the server.

```
npm install
npm start
```

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Licensed under the MIT License
© 2020 Joona M Uutela