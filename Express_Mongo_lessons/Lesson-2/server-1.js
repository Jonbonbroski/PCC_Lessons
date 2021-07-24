const express = require('express');

//cors is another npm package we have installed and brought in to use. It is going to help 
//prevent CORS errors since we are making queries to ourselves. 
const cors = require("cors")

const app = express();

//This allows us to use cors package for all of our routes. We will learn more about the use() method later on. 
app.use(cors())


//When handling requests, the first thing we need to know is what type of request is it? 
//So far, we have been using app.get() to handle the requests because our browser's url
//uses the HTTP protocol which is, by default, a "GET" request. 

//Now, we are going to be using AJAX queries to make the requests instead. This is the 
//same as sending queries to other APIs to get a json object back. Only this time, we
//are sending the queries to our own node servEEer instead and handling the responses. 

//There are four major types of query methods that are used to handle data. "GET, POST, PUT, DELETE".
//HTTP does have more than four, but these are the ones we will be focusing on for now.
//These methods are also called "HTTP verbs", so you may hear the terms interchangeably.
//We use GET to read data, POST to create data, PUT to update data, and DELETE to delete data which 
//follows the foundation of a CRUD application. (C-reate R-ead U-pdate D-elete)

//It is important to remember that as the developer, you get to decide what the response is for these methods.
// Just because you are sent a DELETE request, you do not have to delete anything if you don't want to. You could 
//instead create something or just send back a message that DELETE is not an option on your server. 

//The reason we use these methods is so that it is easily communicated between all developers what we are needing
//to do with the data. So you do not want to use a "GET" request to delete data as an example.

//To handle the different request types, all we have to do is change the method that is being using on our "app".
//So instead of app.get(), we can use app.post(), app.put() and app.delete() which will all use the same
//parameters that we have used in the previous routes. 

//You will see in the examples below that each of the routes are all using the same endpoint. This is to show
//That you can have different handlers for different request types for the same url. 
//Meaning that you can send a query with a GET,POST,PUT or DELETE method to the same location.
//To make a simple display, we are sending back json objects for these examples. 

app.get("/",(req,res)=>{
    console.log("A GET request was made.")
    res.send({type:"GET", message:"You have made a GET request"})
});

app.post("/",(req,res)=>{
    console.log("A POST request was made.")
    res.send({type:"POST", message:"You have made a POST request"})
});

app.put("/",(req,res)=>{
    console.log("A PUT request was made.")
    res.send({type:"PUT", message:"You have made a PUT request"})
});

app.delete("/",(req,res)=>{
    console.log("A DELETE request was made.")
    res.send({type:"DELETE", message:"You have made a DELETE request"})
});


//For this example, instead of opening a browser and typing the URL, you will instead open up the index-1.html
//by double clicking on it or using the "Live Server" VS Code extension. Either way is the same. When you open
//the index-1.html in VSCode, you will see additional instruction on what is happening. After using node to run
//this server-1.js, go to the html to continue. 
app.listen(5000, (err)=>{

    if(err){

        console.log(err);
        return;
    }

    console.log("Listening on port 5000")
})