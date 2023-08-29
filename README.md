# REST API with JWT Token for Authentication (valid upto 15minutes)
Trying to create a secured REST API using Node and Express. Revising the things that I learned before for a better understanding of the core concepts of API creation using node and express.

## To run this in your local Computer, follow the steps mentioned below:

- Clone this git repository using `git clone https://github.com/xxFREESHROUDxx/recalling-rest-api.git` in your terminal.
- Go to the directory where you cloned this project and do `npm install`.
- After the dependencies are installed just run `npm start` and the server will be up and running at port 5000.

## Routes 
### 1. For Authentication

- Currently you can open Postman or similar API platforms and send POST request to [localhost:5000/api/auth](localhost:5000/api/auth) and put the following json data in body:
```json
{  
  "email": "baibhavkc11@gmail.com",
  "password": "Qwerty@123"
}
```
eg:
![image](https://github.com/xxFREESHROUDxx/recalling-rest-api/assets/48503352/ce08567d-d9c3-43b0-b8d1-549e6df1b975)


- Right now, database is not used to store the data so dummy data has been created. But ff you want to make changes to the dummy data just go to the project folder : routes/auth.js and make changes to the users variable. <br><br>

> **Note:** *To change the password you have to run the generatePassword.js file using `node generatePassword.js` in the project directory. And for changing the password just change the first value in console.log file ie. Qwerty@123 (which is the current password).
It will generate a hash password in the console. Just copy that and paste in the users variable in routes/auth.js file in the project directory.* <br><br>

- Once you send the POST request to `localhost:5000/api/auth` you will get success message and a token. Use that token for other route ie. fetching messages as well as adding messages.
<br><br>
---
### 2. For Fetching Messages

- Just send GET request to `localhost:5000/api/messages` and add a header with:
   key: x-auth-token
   value: {token generated from the auth route}
example:
![image](https://github.com/xxFREESHROUDxx/recalling-rest-api/assets/48503352/25572116-ade0-4bfb-86f3-e0a46a8a0ba5)


- Once successful, you will get the messages as a response.<br><br>

> **Note:** *You can change the dummy message when you run this route for the first time by going to project directory: route/messages.js and changing the messages variable.* <br><br>
---
### 3. For adding Messages

- Just send POST reqest to `localhost:5000/api/messages` and add the same header for the token as shown in fetching messages route and add json body for the new message as shown below:

```json
{
  "name": "anything here",
  "content": "any messages or description here"
}
```
eg:
![image](https://github.com/xxFREESHROUDxx/recalling-rest-api/assets/48503352/6013eda1-b113-468c-8d11-92b2fdac3812)
> Don't forget to add the token similar to fetching messages <br><br>
> **Note:** *Token expires after 15minutes so once expired you need to do the authentication again for generating new token*<br><br>

- The new message will be shown as a response if the API is hit with proper format and is valid.

### HAPPY CODING! 😄 🚀
