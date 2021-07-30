const express = require("express");

const app = express();

//Now we will go over some of the responses that we can send when a query is made to one of our endpoints.
//For this, we need to use the "res" in the callback functions. This is what we will use to define
//what we are sending back. We will use the "send()" method on "res" so that we can send the response.

//Below are examples of the different responses. Note how they will mostly be JSON objects or strings. 
//The send() method will read what is passed through it and automatically determines what header
//content-type it needs. So it will determine if it is a string, JSON object, HTML etc. 
//that will be sent back. However, you can still run into errors if it does not understand
//the material you are trying to send. 

//The root path will send back a string as we have seen previously. 
app.get("/",(req,res)=>{
    console.log("Root path")
    res.send("You've reached the root path")
});

//The "/a" endpoint will send back an h1 html element with text. Note how it is in a string so 
//the "send()" method can read it. 
app.get("/a",(req,res)=>{
    console.log("/a path")
    res.send("<h1>This is html response</h1>")
});

//Here we are sending a number. You will notice it is in a string. The reason being is that 
//numbers are reserver for HTTP status codes. Example: 200 = OK, 400 = Bad Request 404 = Not found,.
// So if you just enter a number, it will think it is one of the status codes and try to read it as such. 
app.get("/b",(req,res)=>{
    console.log("/b path")
    res.send("12")
});

//Sending a boolean
app.get("/c",(req,res)=>{
    console.log("/b path")
    res.send(false)
})

//Next we have an object. This is a JSON object with properties and values
app.get("/d",(req,res)=>{
    console.log("/d path")
    res.send([{
        name:"timmy-tom",
        value:2,
        boolean:false,
        path:"/b",
        response:"This is an object response"
    },
    {
        name:"jimmy-john",
        value:3,
        boolean:false,
        path:"/b",
        response:"This is an object response"
    }])
})

//Now, when it comes to variables, you need to put them in a JSON object or as a string.
//Otherwise, you may run into an error.
app.get("/e",(req,res)=>{
    console.log("/e path")
    let x = 2
    res.send(JSON.stringify(x))
});

//here is another way you can send a variable as a string
app.get("/f",(req,res)=>{
    console.log("/f path")
    let y = true
    res.send(`${y}`)
});

//Here we are sending a JSON object again but with variables as the values.
app.get("/g",(req,res)=>{
    console.log("/g path")

    let varOne = 5;
    let varTwo = true;
    let varThree = "This is a JSON object with variables set as values"
    res.send({
        a:varOne,
        b:varTwo,
        c:varThree
    })
})


app.listen(3000,()=>{

    console.log("Listening on port 3000")
});

//Try these endpoints out when you run this file with node. Once you have received a response for each and understand
//how it works, then continue on to server-4.js.