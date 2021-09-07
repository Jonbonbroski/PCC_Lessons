// For this lesson, we are going to learn how to use Mongoose.js to interact with our database. 
// Mongoose.js is defined as a library for Object Data Modeling(ODM) for MongoDB. On top of many other
// things it can do, it is designed to help us structure our databases and the data that we 
// manipulate inside of them. 

// By giving our database more structure, it makes it much easier for us to interact with the data.
// This means the data we put in and the data we get out is much more predictable. Remember that
// the documents we put in our collections can all be different. So without structure, it could make
// our logic and validation coding difficult. So this is why we implement Mongoose.js. 

// Mongoose.js has its own commands for interacting with the database. So you will some similar
// commands as we did with mongodb package but you there will be others it can use as well to 
// interact with our database. 

//------------------------------------------------------------------------------------------------------

// Understanding Mongoose Structure 

// In MongDB, we know what databases, collections and documents are. (Review 1-mongo_shell if you need to)
// Mongoose adds a few more terms in order to use it. Here are those terms:

// - Schema - 
// Schemas are from Mongoose. Schemas map to each our collections. They define what each 
// document is going to look like and what type of data each field has. As an example, if you were making 
// a collection for "people", you could use a Schema to say that each document will have a "name" and "age" field.
// You could then say the values of the name field will be  a string and the values of the age fields 
// will be a number.
// You could also add other things such as "required". Meaning a document will not be created in our collection
// unless the name or age  field has a value. 

// - Model -
// A Mongoose "model" provides an interface to the database for creating, reading, updating and deleting data. 
// The Schema creates the structure of the documents, the model uses that Schema to actually create the 
// document. The model is considered a class/wrapper for the Schema. So like the example of "people", the Schema
// would set name and age with string and number as the values, the model would create the actual document
// {"name":"John Doe","age":40}

//------------------------------------------------------------------------------------------------------
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000


// To begin, we download the mongoose npm package. Then we bring it in like any other package. Note how
// we are bringing in mongoose and not the monodb package as we did for the last example. We don't need
// to bring in the mongodb npm package unless we are wanting to use the basic mongo commands.
const mongoose = require("mongoose");


// Now we connect to our MongoDB with mongoose. With the mongodb package, we made a client and then
// used client.connect(). For this, we use mongoose.connect() and pass the URI. 
mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true})


// For this example, we will continue to use the "grocerystore" from the previous example. Go ahead and
// create a collection called "products" for the grocerystore database using the mongodb shell.

// Now we will make a Schema for our products collection. 
// We will make a Schema variable for the mongoose.Schema method. This will allow us to make different 
// Schemas for each collection. 
const Schema = mongoose.Schema

// Next, we will make a variable called "ProductSchema" and save it as a new instance of the Schema variable 
// we made. Naming conventions want Pascal Case for the variable. Meaning the first letter of each word is 
// capitalized. (Ex: "BookSchema", "AnimalSchema", "PeopleSchema"). The Schema method takes an object as an 
// parameter. In this object, we put in the fields we want our products to have: "name", "quantity" and "price".   
// So now each document that is made in our "products" collection will have the name,quantity and price fields.

// The values of the name,quantity and price fields in our Schema will be objects. This is where we can define
// the type of data the field will have when a document is created as well as if it is required or not.

const ProductSchema = new Schema({
    name : {
        type:String,
        // required:true
    },
    quantity : {
        type:Number,
        // required:true
    },
    price : {
        type:Number,
        // required:true
    }  


    })

// Now that a Schema is created, we will make a model so that we can use the Schema when interacting with
// our database. We need to make a variable called Model and bring in mongoose.model method.
const Model = mongoose.model

// Now we will make another variable called Products using the mongoose.model method. The first parameter
// is the name of the collection we want to use. This will be the "products" collection. The second
// parameter is the Schema we want to use for this collection, so we pass the ProductSchema we created.
const Product = Model("products",ProductSchema)

// We can now use the Product variable defined above to create documents in our "products" collection with the 
// structure of the Schema. We will do this inside of the route for express. 


app.use(cors());
app.use(express.json());

// For this server, we will only have one route, the next server will have four(4) routes so that we can 
// see how to create, read, update and delete with mongoose. 

// We are using a POST request route since we are adding something. We will use the body parameter to pass
// the data.
app.post("/addItem",(req,res)=>{

    //First, we create a variable. The variable is a new instance of the Product variable we created
    //so that we can create a new product. We pass Product the name, quantity and price fields with values 
    //comming from the body parameter.
    const addProduct = new Product({name: req.body.name, quantity:req.body.quantity, price:req.body.price })

    //After creating the addProduct variable, we use the "save()" method to save it into our database. 
    //This is used in place of insertOne(). 
    addProduct.save((err,result)=>{
        if(err){
            console.log(err)
            res.send({message:"Item was not added"})
        }else{
        console.log(result)
        res.send(result)
        }
    })

})





//Check out the html-1 with this server. When you have a strong understanding, move onto server-2
app.listen(5000,()=>{
    console.log(`Server listening on port:${PORT}`)
})


