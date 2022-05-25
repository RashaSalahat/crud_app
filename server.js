//to start the server
//project structure :
const express = require('express');

const dotenv = require('dotenv');

const morgan = require('morgan');   // to log a req on console whene
const bodyparser = require("body-parser");
const path = require('path'); // it's inbuilt already in the application

const session = require("express-session");
const { v4: uuidv4 } = require("uuid");
const connectDB = require('./server/database/connection');

const app = express();

dotenv.config( { path : 'config.env'} )
const PORT = process.env.PORT || 3000

// log requests on console
app.use(morgan('tiny'));

// mongodb connection
connectDB();

// parse request to body-parser
app.use(bodyparser.urlencoded({ extended : true})) // he said true

// set view engine in this app we are using the ejs template engine
app.set("view engine", "ejs")
//app.set("views", path.resolve(__dirname, "views/ejs"))  // if you put all your ejs in the views folder
// load static assets
app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))

app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));
// load assets
app.use('/css', express.static(path.resolve(__dirname, "assets/css")))
app.use('/img', express.static(path.resolve(__dirname, "assets/img")))
app.use('/js', express.static(path.resolve(__dirname, "assets/js"))) // he said you only need to specify the name of the file and the folder it exists in
// eg: we have a style.css inside : css     the path is css/style.css
// load routers


// load assets
app.use('/cssgame', express.static(path.resolve(__dirname, "assetsgames/css")))
app.use('/img', express.static(path.resolve(__dirname, "assetsgames/img")))
app.use('/jsgame', express.static(path.resolve(__dirname, "assetsgames/js"))) // he said you only need to specify the name of the file and the folder it exists in
// eg: we have a style.css inside : css     the path is css/style.css
app.use('/', require('./server/routes/router'))
app.get('/', (req, res) =>{
    res.render('base', { title : "Login System"});
})


app.listen(PORT, ()=> { console.log(`Server is running on http://localhost:${PORT}`)});