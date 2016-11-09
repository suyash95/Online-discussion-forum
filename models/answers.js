var mysql =require('mysql');
var cfg = require('../config');
var async = require('async');
var _ = require('lodash');

var connection = mysql.createConnection(cfg.mysql);

connection.connect(function(err){
	console.log(err);
});

function getanswers(param,cb)
{
	console.log(param);
	var query = "select * from answers where q_id = "+param+";"
	connection.query(query,function(err,rows){
		if(err){
			console.log(err);
			cb(err,null);
		}
		else{
			answers_list = [];
			i=0;
			while(i<rows.length ){
                var details={
                    q_id:rows[i].q_id,
                    u_id:rows[i].u_id,
                    content:rows[i].content,
                    upvote:rows[i].upvote,
                    downvote:rows[i].downvote,
                    username : rows[i].username
                };
				answers_list.push(details);
				i++;
		}
		cb(null,_.uniq(answers_list));
	}
});
}

function addanswers(param,cb)
{
	console.log(param.u_id);
	var query= "Insert into answers values (?,?,?,?,?,?,?)";

	var uid = "select name from user where id = '"+(param.u_id)+"';"
	var qid ="select id from questions where id = '"+(param.q_id)+"';"
	async.waterfall([
		function(callback){
			connection.query(uid,function(err,rows){
               if(err){
                console.log(err);
                cb(err,null);
                return callback(err);
            }
            else{
                console.log('query executed for uid');
                var u = rows[0].name;
                callback(null,u);
        }
    });
    },
    function(u,callback){
    	connection.query(qid,function(err,rows){
    		if(err){
                console.log(err);
                cb(err,null);
                return callback(err);
            }
            else{
                console.log('query executed for qid');
                var q = rows[0].id;
                callback(null,q,u);
        }
    });
    },

    function(q,u,callback){
        console.log("\n\n\n\n",u);
    	var value=[0,q,param.u_id,param.contents,0,0,u];
    	connection.query(query,value,function(err,rows){
    		if(err)
    		{
    			console.log(err);
    			cb(err,null);
    			return callback(err);
    		}
    		else
    			cb(rows[0]);
         
    	});
    }
    ],
    function(err)
    {
        console.log("yahan aaya");
        if(err) return err;
        //else{
            //console.log("else ke andar aaya");
        });
}

function editanswers(param,cb)
{
    var query = "UPDATE answers SET content = '"+param.contents+"' where id='"+(param.ans_id)+"' && q_id='"+(param.q_id)+"'&& u_id='"+(param.u_id)+"';"
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

module.exports={
	getanswers : getanswers,
	addanswers : addanswers,
    editanswers :editanswers
}