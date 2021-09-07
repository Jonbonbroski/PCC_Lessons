const express = require("express");
const cors = require('cors')
const PORT = 5000
const app = express()
//Bring in mongoose, Schema and model 
const mongoose = require('mongoose')
const Schema = mongoose.Schema
const model = mongoose.model





// In this example, we will review CRUD application using mongoose. We will see the ways we can create, read,
// update and delete data. We will use the same "products" collection from server-1.js. Mongoose supports
// the use of the syntax of the mongodb package. So you will see some things that are similar.

//Connect to our MongoDB with mongoose
mongoose.connect("mongodb://localhost:27017", {useNewUrlParser: true})


//Create a Schema for our collection to use. 
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

//Create a model to interact with our database using the Schema
const Product = model("products",ProductSchema)



app.use(cors());
app.use(express.json());


app.post("/addItem",(req,res)=>{

    const addProduct = new Product({name: req.body.name, quantity:req.body.quantity, price:req.body.price })

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

//This is the route to Read data. This example, we have left the find() method blank to get all the documnets
//in the database. You can also use findByID(). findOne() and where() methods. 
app.get("/readItems",(req,res)=>{

    // Notice how the find() method is also taking a callback function with "err and "result".
    // This allows us to grab the response from MongoDB after making a command or log the error. 
    Product.find({},(err,result)=>{
        if(err){
            console.log(err)
        }
        console.log(result)
        res.send(result)
    })
    // console.log(items.toArray())
})

// This route will update a document in our database. We are using updateOne(), but you can update multiple
// documents if you use the update() method. 
app.put("/updateItem",(req,res)=>{
    
    //Again, we see that the find, update, delete and save/insert methods take a callback function as a 
    //second parameter, allowing us to send/log the error or result we get back from MongoDB after the 
    //command
    Product.updateOne({name:req.query.name},(err,result)=>{
        if(err){
            console.log(err)
            res.send({message:"Item was not updated"})
        }else{
        console.log(result);
        //The reason we are sending Product.find() back is so that we can get the updated documents
        //in our database.This way we can display them.
        res.send(Product.find({}))
        }
    })
})


app.delete("/deleteItem",(req,res)=>{
    
    Product.deleteOne({name:req.query.name},(err,result)=>{
        if(err){
            console.log(err)
            res.send({message:"Item was not updated"})
        }else{
        console.log(result);
        //The reason we are sending Product.find() back is so that we can get the updated documents
        //in our database.This way we can display them.
        res.send(Product.find({}))
        }
    })
})

app.listen(PORT,(req,res)=>{
    console.log(`Server listening on port: ${PORT}`)
})