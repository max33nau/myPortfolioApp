'use strict';
/* Styling */
import './style/main.scss';

/* Vendors */
import angular from 'angular' ;
import angularRouter from 'angular-ui-router';
/* Directives */
import directives from './components/directives';

/* State Controllers */
import stateCtrls from './providers/state-provider/state-controllers';

/* UI-Router State Provider Config */
import configStateProvider from './providers/state-provider';

const app = angular.module('myApp', [
  angularRouter,
  directives,
  stateCtrls
]);

app.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  configStateProvider($stateProvider);
}]);


angular.element(document).ready(function() {
  angular.bootstrap(document, ['myApp']);
});
