What is a  middleware and why do we use them?

Middleware comes in the middle of the request and response cycle of the node.js execution. It also provides access to many functions like request and response objects with the Next function of the cycle.

Tasks that can be performed with the middleware functions include:

    -Making quick changes to the request and response objects
    -Calling the next middleware immediately as per the stack
    -Effectively executing any code
    -Automatically terminating the request-response cycle


With Node.js middleware, you can run any code and modify the request and response objects. You can also call for the next middleware in the stack when the current one is completed. 


What is next() in nodeJs?
The next function is a function in the Express router which, when invoked, executes the middleware succeeding the current middleware.