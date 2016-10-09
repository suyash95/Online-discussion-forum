var mysql =require('mysql');
var cfg = require('../config');
var async = require('async');

var connection = mysql.createConnection(cfg.mysql);

function getanswers(param,cb)
{
	cfg.pool.getConnection(function(err,connection) {
        if (err) {
            connection.release();
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        }
        console.log('connected as id ' + connection.threadId);
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
	connection.on('error', function (err) {
            res.json({"code": 100, "status": "Error in connection database"});
            return;
        });
});
}

