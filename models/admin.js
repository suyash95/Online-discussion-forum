var mysql = require('mysql');
var cfg = require('../config');
var _ = require('lodash');
var async = require('async');
var crypto =require('crypto');

var connection = mysql.createConnection(cfg.mysql);
connection.connect(function (err) {
	if(err)
		console.log(err);
});

function store(param,cb)
{
	console.log(param);
	var query = "Insert into admin values (?,?,?,?,?)";
	var passw=param.password;

	crypto.pbkdf2(passw, 'Salt', 100, 30, function (err, key) {
        if (err) {
            console.log("password error: ",err); 
            next(err);
        }
        passw = key.toString('hex');
        console.log(passw);
        var val =[0,param.name,param.email,passw,0];
	connection.query(query,val,function(err,rows){
		if(err)
		{
			console.log("error occured");
			return err;
		}
		else
		{
          cb(rows[0]);
		}
	});
});
}

function fetch(email,password,cb){
var query = "Select * from admin where email= ? and password = ?";

        connection.query(query, [email, password], function (err, rows) {
            if (err) {console.log("feew");
                cb(err, null);
            } else if (!rows[0]) {
                cb("User not found", null);
            }
            else {
                //console.log("frfrrifjr");
                cb(null, rows[0]);
            }
        });

}


module.exports = {
	store :store,
	fetch :fetch
}