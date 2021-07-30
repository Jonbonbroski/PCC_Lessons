const express = require('express')
const cors = require('cors')
const app = express();
require('dotenv').config()
const bodyParser = require('body-parser');
app.use(cors())
const PORT = process.env.PORT || 5001

//The are two additional ways we can use the request object to pass information that we will 
//learn about in this lesson. The next on is called the "request headers" and can be accessed
//using the req.headers notation. 

//A request header is an HTTP header that can be used in a request to provide information
//about the request context, so that the server can tailor the response. For example, the "accept"
//header indicates the allowed and preferred formats of the response. This is also where we can find
//information to authenticate and authorize a user to access the information in our database.
//
//The user can provide things like id, token, key, password, secret inside of the headers of their
//query so we can use it.
//
//Example: 
//
//We will use a fetch request for this exmaple
//
//              fetch("http://localhost:5000" {
//                                
//                      method:"GET",
//                                              
//                      headers:{                               <----- The headers are saved in an object
//                                                                     below the "method". We can pass whatever
//                      id:12345,                                      properties we want to it. However,
//                      token:13Gji14b1BH700aXZznz,                    the headers are used for information
//                      password:"R0ck L0bster"                        regarding the request itself, so typically
//                                                                     we would not use this to pass information
//                      }                                              for searching/filtering data like we have for
//                      })                                             req.query and req.params. So in here, you
//              .then(response=>{return response.json()})              more than likely would not see something.
//              .then(data => console.log(data))                       like  color:"red".
//              .catch(error=>console.log(error))
//

//For this route, we have console.log the the request headers so you can see the entire object. 
//You will see many things listed but you should be able to see id,token and password keys inside of it. 
//We can then use that information to answer the response correctly. 

//Open the index-2.html to read more. Then you can continue on to server-3.js
app.get("/",(req,res)=>{
    console.log("GET request made to root folder")
    console.log(req.headers)
    
    if(req.headers.password == "R0ck L0bster"){
        res.send({message:"You have successfully authenticated yourself"})
    }else{
        res.send({message:"Incorrect password. Access denied."})
    }
})


app.listen(PORT, (error)=>{
    if(error){
        console.log(error);
        return;
    };
    console.log(`Listening on port:${PORT}`)
    //Accessing the PASSWORD variable in our .env file. 
});