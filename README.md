# Social-Media-Clone
A Social Media Clone

# To install necessary dependencies

open a terminal in project root folder and run the following command
`npm i`

next to run the server execute this command
`npm start`

to run the clients and start chatting execute the following commands
`cd clients`

open two new terminals (one for each client) in this dir.

and run `node client1.js` in one terminal
and run `node client2.js` in another terminal

for the RestAPI after launching the server you can use postman to make 
`GET/ POST/ PATCH/ and DELETE` requests at `localhost:PORT/user/`


The application will run on `localhost:PORT` in which PORT can be changed from .env file

Make a database in mongo named as profiles or change it in url string (replace 'profiles') with one of your own in .env file
