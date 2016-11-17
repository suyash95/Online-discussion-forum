var express = require('express');
var router = express.Router();
var comments = require('../models/comments');


/**
* @api {get} /comments/:id content request of comments for a perticulara ans.
 * @apiName comments
 * @apiGroup comment
 *
 *@apiParam {string} ans_id is required
 *
 *@apiSuccess {number} ans_id answer id.
 *@apiSuccess {number} u_id user id .
 *@apiSucess  {string}  content get all comments the for that perticular ansid.
*/ 

router.get('/',function(req,res,next){
	//var ans_id = req.headers.id;

	comments.fetchcomments(req.query.ans_id,function(err,comments){
		if(err)
		{
			console.log("error");
			res.json({error:err});
		}
		else
			res.json({COMMENTS:comments});
});
});

/**
* @api {post} /comments/ post comments for an answer
 * @apiName comments
 * @apiGroup comment
 *
 *@apiParam {number} ans_id is required
 *@apiParam {number} u_id is required .
 *@apiParam {string} [contents] content is required
 *
 *@apiSuccess {string} user commented.
*/

router.post('/',function(req,res,next){
	var details ={
		ans_id:req.body.ans_id,
		u_id :req.body.u_id,
		contents : req.body.contents,
		uname: req.body.uname
	};

	comments.storecomments(details,function(err,comments){
		if(err)
		{
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({msg:"user commented"});

			
	});
});

module.exports = router;

