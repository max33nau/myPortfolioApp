'use strict';
export default function(ngModule) {
  ngModule.controller('homeCtrl',['$scope', function($scope) {
    $scope.welcome = 'WELCOME!!!';
  }]
);
}
