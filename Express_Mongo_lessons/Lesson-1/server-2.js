//Bring in the express module
const express = require('express');

//Save an instance of express
const app = express();

//Now here is the fun part, we want to tell express how to handle signals that are sent to us
//when our node server is running. These signals are called "queries" and contain four major 
//methods ("GET","POST","PUT","DELETE"). There are other mthods as well but
//we will get into the other methods later. For now, we will just focus on the GET signals that 
//are sent to us. 

//Keep in mind that our browsers use the "Http protocol" which is a "GET" method. We will use
//that for now. Later on, we will use ajax queries to send the requests. 

//To handle a "GET" request, we will use the "get()" method on our "app" server.
//This method takes two parameters similar the "listen()" method. 
//It takes an "endpoint" and a function as the parameters.
//The function it takes in also takes in two parameters, "req" and "res". These stand for
//"request" and "response" which will be very important to know later on. Request is anything
//that is sent to us, such as a query, and response is anything we send back. 

//An "endpoint" is simply a different channel that we can receive requests on. 
//Examples: www.mysite.com = "/", www.mysite.com/users = "/users", www.mysite.com/about = "/about"
//          www.mysite.com/users/timmy-tom = "/users/timmy-tom"
//We will use the endpoints to know where to send queries to and what response to give when
// a signal(query) is sent to them.  


//Since we are using a localhost instead of a website, we will need to use
// http://localhost:3000/ in our browser's url to send the GET request.
app.get("/",(req,res)=>{

    console.log("A GET request was made to the root endpoint")
    //We will show more about responses later. But for now, here is a simple response
    //so you can visually see it on the browser.
    //The "/" endpoint is called the "root endpoint" or "root path".
    res.send("Hello, this is the root path.")
})


//For this one, type in http://localhost:3000/users to send the GET response
app.get("/users",(req,res)=>{
    console.log("A GET request was made to the users endpoint");
    res.send("Hello, this is users path.")
});

// http://localhost:3000/about
app.get("/about",(req,res)=>{
    console.log("A GET request was made to the about endpoint");
    res.send("Hello, this is the about path.")
})

app.get("/users/timmy-tom",(req,res)=>{
    console.log("A GET request was made to the timmy-tom endpoint");
    res.send("Hello, this is Timmy-Tom's path.")
})

//Have our server listen on port 3000
app.listen(3000,()=>{

    console.log("Server is listening on port 3000")
});

//Open up a browser and use the url to try and access the paths. You will notice
//that if you type in a path that does not exist, you will receive an error on the 
//web browser that says Cannot GET /whateverPathYouTypedIn. There are ways to fix this
//but we will touch on that later. 

//Once you are able to successfully get a response from each endpoint and understand how it works,
//move on to server-3.js