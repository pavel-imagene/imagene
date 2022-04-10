# Challenge

Use all technologies during implementation
1. [x] React (built with Vite)
2. [x] Node.js
3. [x] NestJS
4. [x] TypeScript
5. [x] prisma

Boilerplate of the project (Nest,React, TS, Node.js) was taken from this repo - https://github.com/LandazuriPaul/nest-react
I've left readmes in client and server part untouched.

Short instructions:

To run project.

0. I have instance of Postgresql in AWS RDS and used it.
1. Install dependencies by ```yarn install```
2. To seed db do
```
cd /lib
yarn migrate dev && yarn prisma seed
```
3. To run client in watch mode do ```yarn start:dev``` from /client
4. To run server in watch mode do ```yarn start:dev``` from /server
