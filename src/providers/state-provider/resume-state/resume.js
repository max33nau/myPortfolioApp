'use strict';
import template from './resume.html';
import style from './resume.scss';
export default {
  url: '/resume',
  template,
  controller: function($scope) {
    $scope.style = style;
  }
};
