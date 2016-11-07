var express = require('express');
var router = express.Router();
var questions = require('../models/questions');

/**
* @api {get} /question/:tag_id  content request for all the question of a perticulat tag.
 * @apiName question
 * @apiGroup question
 *
 *@apiParam {string} tag_id is required.
 *
 *
 *@apiSuccess {number} u_id user id .
 *@apiSuccess {number} tag_id  tag id.
 *@apiSucess  {string} content get all question the for a perticular tag_id.
 *@apiSuccess {number} upvote .
 *@apiSuccess {number} downvote.
 *@apiSuccess {number} col_id  college id.
*/

router.get('/',function(req,res,next)
{
	//var tag_id=req.headers.tag_id;
	console.log(req);
	questions.fetchquestions(req.query.tag_id,function(err,questions){
		if(err)
		{
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({QUESTION:questions});
	});
});

/**
* @api {post} /question/  post answersfor a question
 * @apiName question
 * @apiGroup question
 *
 *@apiParam {number} tag_id is required
 *@apiParam {number} u_id is required .
 *@apiParam {number} col_id is required .
 *@apiParam {string} [contents] contents is required
 *
 *@apiSuccess {string} questions posted successfully.
*/

router.get('/qid',function(req,res,next){
	questions.fetchbyqid(req.query.q_id,function(err,questions){
		if(err)
		{
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({QUESTION:questions});
	});
});

router.get('/all',function(req,res,next){
	questions.fetch(function(err,questions){
		if(err)
		{
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({QUESTION:questions});
	});
});

router.post('/',function(req,res,next)
{
	var details ={
		tag_id:req.body.tag_id,
		u_id:req.body.u_id,
		col_id:req.body.col_id,
		contents : req.body.contents,
		username : req.body.username
	};

	questions.storequestions(details,function(err,questions){
		if(err){
			console.log("error hai ");
			res.json({error:err});
		}
		else
			res.json({msg:"questions posted successfully"});
	});

});

module.exports = router;
