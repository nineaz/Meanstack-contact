
var myApp = angular.module('MyApp', []);
myApp.controller('AppCtrl', ['$scope', '$http', function($scope, $http) {
    console.log("Hello World from controller");

$http.get('/contactliste')
	.success(function(response){
	console.log('I got the data et je la renvoie');
	$scope.contactlist = response;
	//j'envoie comme reponse la liste sur la view
}); 
$scope.addContact = function() {
	console.log($scope.contact); //la fonction recoit bien ldes données de l'input
	$http.post('/contactliste',$scope.contact); //dans la base de donné contacte liste tu  ajoute les contacts mis de l'input par la fonction
};


}]);
 
