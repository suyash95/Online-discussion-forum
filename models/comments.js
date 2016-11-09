var mysql = require('mysql');
var cfg = require('../config');
var async = require('async');
var _ = require('lodash');

var connection = mysql.createConnection(cfg.mysql);

connection.connect(function(err){
	if(err)
		console.log(err);
});

function fetchcomments(param,cb)
{
	var query = "select * from comments where ans_id ="+param+";"
	connection.query(query,function(err,rows){
		if(err)
		{
			console.log(err)
			cb(err,null);
		}
		else
		{
			comment= [];
			i=0;
			while(i<rows.length){
				var details={
					ans_id : rows[i].ans_id,
					u_id :rows[i].u_id,
					content:rows[i].content
				};
				comment.push(details);
				i++;
			}
			cb(null,_.uniq(comment));
		}
	});
} 

function storecomments(param,cb)
{
	console.log(param);
	var query = "Insert into comments values(?,?,?,?)";
	/*var uid = "select id from user where id = '"+(param.u_id)+"';"
	var ansid = "select id from answers where id = '"+(param.ans_id)+"';"*/

	async.waterfall([
		/*function(callback)
		{
			connection.query(ansid,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("ansid wala query executed ");
					var ans = rows[0].id;
					callback(null,ans);
				}
			});
		},
		function(ans,callback)
		{
			connection.query(uid,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("uid wala query executed ");
					var u = rows[0].id;
					callback(null,u,ans);
				}
			});
		},*/

		function(u,ans,callback)
		{
			var value=[0,param.ans_id,param.u_id,param.contents];
			connection.query(query,value,function(err,rows){
				if(err)
				{
					console.log(err);
					cb(null,err);
					return callback(err)
				}
				else{
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
module.exports={
	fetchcomments : fetchcomments,
	storecomments :storecomments
}