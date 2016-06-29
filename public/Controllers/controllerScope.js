
var myApp = angular.module('MyApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

var refresh = function(){
	$http.get('/contactliste')
	.success(function(response){
		console.log('I got the data et je la renvoie');
		$scope.contactliste = response;
		//j'envoie comme reponse la liste sur la view
		$scope.contact = "";
	}); 
};
refresh();

$scope.addContact = function() {
	console.log($scope.contact); //la fonction recoit bien ldes données de l'input
	$http.post('/contactliste',$scope.contact)
	.success(function(response){
		console.log(response);
		refresh(); 
	}); //dans la base de donné contacte liste tu  ajoute les contacts mis de l'input par la fonction
};

 
}]);
 
