'use strict';
/* Styling */
import './style/main.scss';

/* Vendors */
import angular from 'angular' ;
import angularRouter from 'angular-ui-router';

const app = angular.module('myApp', [
  angularRouter
]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
}])


angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
