const express=require('express');
const app=express();
const bodyParser=require('body-parser');//added bodyparser 
const cors = require('cors');
const bcrypt=require('bcrypt');
var path = require("path");
app.use(cors());


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());


const signuprouter=require('./src/routes/singuprouter')
const bookrouter=require('./src/routes/bookrouter')

app.use('/user',signuprouter);
app.use('/books',bookrouter);

app.use(express.static('./dist/frontend'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/frontend/'}),
);

 app.listen(process.env.PORT || 3000
 ,() => {
    console.log("Server Ready on 3000"); 
  });
  