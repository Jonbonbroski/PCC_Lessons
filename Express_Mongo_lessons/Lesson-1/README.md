In this lesson, we will be building a basic express server with node. 
To do this, we must start with a few steps.

1 - Install node on your computer (which it is already);
2 - Make a directory to start your project in. For this, we will use 
    the "Lesson-1" folder.
3 - Using the Command Prompt, we will use node's npm tool to install
    the express.js package into our new directory. This is done by using the command
    "npm install express" in our command prompt. Once that is done, it will create a package.json file and a node_modules folder. The package.json file lists all of the node packages we have installed (Express, React, Axios, Redux, etc.) along with the version and any dependencies that package requires. 
    
        - Dependencies are other packages/modules that need to be installed in order for the node_package
          we want to use, such as React or express, to be able to operate. So if you look inside the node_modules folder, you will see a lot of other files that have been installed besides express. That is because those are dependencies express requires in order to function. If you want to see what dependencies need to be installed, go into the package.json file and look for the "express" package object. They are in alphabetical order. You will see that it has a "requires" property with a list of package names. Node will take care of this when we run the npm install command. It will search for all
          the dependencies that all packages need and will install them automatically for us. Again, this is one of the reasons why node's npm package is so powerful. It can download and install all sorts of 
          node packages(tools) for us to use.

4 - Now that the package is installed, we will be creating a javascript file in the same directy ("Lesson-1" folder). This javascript
    file is the one we will be using to make the express server. To run this file, we will be using the node command "node fileName.js" in the command prompt. We will name this file "server.js". However, for these lessons, you may see server-1,server-2,server-3 etc. to
    demonstrate the next steps.

    - Keep in mind that any time we make a change to the server.js file, we must stop the node server and run the commande "node fileName.js" again. To stop the server, you will click the command prompt and then press the (CTRL + C) jeys at the same time. 

After this lesson, you will need to try and make your own node server using a template that will be provided. 

After reading this README, go to the server.js file in this folder to continue the lesson. 

Once you have understood AND PRACTICED the material, you can move onto the next lesson. 

