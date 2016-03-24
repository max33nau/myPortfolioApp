'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl',['$scope','$animate', function($scope, $animate) {
    $scope.welcome = 'WELCOME!!!';
  }]
);
}
