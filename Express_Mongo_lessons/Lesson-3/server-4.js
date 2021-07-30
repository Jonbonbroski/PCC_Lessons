const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()
const PORT = process.env.PORT || 5001

// In the last section, we went over the body parameter and middleware. Again, keep in mind that 
// middleware is basically just functions that we would like to use before sending a response back.
// We can actually "stack" middleware. All this means is that we can have one function execute
// after another in whichever order we want. So one route could have as many middleware functions 
// as you want. 

// We can use these two as an example. The first one is the cors() method which helps us prevent 
// CORS errors. After it executes, we can then use the express.json() middleware method to analyze
// the request object to tell us it is a json object. 
app.use(cors());
app.use(express.json());

// The reason this is important is because may need to handle a few things before sending a response. 
// This could be things like verification, logic, errors etc. They can execute any code, including
// making changes to the request & response objects, end the request-response cycles, call other
// middleware functions, etc. Don't forget that we can make our own functions and use 
// them as middleware as well.

// Middleware is not only for routes in a server. You will find the term "middleware" being used in 
// many other fields of coding as well. For our use in express however, here are some naming conventions
// on how we divide middleware by where/when we attach it in the process and what the purpose of it is.

// - Application-level Middleware   -   app.use(function(req,res,next){
//
//                                                   console.log("App middleware")
//                                                   next();          
//                                              });
//
//
// - Router-level Middleware    -     router.use(function (req, res, next) {        *Router middleware
//                                               console.log('Route Middleware")    uses express by adding
//                                               next()                             it to the top.
//                                                })                               const router = express.Router()
//
//
//
// 
// - Error-handling Middleware   -  app.use(function (err, req, res, next) {        *Same as the other middleware
//                                          console.error(err.stack)                  but adds the "err" parameter.
//                                          res.status(500).send('Something broke!')    
//                                          }
//
//
//
//
// - Third-Party Middleware  -   app.use(bodyParser()) or app.use(cors())  *Third party package we install
//                                                                          to act as middlware
// 
//
//
// - Built-in Middleware  -     app.use(express.json())                     *Middleware that is included
//                                                                           in Express framework



// Don't forget the next parameter and next() method. Without that, our middleware would not continue on
// to the next middleware or code. next() is what allows us to stack any middleware together. 


// For this example, we are going to stack three(3) additional middleware that simply console.log().
// Our code is not working however. We are not getting a response from our route. See if you can 
// fix it. You can use a browser url for the GET request. We should see a console.log() from the route


app.use((req,res,next)=>{
    console.log("Apples")
    next();
})
app.use((req,res,next)=>{
    console.log("Oranges")
    
})
app.use((req,res,next)=>{
    console.log("Grapes");
    next()
})


app.get("/test",(req,res)=>{

console.log("I am the route code!")

});



app.listen(PORT,(error)=>{

    if(error){
        console.log(error);
        return;
    };

    console.log(`Listening on port: ${PORT}`)
})