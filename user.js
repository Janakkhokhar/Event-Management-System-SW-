const express = require('express');
const routes = express.Router();
const Passport = require('passport');
const userpanel = require('../model/userpanel');
const usercontroller = require('../controller/usercontroller');


routes.post('/adduser', userpanel.UploadUserImg, Passport.authenticate("userverify", { failureRedirect: "/admin/faillogin" }), usercontroller.adduser);

routes.get("/AllEventView", usercontroller.AllEventView)

routes.delete('/deleteEvent/:id', usercontroller.deleteEvent);

routes.put('/updateEvent/:id', usercontroller.updateEvent);
module.exports = routes;