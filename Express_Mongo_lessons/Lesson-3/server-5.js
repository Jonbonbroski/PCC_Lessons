const express = require('express');
const cors = require('cors');
require('dotenv').config();
const database = require("./other_files/data.js")
const app = express();

const PORT = process.env.PORT || 5001



// In this example, we are now going to use the request body parameter with middleware to add 
// items to our database object. We will then return the items from our database object so they
// can display on the index-5.html page.

//First, prevent errors and inform that we will receive json objects
app.use(cors());
app.use(express.json());


// Next, we are going to use this middleware to check the token in the headers before adding
// anything to the database so that we know the user is authorized
app.use((err,req,res,next)=>{

    const userToken = req.headers.token;

    if(userToken === "R89HH8jjndsaZzXxc"){
        console.log("Request has been authorized!");
        next();
    }else{
        console.error(err.stack);                
        res.status(500).send('We have an error!');
    }

});

//Then, after authorization, we will use this middleware to add to the database object
app.use((req,res,next)=>{
    console.log("Item", req.body)
    
    database.count++
    database.items.push({id:database.count,name:req.body.item})

    console.log("Item was added to the database!")
    next();
})

//Finally, the route will send the items in our database back. After understanding this, practice making
//your own routes with middleware. Once you have, you can continue to the next lesson. 
app.post("/items",(req,res)=>{

console.log(database.items)
res.send(database.items)
console.log("Response was sent from route")

});



app.listen(PORT,(error)=>{

    if(error){
        console.log(error);
        return;
    };

    console.log(`Listening on port: ${PORT}`)
})