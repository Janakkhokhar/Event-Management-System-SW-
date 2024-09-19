const express = require("express");
const PORT = 9006;
const path = require("path");

const passport = require('passport');
const session = require('express-session');

const db = require('./cofig/mongoose');
const jwt = require('./cofig/passport-jwt-stratergy');

const app = express();

app.use(
    session({
        name: "jwtPractical",
        secret: "jwtPractical",
        resave: true,
        saveUninitialized: false,
        cookie: {
            maxAge: 1000 * 60 * 100,
        },
    })
)

app.use(passport.initialize());
app.use(passport.session());
app.use(express.urlencoded());


app.use("/upload", express.static(path.join(__dirname, "upload")));

app.use('/admin', require('./route/admin'));
app.use("/user",require('./route/user'));
app.listen(PORT, (err) => {
    err ? console.log("server not connect") : console.log("server is connect", PORT)

});
