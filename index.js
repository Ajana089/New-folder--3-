const express=require('express');
const app=express();
const bodyParser=require('body-parser');//added bodyparser 
const cors = require('cors');
const bcrypt=require('bcrypt');
var path = require("path");
app.use(cors());
// var distDir = __dirname + "/dist/";
//  app.use(express.static(distDir));

var distDir = __dirname + "/dist/";
app.use(express.static(distDir));


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());
app.set('app','./frontend/src/app'); 

const signuprouter=require('./src/routes/singuprouter')
const bookrouter=require('./src/routes/bookrouter')

app.use('/user',signuprouter);
app.use('/books',bookrouter);

app.get('/', (req, res) => {
  //res.sendFile(path.join(__dirname ,'../frontend/src/app/home', 'home.component.html')); 
  res.render('home.component',{})   
});

 app.listen(process.env.PORT || 3000
 ,() => {
    console.log("Server Ready on 3000"); 
  });
  