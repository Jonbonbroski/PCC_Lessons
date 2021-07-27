const express = require('express');
const cors = require('cors');
const data = require("./other_files/data")
const app = express();
const PORT = 5000
app.use(cors());


//So you can see now how we can use both query paramaters and route paramters very similarly.
//We can also access both very similarly as well using "req.query" and "req.params".
//In this case, the question you may have is when should we actually use
//one or the other? Best practices for design is that route params are used to identify a specific resource 
//or resources, while query parameters are used to sort/filter those resources.
//Another way to put that is request parameter should be used for anything that is required while 
//anything that is an optional attribute should be a query paramter.

//Example 1:
//Let's pretend we are looking for job listings in our database. But let's say that a user 
//has to be logged in to search for jobs. Well in this case, we could use route paramters for the 
//user's account number and a query paramter for the job they are looking for. 
//
//Route path: "/account/:accountId"
//Query URL : "www.mysite.com/account/12345/?jobTitle=developer"
//
//Example 2:
//
//Let's say on our site, someone is wanting to purchase a car. We can use the car make and model as
// route parameters and the color of the car as a query paramter since color is optional. 
//
//Route path: "/cars/:carMake/:carModel"
//Query URL : "www.mysite.com/cars/vw/bug/?color=yellow"
//

//For this example, we will a route paramter and a query parameter togeth. There more ways we can 
//use the request object to send information. That will be discussed more in detail in the next Lesson. 
//Revewi this example and the index-5.html that goes with it, then practice making your own server
//that usees these different paramters in the routes. When you have a strong understanding of the material, 
//then you may move on to the next Lesson. 


app.get("/cars/:year",(req,res)=>{
    console.log("GET request was made to the cars path.");
    console.log("Here is the route paramter",req.params);
    console.log("Here is the query paramter",req.query);
    const carYear = req.params.year
    //Since color is optional, we need to code a response in the case that a color is NOT selected. 
    //Then we will only return the results that have a matching year.
    if(req.query.hasOwnProperty("color")){
    const carColor = req.query.color
    res.send(data.filter(cars => (cars.color==carColor&&cars.year==carYear)))
    }else{
    res.send(data.filter(cars => (cars.year==carYear)))
    }
})



app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
        return;
    };
    console.log(`Listening on port: ${PORT}`)
})