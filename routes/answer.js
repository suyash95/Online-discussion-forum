var express = require('express');
var router =express.Router();
var answers=require('../models/answers');
var mysql=require('mysql');

/**
* @api {get} /answer/:q_id content request for all the answer of a question.
 * @apiName answer
 * @apiGroup answer
 *
 *@apiParam {number} q_id is required.
 *
 *@apiSuccess {number} q_id  question id.
 *@apiSuccess {number} u_id user id .
 *@apiSucess  {string} content get all answers the for a perticular q_id.
 *@apiSuccess {number} upvote .
 *@apiSuccess {number} downvote.
*/

router.get('/',function(req,res,next){
	//console.log(req.headers);
	console.log("Req",req);
	//var id = req.headers.id;
	//console.log(id);
	//console.log(req.headers['x-access-token']);
	//if((req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'] ) {
	answers.getanswers(req.query.id,function(err,answers){
		if(err){
			console.log("error occur");
			res.json({error:err});
		}
		else {
			res.json({ANSWERS:answers});
		}
	});

});

/**
* @api {post} /answer/ post answersfor a question
 * @apiName answer
 * @apiGroup answer
 *
 *@apiParam {number} q_id is required
 *@apiParam {number} u_id is required .
 *@apiParam {string} [contents] is required
 *
 *@apiSuccess {string} answer succesfully posted.
*/

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


router.post('/editanswer',function(req,res,next){
	var details ={
		ans_id:req.body.ans_id,
		q_id:req.body.q_id,
		u_id:req.body.u_id,
		contents:req.body.contents
	};
answers.editanswers(details,function(err,answers){
		if(err){
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({msg:"answer edited"});
	 
	});
});

module.exports=router