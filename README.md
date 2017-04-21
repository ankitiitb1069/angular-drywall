# [Server-Drywall](https://github.com/ankitiitb1069/server-drywall)


A jwt token based authentication user system, implemented with [MongoDB](https://www.mongodb.org/), [Express](http://expressjs.com/), and [Node.js](https://nodejs.org/).
Inspired by and forked from [Angular-Drywall](https://github.com/arthurkao/angular-drywall) and [Drywall](https://github.com/jedireza/drywall).

## Features

 - Versatility because you can
    - Hack your next awesome Single Page Application(Angular or React) on top of [Server-Drywall](https://github.com/ankitiitb1069/server-drywall), or
    - Use only the sever as a pure User Management JSON API server.
 - Stand alone RESTful API service capable of serving any http clients, including iOS and Android app.
 - Social Login enabled currently for __Facebook__ and __Google__.
 - Fully functional user life cycle management.
 - Admin panel provides full CRUD API on all database entity.

## Technology

[Angular-Drywall](http://arthurkao.github.io/angular-drywall)'s backend is pure Node.js RESTful API Server with [JWT](https://github.com/auth0/node-jsonwebtoken) token based authentication .




## Live demo

Coming Soon..


## Requirements

Have these packages installed and running on your system.

- [Node.js](https://nodejs.org/download/), and npm.
- [MongoDB](https://www.mongodb.org/downloads)
- [Grunt-cli](http://gruntjs.com/getting-started)

We use [`bcrypt`](https://github.com/ncb000gt/node.bcrypt.js) for hashing
secrets. If you have issues during installation related to `bcrypt` then [refer
to this wiki
page](https://github.com/jedireza/drywall/wiki/bcrypt-Installation-Trouble).


## Installation
```bash
$ git clone https://github.com/ankitiitb1069/server-drywall
$ npm install
```

## Setup

Interactively setup basic website and necessary database configurations.
```bash
$ node init.js
```

*Alternatively,* modify config.example.js and initialize database manually. __Not recommended.__

```bash
$ cp ./config.example.js ./config.js
$ vi config.js  #set mongodb and email credentials
$ mongo # use mongo shell to insert required documents. Refer to ./init.js for the list of docs
```

## Running the app

```bash
$ grunt

# Running "concurrent:dev" (concurrent) task
# Running "watch" task
# Running "nodemon:dev" (nodemon) task
# Waiting...
# [nodemon] v1.2.1
# [nodemon] to restart at any time, enter `rs`
# [nodemon] watching: *.*
# [nodemon] starting `node app.js`
```

Now [Server-Drywall](https://github.com/ankitiitb1069/server-drywall) should be up and running at `http://localhost:3000`.

Use Postman
Integrate with your favourite Client and Enjoy.



## Questions and contributing

Any issues or questions (no matter how basic, or even healthy criticism), open an issue. Please take the
initiative to include basic debugging information like operating system
and relevant version details

Contributions are welcome.


## License

MIT