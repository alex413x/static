/**
 * Created by user on 6/1/16.
 */

var myApp = angular.module('myApp',[]);

myApp.controller('GreetingController', ['$scope', function($scope) {
  $scope.greeting = 'Hello!';
}]);