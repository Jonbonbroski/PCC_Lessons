We will start by using the command line to connect to our mongoDB. Once we have connected, 
we will then be able to create databases and manipulate data.

Before we begin, we need to make sure a couple of directories were created so we do not run into any 
errors. Open up file explorer and click on the C drive "OS(C:)". Once there, you should see directories
such as "Program Files", "Users" and "Windows". Check to see if there is a directory named "data". If there
is no such folder, create a new folder and call it "data". (see 1.PNG)

Then go inside the new "data" directory and create another folder called "db". These folders are required
for MongoDB to work. However, sometimes they might not be created during installation. This is where data
for our databases will be stored. (2.PNG)
------------------------------------------------------------------------------------------------------------

Now, open up a command prompt or terminal window. We need to navigate to the mongod.exe file so that we can run mongoDB. Use the "cd" command to navigate in the command prompt as you have done before. (cd ..) (cd directoryName)
Go to this directory:

    - C:\Program Files\MongoDB\Server\5.0\bin 
        *5.0 is the version installed. Your number may be different. 

Once there, run the command:  mongod.exe (3.PNG)
This will run our mongodb like it has for our servers in express. By default, it uses port 27017.

If no errors have occured, you will open up a second command prompt. Navigate to the exact same 
directory as above in the second command prompt window.

Once there, run the command: mongo (4.PNG)

You should now see your second terminal connected and ready for commands to interact with databases and data. 
(5.PNG)

If you have been able to connect and both terminals look like the image, you can move onto mongo-2 folder. 
