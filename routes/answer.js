var express = require('express');
var router =express.Router();
var answers=require('../models/answers');
var mysql=require('mysql');


router.get('/',function(req,res,next){
	var id=req.body.id
	//if (req.query.token || req.headers['x-access-token']) {
	answers.getanswers(id,function(err,answers){
		if(err){
			consol.log("error occured");
			res.json({error:err});
		}
		else {
			res.json({ANSWERS:answers});
		}
	});
//}
});

module.exports = router;