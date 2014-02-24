angular.module('MyApp',[]);

function Ctrl($scope){
	$scope.name = 'John Doe';

	$scope.sayhello = function (){
		window.alert('Hello ' + $scope.name + '!');
	};
}


function MyValidations($scope){
	$scope.fname = 'Firstname';
	$scope.lname = 'Lastname';
};


