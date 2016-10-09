var cfg = require('../config');
var mysql= require('mysql');
var crypto =require('crypto');
var step = require('step');
var async =require('async');

var connection =mysql.createConnection(cfg.mysql);
connection.connect(function(err){
	console.log(err);
});

function storeuser(param,cb){
    console.log('datastorage is initiated');
	var query = "Insert into user values(?,?,?,?,?,?,?,?,?,?)";
   // console.log(param);
	var passw = param.password;
    //var d,cl;
   // var phone =Number(param.phone);
    //console.log(passw);
	crypto.pbkdf2(passw, 'Salt', 100, 30, function (err, key) {
        if (err) {
            //console.log(err); 
            next(err);
        }
        passw = key.toString('hex');
        console.log(passw);
        var dept = "Select id from dept where dept.name = '" + (param.dept_name) +"';"
        var clg="Select id from college where name = '" +(param.clg_name)+"';"
        //console.log(param.dept_name);
       // step(
       var phone =Number(param.phone);
       async.waterfall([
            function(callback){
        connection.query(dept,function(err,rows){
            //try{
            if(err){
                console.log(err);
                cb(err,null);
                return callback(err);
            }
            else{
                console.log('query executed for dept');
                var d = rows[0].id;
                callback(null,d);
        }
    });
    },
      
      function(d,callback){  
        connection.query(clg,function(err,rows) {
            if(err){
                cb(err,null);
                return callback(err);
            }
            else{
                console.log('query executed for clg');
                var cl=rows[0].id;
                //console.log(cl);
                callback(null,cl,d);
        }
    });
    },

    function(cl,d,callback)
    {
    var val=[0,d,cl,param.name,param.usn,param.email,passw,phone,param.type,0];
        connection.query(query,val,function(err,rows){
            if(err){
                cb(err,null);
                console.log(err);
                return callback(err);
            }
            else
            {
                cb(rows[0]);
        }
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
       
        /*var phone =Number(param.phone);
        console.log(phone);
        //var dept_id=Number(d);
        //var clg_id =Number(cl);
        console.log(d);
        console.log(cl);
        var val=[0,d,cl,param.name,param.usn,param.email,passw,phone,param.type,0];
        connection.query(query,val,function(err,rows){
        	if(err){
        		cb(err,null);
                console.log(err);
        	}
        	else
        	{
        		cb(rows[0]);
       	}
    });*/
    });
}

function fetchUser(usrname, passwrd, cb) {

        var query = "Select * from user where usn= ? and password = ?";

        connection.query(query, [usrname, passwrd], function (err, rows) {
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

function insToken(token, cb) {
    var query = "Update user set token = ?";

    connection.query(query, [token], function (err, rows) {
        if (err) {
            cb(err);
        } else {
            cb(rows[0]);

        }
    });
}



module.exports ={
	putUser : storeuser,
    getUser: fetchUser 

}