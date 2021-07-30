const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser')
app.use(cors())

//As you have probably noticed, more things are starting to be added to our server-1.js file. 
//We are going to start with the "dotenv" above. The "dotenv" is another npm package that we have
//installed with "npm install", just like express, axios, cors, react, etc. This package allows us to
//create variables, similar to how you would in javascript, and store those variable inside of the
// ".env" file which you can find inside of this folder. These are called "enviromental variables"

//The reason we would want to create and store variables inside of the .env file is for security. It is for 
//things we do not want others having access to. Examples: URLs, PORT numbers, Database Passwords, etc.
//This helps us protect our server and database.

//-----------------------------------------------------------------------------------------------------------

//The next piece is the "body-parser", which is also another npm package that we have installed. 
//The body-parser is responsible for parsing(analyze/break down) the incoming request object body
//so that we can access the data we send through our query. 

//However, due to Express.js updates, we no longer need it. Express has the ability to parse without it.  
//We will see it again when we start understanding "middleware" and the roll it plays. 
//-----------------------------------------------------------------------------------------------------------

//If you look at the .env file, you will notice that some variables have been declared in there. Note:
//you do not need to use "const", "var" or "let" to do so. To access those variables, we use dot notation. 
//process.env.PORT will give us a value of 5000 as declared in the .env file. 

//Here we have saved PORT as a variable in this server file. We gave it two options. This way, if it cannot access
//our enviromental variables, it will be assigned to 5001. This is also a good way to test to make sure your server
//is working correctly.
const PORT = process.env.PORT || 5001

//Run this server, you should see it console.log the port and the password variable defined in our .env file. 
//Note: the .env needs to be in the SAME directory as our server.js file
//Then you can continue on to server-2.js.

app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
        return;
    };
    console.log(`Listening on port:${PORT}`)
    //Accessing the PASSWORD variable in our .env file. 
    console.log("Password: ", process.env.PASSWORD)
});