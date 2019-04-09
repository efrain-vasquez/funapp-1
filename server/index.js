var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var databaseInfo = require('../mysql');



var app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));



//__dirname its always going to look for an html file so just give it the path
app.use(express.static(path.join(__dirname, '../public/src')))


//this is a test for me to know if server is working/connecting to front end or only running with node
app.get('/', function(req, res){
  res.send('Hello World');
});


app.get('infoFromDatabase', function(request, response){
	//results get value from results in getInfoFromDatabase where it says:  }else{ callback(null, results); }
	databaseInfo.getInfoFromDatabase(function(err, results){
		if (err){
			result.sendStatus(500)
		} else {
			respond.json(results)
		}
	})
})


app.post('/clientside', function(req, res){

 let quantity = req.body.quantity;
 let description = req.body.description;

 if(!description) {
   res.sendStatus(400);
 } else {
   database.insertOne(quantity, description,(err, results) => {
     if (err) {
       res.sendStatus(500);
     } else {
       res.status(200).json(results);
     }
   });
 }
});








app.listen(3000, function(){
  console.log('Server Started on Port 3000....');
})
