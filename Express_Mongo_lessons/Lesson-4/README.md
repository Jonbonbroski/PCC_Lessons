Now that we have a general idea of how to use the Express.js framework for our server routes, 
we can start learning about managing a database. When we are done, you will be able to combine 
both together so that you can create full-stack CRUD applications.

The database we will be using is MongoDB. This is called a "Non-Relational" database. A majority
of databases can be categorized as "Relational" or "Non-Relational"; Which is based off of how
they store data. Terms you may hear for these are "SQL" and "NoSQL" but we will go into those later. 

Sticking with Non-Relational databases, we can break those down into even more categories as well.
Examples of Non-Relational database types are :

    -Key-value: stores are the simplest NoSQL databases. Every single item in a key value database is stored as an  attribute name (or "key") together with its value. Examples include Riak, Voldemort, and Redis databases.

    -Wide-column: stores store columns of data together instead of rows and are optimized for queries over large datasets. Cassandra and HBase are wide-column databases.

    -Document databases: pair each key with a complex data structure known as a document. Documents can contain many different key-value pairs, or key-array pairs, or even nested documents. 

    -Graph databases: are used to store information about networks, such as social connections. Examples include Neo4J and HyperGraphDB. 

Out of the types listed above for Non-Relational databases, MongoDB is a document database. 
---------------------------------------------------------------------------------------------------------------

To use MongoDB, you will need to download and install it on your computer or you can use the online cloud base version. (It should already be installed on the computer currently). Once installed, you can use the platform
to make as many databases as you want. So if you have multiple projects you are working on, you can create
databases for each one.

There are three(3) main ways of interacting with mongoDB to create databases and store data.

    - mongodb shell
      We can interact with our databases and manipulate data using the command line. Command Prompt for Windows and Terminal for Mac.  

    - Scripting Languages
      We can use a scripting languages, like JavaScript and Python, to create functions in our server that can interact with the database for our applications. 

    - Using a GUI
      GUI stands for Graphical User Interface. This is a program we can open that will connect to our mongodb and allow us to interact with the databases there. MongoDB Compass is for those who install mongodb onto their computers while MongoDB Atlas is for those who use the cloud base version. 

The important thing to note is that all three methods connect to the same mongodb. This means, we can use any of them at any point in time to interact, create,read,update and delete data. So as an example, if you used a scripting language (JavaScript) to create a database for your app, you could access that databases using the command line or by using a GUI. This gives us a lot of flexability to manage and manipulate our data. However, it is important that you know how to use all three ways.

We are going to start with mongodb shell. We will use the command line to create a database and manipulate data.
Once we have covered that, we can move onto scripting language with the servers we have been making. Go ahead and move to mongo_shell-1.md file in the 1-mongo_shell folder and follow along so that you feel comfortable manipulating the data. 

