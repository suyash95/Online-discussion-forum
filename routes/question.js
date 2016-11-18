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
router.get('/popular',function(req,res,next)
{
	//var tag_id=req.headers.tag_id;
	//console.log(req);
	questions.popular(function(err,questions){
		if(err)
		{
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({QUESTION:questions});
	});
});


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

router.post('/editquestion',function(req,res,next){
	var details = {
		q_id:req.body.q_id,
		u_id:req.body.u_id,
		contents:req.body.contents
	};
	questions.edit(details,function(err,questions){
		if(err){
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({msg:"question edited"});
	 
	});
});

router.post('/',function(req,res,next)
{
	var details ={
		tag: req.body.tag,
		tag_id:req.body.tag_id,
		u_id:req.body.u_id,
		col_id:req.body.col_id,
		contents : req.body.contents,
		username : req.body.username,
		pdate: req.body.pdate
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

router.post('/up',function(req,res,next){
	var details = {
		q_id: req.body.q_id
	};
	questions.upvote(details,function(err,questions){
		if(err){
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({msg:"upvoted"});

	});
});

router.post('/dw',function(req,res,next){
	var details = {
		q_id: req.body.q_id
	};
	questions.downvote(details,function(err,questions){
		if(err){
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({msg:"downvoted"});

	});
});

module.exports = router;
