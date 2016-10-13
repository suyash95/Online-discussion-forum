var mysql=require('mysql');
var cfg=require('../config');
var _ = require('lodash');

var connection = mysql.createConnection(cfg.mysql);

connection.connect(function(err){
	if(err)
		console.log(err);
});

function fetchtags(cb)
{
	var query = "select * from tags" ;
	connection.query(query,function(err,rows){
		if(err){
			console.log(err);
			cb(err,null);
		}
		else{
			tag_list = [];
			i=0;
			while(i<rows.length ){
                var details={
                    id:rows[i].id,
                    name:rows[i].name
                };
				tag_list.push(details);
				i++;
		}
		cb(null,_.uniq(tag_list));
	}
});
}


module.exports={
	fetchtags : fetchtags
}
