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



router.post('/',function(req , res ,next){
    //console.log(req);
var usrname = req.body.usn;
var passwrd = req.body.password;

crypto.pbkdf2(passwrd, 'Salt', 100, 30, function (err, key) {
        if (err) {
            //console.log(err); 
            next(err);
        }
        passwrd = key.toString('hex');
        console.log(passwrd);

        users.getUser(usrname, passwrd, function (err,users) {
            if (err) {
                res.json({error: err});
            }
            else{
                console.log('ooh');
                res.json({msg:'user logged in'});
            }
        });
    });
});

module.exports = router;


