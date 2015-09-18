var app = angular.module('firebaseApp',['firebase']);

var ref = new Firebase("https://kohanthailand.firebaseio.com/chatroom/tb_user");
app.service('ServiceFirebase',function($firebaseArray){
	var dataRef = $firebaseArray(ref);
	this.isLoaded = function(){
		return dataRef;
	}
});
app.controller('firebaseCtrl',function($scope,$firebaseArray,ServiceFirebase){
	$scope.dataArray = ServiceFirebase.isLoaded();
	$scope.isEdit = false;
	$scope.isAdd = false;

	// AddUser
	$scope.AddUser = function(User){
		$scope.User = [];
		$scope.isAdd = true;
	}

	// onAdd
	$scope.onAdd = function(User){
		$scope.dataArray.$add(User);
		$scope.User = [];
		$scope.isAdd = false;
	}

	//onDele
	$scope.onDele = function(User){
		$scope.dataArray.$remove(User);
	}

	//onEdit
	$scope.onEdit = function(User){
			$scope.User = User;
			$scope.isEdit = true;
	}

	//onUpdate
	$scope.onUpdate = function(User){
		$scope.dataArray.$save(User);
		$scope.User = [];
		$scope.isEdit = false;
	}

	//onCancelForm
	$scope.onCancelForm = function(){
		$scope.isEdit = false;
		$scope.isAdd = false;
	}

});
