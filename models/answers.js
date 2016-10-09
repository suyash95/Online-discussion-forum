var mysql =require('mysql');
var cfg = require('../config');
var async = require('async');

var connection = mysql.createConnection(cfg.mysql);
connection.connect(mysql,function(err){
console.log(err);
});

function getanswers(param,cb)
{
	var query = "select content form answers which q_id = '"+(param.id)+"';";
	connection.query(query,function(err,cb){
		if(err){
			console.log("error occured");
			cb(err,null);
		}
		else{
			answers_list = [];
			i=0;
			while(i<rows.length ){
				answers_list.push(rows[i],content);
				i++;
		}
		cb(null,_.uniq(answers_list));
	}
});
}

