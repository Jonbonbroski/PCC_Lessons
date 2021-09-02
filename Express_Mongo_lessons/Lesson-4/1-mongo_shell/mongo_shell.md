We will first learn how to use the mongodb shell to create a database
and manipulate data. This is important to know because you may need to use the 
shell to test your application's database or manually manipulate data without using
a GUI or a scripting language, such as JavaScript. 

The mongodb shell is a command prompt/terminal window that we can use to directly 
interact with MongoDB. Let's open it up so we can start giving it commands. 
*Note this is for Windows with default installation. Other platforms will have different locations. 

 - First, open file explorer. Then, navigate to C:\Program Files\MongoDB\Server\4.4\bin 
    *4.4 is the version installed. Your version may be different. 

 - Now double click on mongo.exe file. This will open a command prompt window. This is the mongodb shell. 
   (img-1)
    *You can right-click and create a shortcut for the mongo.exe file for ease of access later on. 

Now that the mongodb shell is open, we can start entering commands in it to create databases, collections, 
documents, etc. We can use this window to observe and modify any of the databases we have created for any
of our projects. Think of this as a "hub" that allows us to see all the databases we have created as well
as any of the data. 
*Note: If yours is not working. Check your C:/ drive folder. (You should see other folder like "Users", "Program Files", etc.). Check for a folder called "data". If there is not one, create a new empty folder in the C:/ drive
and call it "data". Then, go inside the folder and create another empty folder called "db". These folders store 
our data on our computers. Sometimes, during installation, MongoDB might not create these folders so we need to 
make sure they are connected. 
------------------------------------------------------------------------------------------------------------------

With the mongo shell running, let's enter our first command to see what databases are currently created. 
    - Enter the command: show databases
              *or enter: show dbs
    - Then click Enter key

You should now see three databases show up. admin, config, local. (img-2)
These are default databases that we do not want to mess with right now. Theses databases are automatically
created by MongoDB installaltion. 

So let's create our own database that we can interact with. Again, we can create as many databases as we want and
we can delete them at any time. So no worries if you have multiple projects. First, let's review how mongodb is
structured. 

Each database we create can has multiple "collections". Collections are how we categorize our data. 
Example, you could have an "animals" database and have a collection for dogs, a collection for cats,
a collectionf or birds, etc. 

Inside of collections we have "documents". Documents are each instance of data that we have in out
collection. Documents are BSON objects. (Binary JSON object). They look exactly like JSON objects 
but or compact and allow us to store more complex data in our database such as other objects and arrays as values.

Below is an example of the hierarchy structure of mongodb. "animals" is our database. Inside our database
we have two collections, "dogs" and "cats". Inside of each collection are "documnets", which are BSON objects
that have a name for each animal we want to store in our database. 


    animals -                                   <------------  Database

       dogs -                                       <------------  Collection 
            -{name:"Scooby-Doo"}                       <--
            -{name:"Snoopy"}                              |----------  Documents
            -{name:"Toto"}                                |
            -{name:"Lassie"}                            <--

      cats -                                       <------------  Collection
            -{name:"Garfield"}                          <--
            -{name:"Tom"}                                  |---------  Documents
            -{name:"Felix the Cat"}                        |
            -{name:"Cheshire Cat"}                      <--


Documents are basically everything we want to store in our database, collections just help us to organize
the data into groups. 

Now, let's try creating our database. To create a database, we enter the command: use nameOfDatabaseYouWantToCreate
The "use" keyword will switch which database we are using. So if we have an "animals" database and a "sports"
database, we will enter: use sports   to change to the sports database.  
*Note: You need to switch to the database you want to interact with before you can do anything to it. 

MongoDB is they type of the database that will create something if it does not exist already. So if you used
the command: use sports  it will create a "sports" database if it does not exist already. If it does exist already, 
then it will just swap to it. 

 - Enter this command in the mongodb terminal: use cars
   (img-3) You should then see "switched to db cars"

 - Next, we need to create a collection. MongoDB automatically created the database for us but it will not stay
   there unless we add collections and data to it. 
   Enter the command: db.createCollection("favorites")
   *You should recive { "ok" : 1 } as a response.

"db" stands for the database we are CURRENTLY using. In this case, it would be "cars" since we switched to it. 

 - Now, lets enter some data. No worries, we will go over more about the different commands available to the 
   mongodb shell. 
   Enter command: db.favorites.insertOne({"make":"Ford", "model":"Mustang"})
   *(img-4) You should receive the response:  

    {
        "acknowledged" : true,
        "insertedId" : ObjectId("xxxxxxxxxx")        <---- automatically generated id number
    }


MongoDB is big on returning responses after you give a command. If you make a mistake or if something was unsuccessful, it WILL let you know. 

 - Last, let's look at the data inside of our database, inside of our "favorites" collection. 
   Enter the command: db.favorites.find()

You should now see the document we created in our collection. The resonse should look something like this:
{ "_id" : ObjectId("xxxxxxxxxxxxxxxxxxx"), "make" : "Ford", "model" : "Mustang" }

Before you continue on, try and add your own favorite car. Use the insertOne() method just as done above
to add it then use the find() method again to see both in the collection. 
------------------------------------------------------------------------------------------------------------

After you have added your own favorite car to the favorites collection, use this command to add something else
to that favorites collection. 

    - Enter Command: db.favorites.insertOne({"make":"Lamborghini","model":"Diablo","year":2001,"mostFav":true, "yearsMade":[1990,1991.1992,1993,1994,1995,1996,1997,1998,1999,2000,2001]})

    - Next, enter command again: db.favorites.find()

You should now see something similar to this: (img-6)

Notice how the "Lamborghini" document has more fields than the "Mustang". (Fields are the object properties we give such as "name", "make", "model", "year", etc.)

This is one of the biggest strengths and biggest weaknesses of a mongodb database. We can add whatever
data we want to each document. It does not have to match the same structure as the rest of the data. MongoDB will allow you to enter whatever data you want to for each document. However, this may be tricky to sort through if
your documents are all different. 

------------------------------------------------------------------------------------------------------------------

So now that we have a general impression of the mongodb database, let's look at some of the basic 
CRUD (Create,Read,Update,Delete) commands that we can use to manipulate the database, collections and documents. 

First, don't forget you need to use the ( use databaseName) command to switch from each databases. You will need
it to start a new one. 


C - Create

    - db.createCollection("nameOfCollection")          -  Create a collection inside of the database you have
                                                          chosen.

    - db.nameOfCollection.insertOne({"field":"value"}) - Creates a document inside of your collection. This document
                                                         can have as many "fields" and "values" that you want. The name of the field needs to be a string, such as "make" and "model" in the above examples. The values can be strings,
                                                         numbers, booleans and even more complex data structures such as objects and arrays: "field":{x:y} & 
                                                         "field":[1,true,"string"]



    - db.nameOfCollection.insertMany([{"field":"value"},{"field":"value"}]) 
    
                                                        - This commmand allows us to insert multiple documents at the same time. Example: insertMany([{"car":"car1"},{"car":"car2"},{"car":"car3"}]). This can be helpful if you need to add multiple things in your application at the same time or in seeder files for adding "dummy data" to your application.


R - Read

    - db.nameOfCollection.findOne({"field":"value"})   -  This command helps us read data in our database. It helps
                                                          us to find one document. The field and value you enter are a filter for something specific in the document you are looking for. As an example, if you have multiple accounts in your collection, you could look for a person's last name. findOne({"last_name":"Smith"}). This will return a document that has that field and value. *Note: Both the field and value are case sensitive and spelling must be correct. Also, if you have multiple documents that have the last name "Smith", this will return the first on in your document that matches. 
                                                          You can enter multiple fields to filter to help find the account. Example: 
                                                          findOne({"last_name":"Smith","first_name":"Tim","age":30})
                                                          This will look for the document that has all the matching fields and values.

    - db.nameOfCollection.find({"field":"value"})    -    This command will find all instances in your database that
                                                          match the filter fields and values. As above, you can enter as many fields and values that you want to. If you leave it empty, it will show all documents in your collection as we did above. You can add a limit if you want to. Example: find({"last_name":"Smith"}).limit(5)
                                                          This will find the first 5 documents in your database that match the following fields and values. 

    - show databases           - These commands show all the databases currently created in your MongoDB            
    - show dbs



    - show collections         - This command will show all collections inside of the database that you are
                                 currently switched to. 



U - Update
                                        
                                        filter                   update
                                           |                        |
    - db.collectionName.updateOne({"field":"value"},{$set:{"field":"value"}}) --|
                                                                                |
                                                    ----------------------------|-------------------------------    
                                                    This command will allow use to filter for the one document that we are looking for and update it. The first object with field and value is what we use to filter through our documents to find the one we want to update. It is used the exact same way as the find methods above. You can use one or multiple fields and value to search. The second object has a keyword from mongo called "$set". This tells mongodb we are updating something in that document. The second field and value is the name of the field we want to update and the value we want to update. We can either type a field that already exists in the document or we can add a completely new field to the document. Mongo is not picky. 

            
    - db.collectionName.updateMany({"field":"value"},{$set:{"field":"value"}}) -|
                                                                                |
                                                    ----------------------------|-------------------------------
                                                    This command acts as the same above but will allow us to update multiple documents at the same time. We can filter for specific documents to update or we can update all documents by removing the filter. As like above, we can use this to add new fields to documents as well.


D - Delete

    - db.collectionName.deleteOne({"field":"value"}) - This command allows us to delete one document. We use the
                                                       fields and values to filter for the document that we want to delete. *Note: Similar to findOne(), this will delete the first document that matches the fields and values. So be sure to have way to locate the exact document that you want to delete. Remember that mongodb creates a unique id for every document, so that may be a good way to filter. 

    - db.collectionName.deleteMany({"field":"value"}) - This command will delete multiple documents that match the
                                                       filtered fields and values. You can set a limit to it as well. 

    
You can type the command: help
at any point in time in the mongo shell terminal and it will show all the commans available to use. 

There are many more commands and options that we can use but these are the basic commands for CRUD application. 
Try to complete the mongoshell_exercise in this Lesson-4 folder. Once you have, you can move on 2-mongo_javascript
lesson to see how we can use these commands in JavaScript. Be sure you have a strong command of the mongodb shell terminal. You will use it very often with managing and monitoring your database when using JavaScript. 


 