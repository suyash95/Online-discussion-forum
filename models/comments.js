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
					id:rows[i].id,
					ans_id : rows[i].ans_id,
					u_id :rows[i].u_id,
					content:rows[i].content,
					uname: rows[i].uname
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
	var query = "Insert into comments values(?,?,?,?,?)";
	var query1 = "select comment_count from answers where id = '"+param.ans_id+"';"
	async.waterfall([
		function(callback)
		{
			var value=[0,param.ans_id,param.u_id,param.contents,param.uname];
			connection.query(query,value,function(err,rows){
				if(err)
				{
					console.log(err);
					cb(null,err);
					return callback(err)
				}
				else{
					cb(rows[0]);
					callback(null);
				}
			});
		},
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
					var a = rows[0].comment_count;
					//console.log(a);
					a = a+1;
					console.log(a);
					callback(null,a);
				}
			});
		},

		function(a,callback)
		{
			var query2 = "update answers set comment_count= '" + a + "' where id = '"+param.ans_id+"';"
			connection.query(query2,function(err,rows){
				if(err)
				{
					console.log("error");
					cb(null,err);
					return callback(err)
				}
				else{
					console.log("updated done");
					//var col= rows[0].id;
					//callback(null);
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