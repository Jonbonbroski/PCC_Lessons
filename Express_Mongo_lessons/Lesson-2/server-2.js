const express = require('express');
const data = require('./other_files/data.js');
const app = express();

//This time we are defining port as a variable. This is used often instead of typing a PORT
//inside of the app.listen() function. 
const PORT = 5000


//Now that we understand the different types of request methods and how to handle them, we 
//will need to look at the request itself. In specific, we will need to disect the "req" parameter
//of the routes we have been making. 

//The "req" paramter inside of the routes holds all of the information of the request that is sent to us. 
//Think of it as a label for a package that is sent in the mail. It will tell us who sent the package,
//where it is from, what is inside the package, etc.

//In our case, it will tell us what data the request wants. Does it want a specific piece of data? Does
//it want all the things in our database? Also, does the request have proper authentication to get that data?
//Using "req" is how we pass information to our routes so that we can return the correct response. 

//The first way we can use this "req" object is by accessing the "request's query". The request's query is
//defined in the url of the queries we send to our server. We can define a request query in our url by adding
// a question mark ?  followed by the query name which is then followed by an equal sign = and a value.

//Examples:
// If our endpoint is /account 
//
//  www.mysite.com/account?location=Arizona       --      (The req query is "location" and has a value of "arizona")
//  www.mysite.com/account?age=25                 --      (The req query is "age" and has a value of "25")
//  www.mysite.com/account?name=Tom               --      (The req query is "name" and has a value of "Tom")
//  www.mysite.com/account?age=30&?location=California  - (This shows how we can have multiple request queries
//                                                         inside one url. They are seperated by the ampersand "&"
//                                                         symbol. query "age" value "30" and query "location" with 
//                                                         a value of "California")


//For the examples above, think about being on a website where you need to search for specific accounts
//out of a database. Such as searching for all accounts in Arizona or all accounts that have an age
//of 30. You can see how we can use queries to narrow down the results. In turn, the routes we make
//can now use this information to sort through the data and return the results needed. 

//At the top, you may have noticed a file was brought in and saved to a varaiable called "data".
//This will stand in place of an actual database until we change it out later on. You can take 
//a look at it in the "other_files" folder of this lesson as data.js. It is a simple array
//with multiple objects inside that represent accounts. We are going to use the routes below
//to search through this information. 


app.get("/account",(req,res)=>{
    console.log("GET request made to account path.")
    console.log(req.query)
})










app.listen(PORT,(err)=>{

    if(err){
        console.log(err)
        return;
    }

    console.log(`Listening on port: ${PORT}`)
} )