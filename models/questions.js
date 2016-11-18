var mysql = require('mysql');
//var config = require('../config');
var async = require('async');
var cfg = require('../config');
var _ = require('lodash');

var connection = mysql.createConnection(cfg.mysql);

connection.connect(function(err){
	if(err)
		console.log(err);
});


function fetchquestions(param,cb)
{
	//param = parseInt(param);
	console.log(param);
	var query = "select * from questions where tag_id = "+param+";"
	connection.query(query,function(err,rows){
		if(err){
			console.log(err);
			cb(err,null);
		}
		else{
			var question_list = [];
			i=0;
			while(i<rows.length ){
                var details={
                	id :rows[i].id,
                    u_id:rows[i].u_id,
                    tag_id:rows[i].tag_id,
                    content:rows[i].content,
                    upvote:rows[i].upvote,
                    downvote:rows[i].downvote,
                    col_id:rows[i].col_id,
                    username:rows[i].username,
					tag: rows[i].tag,
					is_answrd: rows[i].is_answrd,
					pdate: rows[i].pdate
                };
				question_list.push(details);
				i++;
		}
		cb(null,_.uniq(question_list));
	}
});
}

function popular(cb)
{
	var query="select * from questions ORDER BY questions . upvote DESC";
	connection.query(query,function(err,rows){
		if(err){
			console.log(err);
			cb(err,null);
		}
		else{
			var question_list = [];
			i=0;
			while(i<rows.length ){
                var details={
                	id :rows[i].id,
                    u_id:rows[i].u_id,
                    tag_id:rows[i].tag_id,
                    content:rows[i].content,
                    upvote:rows[i].upvote,
                    downvote:rows[i].downvote,
                    col_id:rows[i].col_id,
                    username:rows[i].username,
					tag: rows[i].tag,
					is_answrd: rows[i].is_answrd,
					pdate: rows[i].pdate
                };

				question_list.push(details);
				i++;
		}
		cb(null,_.uniq(question_list));
	}
});
}

function fetchbyqid(param,cb)
{
	console.log(param);
	var query = "select * from questions where id = '"+param+"' ;";
	connection.query(query,function(err,rows){
		if(err){
			console.log(err);
			cb(err,null);
		}
		else
		{
			var question_list =[];
			var details ={
				    id :rows[0].id,
                    u_id:rows[0].u_id,
                    tag_id:rows[0].tag_id,
                    content:rows[0].content,
                    upvote:rows[0].upvote,
                    downvote:rows[0].downvote,
                    col_id:rows[0].col_id,
                    username:rows[0].username,
					tag: rows[0].tag,
					is_answrd: rows[0].is_answrd,
					pdate: rows[0].pdate
			};
			question_list.push(details);
			cb(null,_.uniq(question_list));
		}

});
}


function fetch(cb)
{
	var query = "select * from questions";
	connection.query(query,function(err,rows){
		if(err){
			console.log(err);
			cb(err,null);
		}
		else
		{
			question_list=[];
			i=0;
			while(i<rows.length){
			var details ={
				    id :rows[i].id,
                    u_id:rows[i].u_id,
                    tag_id:rows[i].tag_id,
                    content:rows[i].content,
                    upvote:rows[i].upvote,
                    downvote:rows[i].downvote,
                    col_id:rows[i].col_id,
                    username:rows[i].username,
					tag: rows[i].tag,
					is_answrd: rows[i].is_answrd,
					pdate: rows[i].pdate
			};
			question_list.push(details);
			i++;
		}
			cb(null,_.uniq(question_list));
		}
});
}

function edit(param,cb)
{
	var query = "UPDATE questions SET content = '"+param.contents+"' where id='"+(param.q_id)+"' && u_id='"+(param.u_id)+"';"
	connection.query(query,function(err,rows){
		if(err)
		{
			console.log("error");
			console.log(err);
			cb(err,null);
		}
		else
			cb(rows[0]);
	}); 
}

function storequestions(param,cb)
{
	
	var query = "Insert into questions values (?,?,?,?,?,?,?,?,?,?,?);";
	var query1 ="select assoc from tags where id = '"+param.tag_id+"';"
	
	/*var uid = "select id from user where id = '"+(param.u_id)+"';"
	var tagid = "select id from tags where id = '"+(param.tag_id)+"';"
	var colid = "select id from college where id = '" +(param.col_id)+"';"
*/

	async.waterfall([
		function(callback)
		{
			var values =[0,param.u_id,param.tag_id,param.contents,0,0,param.col_id,param.username,0,param.tag,param.pdate];
			connection.query(query,values,function(err,rows){
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
					var a= rows[0].assoc;
					console.log(a);
					a =a+1;
					callback(null,a);
				}
			});
		},

		function(a,callback)
		{
			var query2 = "update tags set assoc = '" + a + "' where id = '"+param.tag_id+"';"
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

function upvote(param,cb)

{

	var query1 ="select upvote from questions where id = '"+param.q_id+"';";

	async.waterfall([

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

						var up = rows[0].upvote;
						up = up + 1;
						console.log(up);
						callback(null,up);
					}
				});
			},

			function(up,callback)
			{
				var query = "update questions set upvote = '" + up + "' where id = '"+param.q_id+"';"
				connection.query(query,function(err,rows){
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

function downvote(param,cb)

{

	var query1 ="select downvote from questions where id = '"+param.q_id+"';";

	async.waterfall([

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

						var up = rows[0].downvote;
						up = up + 1;
						//console.log(up);
						callback(null,up);
					}
				});
			},

			function(up,callback)
			{
				var query = "update questions set downvote = '" + up + "' where id = '"+param.q_id+"';"
				connection.query(query,function(err,rows){
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
	storequestions :storequestions,
	fetchquestions  :fetchquestions,
	fetch : fetch,
	fetchbyqid:fetchbyqid,
	edit:edit,
	upvote:upvote,
	downvote:downvote,
	popular:popular
}