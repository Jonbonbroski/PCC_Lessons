const express = require('express');
const data = require('./other_files/data.js');
const cors = require("cors")
const app = express();


const PORT = 5000
app.use(cors())

//This example is showing how we can have multiple request queries. There are more optimal 
//ways to code this, but we are going to use the switch cases to keep it simple.

app.get("/cars",(req,res)=>{
    console.log("GET request made to account path.")
    console.log("This is the request query:")
    console.log(req.query)

    //First, we will check which queries were sent to us. Our route is only set up to take in
    //"color" and "year". So if you tried sending a different query parameter, such as ?location="",
    //you would receive a bad request response.

    //Again, req.query is an object. So, if we use the Object.keys() method on it, we can make
    //it into an array of the properties. This will let us check if there are one or two queries 
    //sent to us. 
    let numberOfQueries = Object.keys(req.query)
    
    //Next, we can use that information to filter through our data for the results that match the query.
    //We will use a simple if/else statment along with switch cases to determine the response. 

    if(numberOfQueries.length == 2){
        let queryColor = req.query.color;
        let queryYear = req.query.year;
        console.log(queryColor,queryYear)
        res.send(data.filter(cars=>(cars.color==queryColor&&cars.year==queryYear)))

    }else if(numberOfQueries[0] == "color"){
    
    switch(req.query.color){
        case "red": res.send(data.filter(cars=>cars.color=="red"))
        break;
        case "blue":res.send(data.filter(cars=>cars.color=="blue"))
        break;
        case "green":res.send(data.filter(cars=>cars.color=="green"))
        break;
        case "black":res.send(data.filter(cars=>cars.color=="black"))
        break;
        case "white":res.send(data.filter(cars=>cars.color=="white"))
        break;
        default:
        break;
    }

}else if(numberOfQueries[0] == "year"){
    
    switch(req.query.year){
        case "1965": res.send(data.filter(cars=>cars.year== 1965))
        break;
        case "1966":res.send(data.filter(cars=>cars.year== 1966))
        break;
        case "1967":res.send(data.filter(cars=>cars.year== 1967))
        break;
        default:
        break;
    }
//Dont forget that we want to send a response if there are no request queries.
//For this, we will send a JSON object back with a message. This will just make it
//easier for us to handle on the index-3.html
}else{
    res.send({message:"No cars have been found."})
}

})


app.listen(PORT,(err)=>{
    if(err){
        console.log(err)
        return;
    }
    console.log(`Listening on port: ${PORT}`)
} )