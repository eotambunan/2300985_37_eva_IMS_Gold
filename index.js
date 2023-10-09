const express = require ('express');
const router = require('./routes/router');
const app = express()

// .env
require('dotenv').config()
const port = process.env.PORT
// cookie-parser
const cookieParser = require('cookie-parser')
app.use(cookieParser())


// ViewEngine
app.set("view engine", "ejs");
app.set("views", "./views");

// Express Static
app.use(express.static('public'))

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));



app.use(router)



app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})