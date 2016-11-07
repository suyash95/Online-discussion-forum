var express = require('express');
var router = express.Router();
var admin = require('../models/admin');
var crypto = require('crypto');
var users = require('../models/users');
var jwt = require('jsonwebtoken');

router.get('/userdetails',function(req,res,next){
users.listuser(function(err,users){
    if(err)
		{
			console.log("error hai ");
			res.json({error:err});
			return err;
		}
		else
			res.json({users:users});
	});

});

router.post('/deleteuser',function(req,res,next){
	admin.del(req.query.u_id,function(err,questions){
		if(err)
		{
			console.log("error hai");
			res.json({error:err});
		}
		else
			res.json({msg:'user deleted'});
	});
});


router.post('/signup',function(req,res,next){
var details={
	name:req.body.name,
	email:req.body.email,
	password:req.body.password
};
	admin.store(details,function(err,admin){
		if(err){
			res.status(403).json({
              err: err
});
			return err;
		}
			else
			{
				 res.json({
              msg: "admin signed up"
});
			}
	});
});

router.post('/login',function(req,res,next){
	var email = req.body.email;
	var password = req.body.password;

	crypto.pbkdf2(password, 'Salt', 100, 30, function (err, key) {
        if (err) {
            //console.log(err); 
            next(err);
        }
        password = key.toString('hex');
        console.log(password);

        admin.fetch(email,password,function(err ,admin){
        	if (err) {
                res.json({error: err});
                return err;
            }
           else{
                var token = jwt.sign(users, "SUYASH", {
                    expiresInMinutes: 1440 // expires in 24 hours
                });

                // return the information including token as JSON
                res.json({
                    success: true,
                    token: token
                });
                //console.log('a',User);
            }
        });
    });
});

module.exports = router;
