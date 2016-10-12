var express = require('express');
var router = express.Router();
var comments = require('../models/comments');


router.get('/',function(req,res,next){
	var ans_id = req.headers.id;

	comments.fetchcomments(ans_id,function(err,comments){
		if(err)
		{
			console.log("error");
			res.json({error:err});
		}
		else
			res.json({COMMENTS:comments});
});
});

router.post('/',function(req,res,next){
	var details ={
		ans_id:req.body.ans_id,
		u_id :req.body.u_id,
		contents : req.body.contents
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

