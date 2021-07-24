From the previous lesson, we now understand how to set up an express.js. This includes
how to set up differnt endpoints for our url and how to set up routes to send different 
types of responses. Now, we need to look at the "request" portion of the route. 

The request portion of the route plays a vital roll in determining what response we will
send back. We need know exactly what the request is wanting as well as determining if the
request is valid to receive the information. 

    Examples of this:

                    - What data is needed by the request? List of all the accounts or does it
                      just want one account?

                    - If the user is not logged in or if the request does not contain a valid
                      key, token, secret or password, how do we prevent sending the information?

With these situations in mind, we will be accessing the request information to check it prior
to sending a response. 

In the Lesson-2 folder you may notice some additional files. These will be explained throughout 
the lesson. Be sure to practice making your own server with routes that check the requests prior
to sending a response. You will need to have a strong understanding of these concepts before
moving onto the next lesson. 

Continue to server-1.js to begin. 