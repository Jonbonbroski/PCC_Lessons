const express = require('express');
const cors = require('cors');
const data = require("./other_files/data")
const app = express();
const PORT = 5000
app.use(cors());


//In our previous example, we saw how we can use a portion of the request object
//to send "query paramters"(Ex: ?color=red). They are added onto the end of the
//url that we use in our queries. This is one of the ways we can send informtation
//to our routes so that we can return a variety of responses. 

//This is only one of the ways we can use the request object to send information
//to our routes. Another way we can send information is by using what are called
//"route parameters". They are used in a very similar way to the query parameter.
//With route paramters, we also add them onto the url as well. However, the 
//syntax is a little different. 

//To use a route parameter,we add in another section of to the route endpoint.
//This is by adding a forward slashe (/), followed by a colon(:), which is then 
//followed by a key. When entered, the request we receive will return  will return an
//object, just like the query paramters.  

//Example:

// Route path: /users/:userId
// Request URL: http://localhost:5000/users/34
// 

//For the example above, notice how "34" took the place of ":userId". Our url that we used in the query
//only needs to enter a value. Then our route will associate that value with the key we used. ({ "userId": "34"})
//Here is a side by side comparison of how request query and request route parameters are different. 

//  -- Using request querty --
// Route path   : /cars
// request url  : http://localhost:5000/cars?color=red
// req.query    : {color : 'red'}
//
//  -- Using request route --
// Route path   :  /cars/:color
// request url  :  http://localhost:5000/cars/red
// req.params   :  {color : 'red'}
//

//Let's now see this in practice. Below are going to be two examples. One will show how we can use one(1)
//route paramter while the other will show how we can use multiple route paramters. 

//Using one route paramter.
app.get("/cars/:color",(req,res)=>{
    console.log("GET request to /cars")
    console.log("Single request parameters", req.params)
    const routeColor = req.params.color;
    res.send(data.filter(cars=>(cars.color==routeColor)))
    
});


//Using multiple route paramters. (Using a different path name so we can see both examples.)
app.get("/carTwo/:color/:year",(req,res)=>{
    console.log("GET request to /carTwo")
    console.log("Multiple request parameters", req.params)
    const routeColor = req.params.color
    const routeYear = req.params.year
    res.send(data.filter(cars => (cars.color==routeColor&&cars.year==routeYear)))
});








app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
        return
    };
    console.log(`Listening on port: ${PORT}`)
})