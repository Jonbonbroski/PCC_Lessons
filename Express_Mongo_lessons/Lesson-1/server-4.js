const express = require("express");

//Notice this new tool called "path" we are bringing in.. We will go over it below. 
const path = require("path")


const app = express();


//For other responses, we can actually send files back as well. To understand this, think of the "Live Server"
//extension you have been using for Vidual Studio Code at the bottom right. When you click "Go Live", it opens
//up a port and loads the html and javascript files you are working on. This basically does the same thing. 
//When we run this server-4.js file with node, it will open up a port as it has done before, but when
//you visit the endpoints using the url, you will get a file back. For this example we are using a test.json file
//and a test.html file that can be found in the "other_files" folder in this directory. 

//To send files, we will do the same thing as before but will instead use the "sendFile()" method instead of
//the "send()" method. The sendFile() method takes in a direct path. 
//Example: C:/Users/username/Desktop/Code/Lesson-1/other_files/fileName
//However, this presents a problem for us. If multiple computers are using this file, they all will have different
//usernames in their computer or the Code folder could be somewhere else instead of on their desktop. So in that case,
//each person would have to continue to change that direct path everytime it is being used by a different computer. 
//This is where __dirname comes in. 

//__dirname is a keyword. It represents the entire path of where the directory is located that this server-4.js is 
//inside of. So the __dirname of this server-4.js file would be C:/users/username/Desktop/Code/Lesson-1  if the Code
//folder is on your Desktop. We can use __dirname instead of typing a direct path so that it can change on its own
//regardless of what computer is being used and regardless of where the folder was installed.

//To help with this, we installed another npm package called "path" and saved it as a variable above. path is going to 
//help is join the __dirname with the file we want to send.

app.get("/",(req, res)=>{

    res.send("This is the root path")
});

//Here is the first example. We are going to send a .JSON file as a response instead of typing out a json
//object as before. First, we use the "sendFile()" method on the "res" parameter. Inside of the sendFile() method,
//we will use path.join(). This will allow us to join two paths together. Inside of path.join(), we will pass two
//paths to it. The first being __dirname, which gets us the path all the way up to the Lesson-1 directory.
//Next, we will pass the path of where the file we want to send is located. Think of this like adding different 
//endpoints as we have done for the other examples.  

//Example:                C:/users/username/Desktop/Code/Lesson-1/other_files/test.json 

//Is the same as:         path.join(__dirname,"/other_files/test.json")

//This one will send a json file.
app.get("/a",(req, res)=>{

    res.sendFile(path.join(__dirname,"/other_files/test.json"))
});


//This one will send a basic html file instead of a json file. 
app.get("/b",(req, res)=>{

    res.sendFile(path.join(__dirname,"/other_files/test.html"))
});

//When you go to the endpoints after launching the server, you will see the files display.
//Feel free to check out the files and make changes. 

//Here you will notice we add "err" with an if statement. "err" stand for Error. Basically, we are saying
//if there is an error with our server, console.log the error so we know what happened. We will use this more
//later on with our routes.
app.listen(3000,(err)=>{

    if(err){
        console.log(err);
        return;
    }

    console.log("Listening on port 3000")
})


//Now it is time for you to build your own server and try sending different types of responses. Practice this
//and make sure you have a strong understanding before moving on to Lesson-2.