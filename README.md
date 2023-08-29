# REST API with JWT Token for Authentication (valid upto 15minutes)
Trying to create a secured REST API using Node and Express. Revising the things that I learned before for a better understanding of the core concepts of API creation using node and express.

## To run this in your local Computer, follow the steps mentioned below:

1. Clone this git repository using `git clone https://github.com/xxFREESHROUDxx/recalling-rest-api.git` in your terminal.
2. Go to the directory where you cloned this project and do `npm install`.
3. After the dependencies are installed just run `npm start` and the server will be up and running at port 5000.

## Routes 

### For Authentication

Currently you can open Postman or similar API platforms and send POST request to [localhost:5000/api/auth] and put the following json data in body:
{  
  "email": "baibhavkc11@gmail.com",
  "password": "Qwerty@123"
}

Right now, database is not used to store the data so dummy data has been created. But ff you want to make changes to the dummy data just go to the project folder : routes/auth.js and make changes to the users variable.

Note: To change the password you have to run the generatePassword.js file using `node generatePassword.js` in the project directory. And for changing the password just change the first value in console.log file ie. Qwerty@123 (which is the current password).
It will generate a hash password in the console. Just copy that and paste in the users variable in routes/auth.js file in the project directory.

Once you send the POST request to [localhost:5000/api/auth] you will get success message and a token. Use that token for other route ie. fetching messages as well as adding messages.

### For Fetching Messages

Just send GET request to [localhost:5000/api/messages] and add a header:
   key: x-auth-token
   value: {token generated from the auth route}

Once successful, you will get the messages as a response.

Note: You can change the dummy message when you run this route for the first time by going to project directory: route/messages.js and changing the messages variable.

### For adding Messages

Just send POST reqest to [localhost:5000/api/messages] and add the same header for the token as shown in fetching messages route and add json body for the new message as shown below: ( Note: Token expires after 15minutes so once expired you need to do the authentication again for generating new token )

{
  "name": "anything here",
  "content": "any messages or description here"
}

The new message will be shown as a response if the API is hit with proper format and is valid.

### HAPPY CODING!
