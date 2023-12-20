import express from 'express';
import bonjourApiRoutes from './bonjour-api-router.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
var app = express();

//support parsing of JSON post data
var jsonParser = express.json({ extended: true });
app.use(jsonParser);

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

app.use('/', express.static(__dirname + "/"));

app.get('/', function (req, res) {
  res.redirect('/html/index.html');
});

app.get('/html/bonjour', function (req, res) {
  let name = req.query.name;
  res.setHeader('Content-Type', 'text/html');
    res.write("<html> <body>");
    res.write('Bonjour ' + name  + ' Vous etes bien matinal' + '<br/>');
    res.write("</body></html>");
    res.end();
});

app.use(bonjourApiRoutes.apiRouter);

app.listen(8282, function () {
  console.log("http://localhost:8282");
});