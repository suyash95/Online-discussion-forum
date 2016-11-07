var express = require('express');
var router = express.Router();
var users = require('../models/users');
/* GET users listing. */
router.get('/', function(req, res, next) {
  users.listuser(function(err,users){
    if(err)
		{
			console.log("error hai ");
			res.json({error:err});
		}
		else
			res.json({users:users});
	});

});

module.exports =router; 