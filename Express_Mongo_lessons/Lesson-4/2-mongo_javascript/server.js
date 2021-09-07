// After learning how to use the mongodb shell to create and manipulate a database, we are not going to integrate
// that with our server so that we can use JavaScript to manipulate the database. 

// Typically we would use a "seeder" file to create/populate our database for us. A seeder(seed) file uses 
// a scripting language, such as JavaScript, to run the commands for mongodb shell. However, we will wait to 
// go over seeder files right now. If you would like to see an example of a seeder file, like at the "seed.js"
// inside of the mongodshell_exercise folder. It uses mongodb inside of javascript to create the database,
// collections, and documents for us when we run that file using node. This way we do not have to type each 
// command one-by-one in the mongodb shell terminal. 
// -----------------------------------------------------------------------------------------------------------


// !!! Before we begin. Use the mongodb shell to create a "grocerystore" database. Then Add a collection to it
// called "mycart". With these two things created in your MongoDB, we can use this javascript file to interact
// with it using express routes as in the previous lesson. 


//-------------------------------------------------------------------------------------------------------------



// To begin, we first need to download the mongodb npm package and bring it in just like we do any other package. 
// It is similar to how we bring in express, but the documentation is a bit different. We are going to save it
// as MongoClient. This will allow us to use the base mongodb shell commands
const express = require("express")
const cors = require("cors")
const { MongoClient } = require("mongodb")


// Next, we will create the app variable as well as a "URI" variable. (Unifrom Resource Identifier)
// Think of the URI as similar to a URL. It is the location of where our database it being stored.
// Since this is on our own computer, we will use "localhost:27017". Port 27017 is the default port
// for mongodb to be installed on. However, if our MongoDB was on the internet, such as with Atlas, 
// it would use a different URI. 

//*Note: The URI is considered sensitive information. So usually it would be saved in a .env file as 
//we have done before with other sensitive information. 
const app = express();
const URI = "mongodb://localhost:27017"


// Now that we have made a URI, we will create a variable called "client". Think of this similar to as 
// the "app" variable that we made with express. This allows us to connect to the location the database
// is being stored as well as close the connection, etc. 
const client = new MongoClient(URI)


// Next, we will make a variable called "db". This is referring to the database that we are going to be 
// using. Sometimes, we would save the name of the database as a variable and pass it in instead but in this
// case we will just use a string. This string is case sensitive. We want this to be the exact string
// of the database that we are wanting to use. Example: "Grocerystore" is a completely different 
// database than "grocerystore". This "db" variable allows us to interact with that database so we can 
// manipulate collections and documents. 
const db = client.db('grocerystore');

// Now that we have access to the database, we will create a variable to save that connection. This allows
// us to manipulate the documents inside of it easily. If you have multiple collections, you will want to 
// make a variable for each one of them. 
// Ex: const vegetables = db.collection("vegetables")
//     const fruit = db.collection("fruit")
//     const bread = db.collection("bread")
//


// So now comes the connection. We want to connect to our MongoDB BEFORE we start making routes
// and start our express server. Once the database is connected, we can start interacting with it in 
// our routes. To connect to our mongo database, simply use "client.connect()". The connect method takes
// a callback function inside of it as an parameter, so we can put a console log to show that we have 
// connected successfully. 
client.connect(()=>{    
    console.log("Database connected");

});

//Now that we are connected to our MongoDB, we are going to create four(4) routes. One to Create, Read,
//Update and Delete(CRUD). We will use these routes to manipulate documents inside of our database. 
//For these routes, pay attention to how get,post,put and delete line up with find,insert,update and delete
// mongodb methods. 

//There are more optimal ways to code this but for now we are going to put "async functions" in our routes. 
//async functions will help us to aviod additional code for promise chains. Basically these functions use
//the "await" keyword. The "await" keyword makes sure the promise finishes before moving on. That way we 
//can ensure we have made a connection with the database before moving on to the next step. 

app.use(cors())
app.use(express.json())

// In this route, we are reading information. We want to see what is currently in our database
// and display it to the user.
app.get("/readCart",(req,res)=>{
    console.log("Request made to readCart path")

    //Here we are making an async function called "read". This allows us to use the "await" keyword.
    //await will complete the promise before trying to move onto anything else. 

    //We decalse an async function by "async function functionName(){}"
    async function read(){

    //We create a variable "currentCart" to save the results that we get back from the database 
    //when using the find() method. The toArray() method helps clean up the results so we can easily
    //see them for our purpose and for sending to the UI. 
    const currentCart = await db.collection("mycart").find().toArray()
    //console logging what we get back from that find() method on our collection.
    console.log(currentCart)
    //sending the response we got from the database back to our UI.
    res.send(currentCart)
    }

    // Now we call the function so it will execute.
    read();

});


//In this route, we will add something to our database. The data is coming through the body parameter. 
//We are using an asyn function as well. Again, the async function will ensure we don't try to do something
//with the data before it has completed connecting to the database and made the change.
app.post("/addItem",(req,res)=>{

// Again, we are using an async function as before with the await key word. 
async function add(){

<<<<<<< HEAD:Express_Mongo_lessons/Lesson-4/2-mongo_javascript/server.js
// We define a variable called "addedItem". Remember that this variable represents the
// the response we get back from MongoDB when the command insertOne has finished. 
        let addedItem = await db.collection("mycart").insertOne({"name":req.body.name})
        console.log(addedItem)
        res.send({message:"Item was added"})
=======
    

        db.collection("mycart").insertOne({"name":req.body.name}).toArray()
        console.log(addedItem)    
    
>>>>>>> 25080269ab833f1728268b173345493ac56cae29:Express_Mongo_lessons/Lesson-4/2-mongo_javascript/mongo_javascript.js
}

add();

})


// This route we are updating an item.
app.put("/updateItem",(req,res)=>{

    async function update(){
            console.log(req.body)
            let updateItem = await db.collection("mycart").updateOne({"name":req.body.name},{$set:{"name":req.body.newName}})
            console.log(updateItem)
            res.send({message:"Item was updated"})
    }
    
    update();
    
    })



// This route we are deleting an item. 
app.delete("/deleteItem",(req,res)=>{

    async function deleteItem(){
    const deletedItem = await db.collection("mycart").deleteOne({"name":req.body.name})
    console.log(deletedItem);

    res.send({message:"Item was deleted"})
}

deleteItem()

})




// Don't forget that app.listen() is the last thing we want to put in our server. We 
// need to connect to the database and define our routes before starting the server. 
// After you start this server, open the index.html to see the relation between UI
// and backend. 
app.listen(5000,()=>{

    console.log("Server connected")
})


