var express =require('express');
var router =express.Router();
var users = require('../models/users');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var mysql= require('mysql');
var cfg=require('../config');

router.get('/',function(req,res,next){
	console.log('login');
});


/**
* @api {post} /login/ user authentication
 * @apiName login
 * @apiGroup authentication
 *
 *@apiParam {string} [usn]  usn is required
 *@apiParam {string} [password] password is required
 *
 *@apiSuccess {string} sucesss
*/

router.post('/',function(req , res ,next){
    //console.log(req);
var usrname = req.body.usn;
var passwrd = req.body.password;

crypto.pbkdf2(passwrd, 'Salt', 100, 30, function (err, key) {
        if (err) {
            //console.log("In encryption", err);
            next(err);
        }
        passwrd = key.toString('hex');
        console.log(passwrd);

        users.getUser(usrname, passwrd, function (err,users) {
            if (err) {
                console.log("error");
                res.json({error: err});
            }
           else{
                console.log(users);
                var token = jwt.sign(users, "SUYASH", {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token,
                    USER:users
                });
                //console.log('a',User);
            }
        });
    });
});

module.exports = router;


