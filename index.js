const express=require('express');
const app=express();
const bodyParser=require('body-parser');//added bodyparser 
const cors = require('cors');
const bcrypt=require('bcrypt');
app.use(cors());


app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json());

const signuprouter=require('./src/routes/singuprouter')
const bookrouter=require('./src/routes/bookrouter')

app.use('/user',signuprouter);
app.use('/books',bookrouter);

// const PORT=3000;
// app.listen(PORT,()=>console.log("server is ready at 3000"))
app.listen(process.env.PORT || 3000, () => {
    console.log("Server Ready on 3000"); 
  });
  