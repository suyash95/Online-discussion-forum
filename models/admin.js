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

function del(param,cb)
{
	var query = "DELETE from user where id ="+param+";"
	var query1 = "DELETE from questions where u_id = "+param+";"
	var query2 = "DELETE from comments where u_id ="+param+";"
	var query3 = "DELETE from answers where u_id="+param+";"

	async.parallel([
		function(callback)
		{
			connection.query(query1,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("query1 done");
					//var tag= rows[0].id;
					callback(null,query2);
				}
			});
		},
		function(callback)
		{
			connection.query(query2,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("query2 done");
					//var u= rows[0].id;
					callback(null,query3);
				}
			});
		},
		function(callback)
		{
			connection.query(query3,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("query3 done");
					//var u= rows[0].id;
					callback(null,query);
				}
			});
		},
		function(callback)
		{
			connection.query(query,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("query done");
					//var u= rows[0].id;
					cb(rows[0]);
				}
			});
		}
		],
		function(err)
		{
			if(err)
				return err;
		});

}

module.exports = {
	store :store,
	fetch :fetch,
	del :del
}