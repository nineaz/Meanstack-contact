
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
	}) //dans la base de donné contacte liste tu  ajoute les contacts mis de l'input par la fonction

};

$scope.remove = function(id) {
	console.log("je passe ici");
  //console.log(id);
  $http.delete('/contactliste/' + id).success(function(response) {
    refresh();
    console.log(response);

  });
};

$scope.edit = function(id){
	console.log("Je passe ici aussi");
	$http.get('/contactliste/' + id).success(function(response){
		$scope.contact = response; //on recupere le contact et on le transforme en reponse
	});
};

$scope.update = function(id){
	console.log($scope.contact._id);
	$http.put('/contactliste/' + $scope.contact ._id, $scope.contact).success(function(response){
		refresh();
	});
};
$scope.deselect = function(){
	$scope.contact = "";
}

}]);
 
