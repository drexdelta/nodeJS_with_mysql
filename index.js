const express  = require('express');
const bodyParser = require('body-parser');

const store = require('./store');

console.log("printin store " , store);


const app = express();
// console.log(app);
app.use(express.static('public'));
app.use(bodyParser.json());

app.post( '/createUser' , function(req, res) {

	store.xyz(900).then(function(){
		console.log("promise resolved");
	});

	store.createUser({
		userName  : req.body.username,
		password  : req.body.password
	}).then( function() {
		res.sendStatus(200)
	});

})

app.listen( 7555 , function(){

	console.log("server listening to port nubmer 7555 " );

})