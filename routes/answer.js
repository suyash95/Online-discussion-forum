var express = require('express');
var router =express.Router();
var answers=require('../models/answers');
var mysql=require('mysql');


router.get('/',function(req,res,next){
	//console.log(req.headers);
	var id = req.headers.id;
	console.log(id);
	//console.log(req.headers['x-access-token']);
	//if((req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'] ) {
	answers.getanswers(id,function(err,answers){
		if(err){
			consol.log("error occur");
			res.json({error:err});
		}
		else {
			res.json({ANSWERS:answers});
		}
	});

});

router.post('/',function(req,res,next){
	var details ={
	q_id : req.body.q_id,
	u_id :req.body.u_id,
	contents:req.body.contents
};
	answers.addanswers(details,function(err,answers){
		if(err)
		{
			console.log("error occured");
			res.json({error:err});
		}
		else
		{
			res.json({msg:"answer succesfully posted"});
		}
	});
});

module.exports=router