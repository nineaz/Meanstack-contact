var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
var mongojs = require('mongojs');
var db = mongojs('contactliste',['contactliste']);


app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

 app.get('/', function(req,res){ 	//mettre les / et non l'etoile !!!!   
 	res.sendFile(path.join(__dirname+'/public/views/index.html')); //sencer envoyer sur la view l'equivalent de mon index
 });
 //etoile : quoi qu'il arrive il renvoie renvoie à lindex
 //slach  permet de renvoyer a une data si on veut comme contactliste

//appelle la liste depuis le serveur (et non du controller!!)
app.get('/contactliste', function(req,res){
	console.log('jai la GET request');

    	db.contactliste.find(function(err,docs){
    		 //console.log(docs);
    		 res.json(docs);
    	});
}); 
	
	app.post('/contactliste', function(req,res){
		console.log(req.body);
		db.contactliste.insert(req.body, function(err,doc){
			res.json(doc);
		});
	});

	
		app.delete('/contactliste/:id', function (req, res) {
			console.log("SERVEUR je passe ici");
		  var id = req.params.id;
		  console.log(id);
		  //console.log("ObjectId(id) :" + ObjectId(id));
		  db.contactliste.remove({_id: mongojs.ObjectId(id)}, function (err, doc) {
		    res.json({message : "contact supprimé"});
		    
		  });
		});

	app.listen(3000);
	console.log('Le server roule sur le port 3000');

	//mon server à recu la donnée et peu l'envoyer

	// personne1 = { //entre commentaire car va chercher la data dans le serveur
 //    	name : "Tim",
 //    	email : "tim@gmail.com",
 //    	number : "06 84 65 34 99"
 //    };
 //    personne2 = {
 //    	name : "Lydia",
 //    	email : "lydia@gmail.com",
 //    	number : "06 10 65 87 99"
 //    };
 //    personne3 = {
 //    	name : "Cecile",
 //    	email : "Cecile@gmail.com",
 //    	number : "06 12 78 34 56"
 //    };

 //    var contactlist = [personne1,personne2,personne3];
 //    console.log(contactlist);
 //    res.json(contactlist);
    //reponse va chercher dans le json






