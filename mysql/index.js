var mysql = require('mysql');


//we are literally running or creating this again:  mysql -u root -p
var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	password : 'Holacode',
	databse : 'test'
});

module.exports.getInfoFromDatabase = function(callback) {
	connection.query('Select * from students', function(err, results){
		if (err){
			callback(err, null);
		} else {
			callback(null, results)
		}
	});
};

module.exports.insertOne = function(quantity, description, cb) {
 con.query('INSERT INTO comments (quantity, description) VALUES (?, ?)',
   [quantity, description], (err, results, fields) => {
     if(err) {
       cb(err, null);
     } else {
       console.log(results);
       cb(null, results);
     }
   });
};







