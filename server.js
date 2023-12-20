import express from 'express';
import bonjourApiRoutes from './calcul-api-router.js';

var app = express();

//support parsing of JSON post data
var jsonParser = express.json({  extended: true}); 
app.use(jsonParser);

/*app.get('/', //route http://localhost:8282/
    //méthode appelée lorsque quelqu'un requète sur la route
    function (req, res, next) {

        res.setHeader('Content-Type', 'text/html');
        res.write("<html> <body>");
        res.write('<h2>'+ text.hello() + '</h2>');
        
        res.write("</body></html>"); 
        res.end();
    }
);*/

// CORS enabled with express/node-js :
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    //ou avec "www.xyz.com" à la place de "*" en production
    res.header("Access-Control-Allow-Methods",
      "POST, GET, PUT, DELETE, PATCH"); //default: GET, ...
    res.header("Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, PATCH, DELETE');
      //to give access to all the methods provided
      return res.status(200).json({});
    }
    next();
  });

  
app.use(bonjourApiRoutes.apiRouter); 

app.listen(8282 , function () {
    console.log("http://localhost:8282");
});