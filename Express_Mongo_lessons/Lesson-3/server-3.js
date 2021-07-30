const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(cors())
const PORT = process.env.PORT || 5001

// Now that we have learned how to use the request "headers" parameter, we can now see how to use
// the request "body" paramter. The body parameter is used for sending data to our server as well
// as sensitive information. So as an example, let's say we have an app that allows you to add
// your favorite books to a database. We would send the information about the book, such as the title,
// author, publisher and description through the body parameter. If the user of the app had to make an
// account with thier name, email and password, we could also send that through the body parameter as well. 

// To help separate the different purposes for the parameters, here is a general idea:
//
// + Route parameter  -  /:year            -  used for finding a specific resource or resources
// + Query parameter  -  /?location="az"   -  used for sorting/filtering through the resource(s)  
// + Headers parmeter -  headers:{ }       -  used to send information about the query itself.
// + Body parameter   -  body:{}           -  used to send general&sensitive data. Usually for creating something.
//                                  

// You will find that the request body parameter is often used in "POST" or "PUT"/"PATCH"  queries 
// because the data is sent to usually create or update something. So for our book app, if we needed
// to update one of the books in our database, we could send a "PUT" request with the updated information
// in the body of the request. 

//------------------------------------------------------------------------------------------------------

//The body parameter is used in a very similar way to the headers parameter. However, to use the body paramaeter,
//we need to learn about "middleware". Middleware is simply any function or method we put in the middle of our
//routes execution. 
 
//To make this simple, you can think about our routes executing in two steps. 
//
//    Step 1        Step 2
//     |              |
// app.get("/",   (req,res)=>{  })
//
// We route the request - then we do something with the request and response. 

// So now, we can simply insert a function in the middle to execute between step 1 and 2, which is called
// our "middleware"
//
//
//    Step 1                 --------------------- Step 2
//     |                    |                        |
// app.get("/", function(req,res,next)=>{            |
//                                                   |
//      console.log("Do whatever you want here")     |
//                                                   |     
//        next(); -----------------------------------|
//
//
//      res.send("I am step 3!!!!")
//        
// })
//
// Notice the call above to next(). Calling this function invokes the next middleware function in the app.
// The next() function is not a part of the Node.js or Express, but is the third argument that is passed to the
// middleware function. The next() function could be named anything, but by convention it is always named “next”. 
// To avoid confusion, always use this convention.

// The reason we need to use middleware in our routes for the body paramter is because the route needs to 
// understand what data is being sent in. To better understand, remember the res.send() method and the query. It 
// automatically determines what data we are sending back. (Lesson-1, server-3.js) In our query, we need to
// tell it what data it is receiving.(response.json()) The same thing applies here. 

// If we are going to send a json object to our routes from our query, we need middleware to tell our routes
// what type of data it is receiving so then we can actually access/use it in "Step 3".
//
// ! - It is important to note that we will also need to add something to the query itself  - !
//----------------------------------------------------------------------------------------------------------------

// This is where "body-parser" npm package came in. Again, Express no longer needs it.
// We could add the body-parser method as the middleware to parse the request object so that our
// route could understand the information being sent in. Because it is no longer needed, we will
// stick with using Express to do this instead.

// First, Express has a method called "app.use()". This method can add middleware to one or all
// of our routes. It can get tedious having to type the same middleware function for every single
// route that we make.

// Use for a single route. This will apply it to a specific endpoint.
//
// app.use("/books", function(req,res,next){
//          console.log("middleware function")
//          next();
// })
//
// Use for a all routes. This will apply the middleware function to all endpoints.
//
//
// app.use(function(req,res,next){
//          console.log("middleware function")
//          next();
// })
//
// The app.use() function must be added to your code BEFORE you define your routes. 

// This applies the cors() function middleware to all routes to help prevent CORS errors
app.use(cors());

// This is the method we use with express. It will parse the request object information so that 
// it knows the incoming data from our query is a json object. 
app.use("/books",express.json())


//Here is our route. We cannot use get(), but instead we can use "post()" because our query is 
//a POST request and, as we reviewed, body paramters are used to create/update. 
//Notice that we do not have the middleware entered here, that is because it is already added
//to each route from the app.use() above. 
app.post("/books",(req,res)=>{

//Thanks to the express.json() middleware method, we can now see the data as a json object. 
console.log("This is the request body paramter:", req.body)
const newTitle = req.body.title
res.send({title:newTitle})
});


//Open up the index-3.html
app.listen(PORT,(error)=>{

    if(error){
        console.log(error);
        return;
    };

    console.log(`Listening on port: ${PORT}`)
})