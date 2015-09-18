var app = angular.module('firebaseApp',['firebase']);

var ref = new Firebase("https://kohanthailand.firebaseio.com/chatroom/tb_user");

app.controller('firebaseCtrl',function($scope,$firebaseArray){
	$scope.dataArray = $firebaseArray(ref);

	$scope.AddUser = function(User){
		$scope.dataArray.$add(User);
		$scope.User = [];
	}

});