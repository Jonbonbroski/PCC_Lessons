//First, we need to bring in the express module we installed with npm so that we can access its tools
//in this javascript file. You need to do this for every file that you want to use the tools in.
//To bring in the express tools, we will use node's "require()" method and we will need to save
//it as a variable. 

const express = require('express');//For node modules, we do not need to use a path, we can just type "express"
                                   //and it will automatically know where to look. For anything else, we would need
                                   //to type in a path to where the file is. This only works IF the javascript file,
                                   // in this case server.js. is in the same directory where we installed the node packages.

//Next, we need to save an instance of express so that we can use its tools. 
//We will save this instance as a variable called "app". 
//"app" is now our express server. So now we can tell it what to do.

const app = express();


//Now we need to tell "app" what to do. In this case, we want it to listen on a port so that
//we can send signals to it, such as queries. This way you will see how we can handle those
//signals to respond. 


//Node's listen method takes two paramters, a port number we want to listen on and a function
//to run once it is listening. 

app.listen(3000,()=>{

    console.log("Server is listening on port 3000!!!")
});

//Run this file using node. Once you have, you should see the console log appear in the console. 
//When That is working move on to server-2.js . 