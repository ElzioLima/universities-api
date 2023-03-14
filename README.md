# **Elzio-Lima - Backend - Universities API**

---

> # Posts API

An API for a simple Devices Manager
* Node.JS
* Express.JS
* TypeORM
* MongoDB
* Node-Schedule
* Axios.JS

<br /><br />

> ## Database configuration

* create database "your_database"
* Change database connection credentials at ormconfig.js or create a .env file(use .env.example file to create .env file)

<br /><br />

> ## Usage

* npm install --save-dev
* npm run dev

* npm run build
* npm run start(remove ou comment TS_NODE_DEV from .env before run this command)

<br /><br />

> ## Notes

* The TypeORM version for this project is 0.2.x . version 0.3.x are incompatible to current arch project.

<br /><br />

> ## Code Repository Architecture

```bash
* src
* ├──domain
* |  ├──contracts
* |  |  ├──gateways
* |  |  ├──repos
* |  |
* |  ├──use-cases
* |    ├──device
* |
* ├──infra
* |  ├──gateways
* |  ├──repos
* |     ├──entities
* |     ├──helpers
* |
* ├──main
*    ├──config
*    ├──factories
*    |  ├──domain
*    |  |  ├──use-cases
*    |  |     ├──device
*    |  |
*    |  ├──infra
*    |     ├──gateways
*    |     ├──repos
*    |        ├──typeorm
*    |           ├──helpers
*    |
```
<br /><br />
