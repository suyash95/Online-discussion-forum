var express = require('express');
var router = express.Router();
var users = require('../models/users');
/* GET users listing. */

router.get('/', function(req, res, next) {
  console.log('signup pe aaya');
});

/**
* @api {post} /signup/ user authentication
 * @apiName signup
 * @apiGroup registration
 *
 *@apiParam {string} [dept_name] dept_name is required.
 *@apiParam {string} [clg_name] clg_name is required.
 *@apiParam {string} [name] name is required.
 *@apiParam {string} [usn] usn is required.
 *@apiParam {string} [email] email is required.
 *@apiParam {string} [password] password is required.
 *@apiParam {integer} phone  phone is required.
 *@apiParam {interger} type  type is required.
 *
 *
 *@apiSuccess {string} user signed up
*/

router.post('/',function(req,res,next){
	var userdetails= {
         dept_name:req.body.dept_name,
		 clg_name:req.body.clg_name,
		 name :req.body.name,
		 usn:req.body.usn,
		 email:req.body.email,
		 password:req.body.password,
		 phone:req.body.phone,
		 type:req.body.type
	};
    //console.log('after userdetails');
    //console.log(dept_name  , clg_name  , name  ,usn  ,email  ,password  ,phone  , type);
    //console.log(userdetails);
	users.putUser(userdetails,function(err,user){
		if(err){
			res.status(403).json({
              err: err
});
		}
			else
			{
				 res.json({
              msg: "user signed up"
});
			}
	});
});
module.exports = router;
