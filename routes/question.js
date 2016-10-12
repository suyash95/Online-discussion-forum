var express = require('express');
var router = express.Router();
var questions = require('../models/questions');


router.post('/',function(req,res,next)
{
	var details ={
		tag_id:req.body.tag_id,
		u_id:req.body.u_id,
		col_id:req.body.col_id,
		contents : req.body.contents
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
