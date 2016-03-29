import style from './about-me.scss';

'use strict';
export default function(ngModule) {
  ngModule.controller('aboutMeCtrl',['$scope', function($scope) {
    $scope.styles = style;
    $scope.profilePic = 'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/1936328_10154075600624913_2083474085707076509_n.jpg?oh=1a252f41b728747507507732f1b2f642&oe=57824AAA';
  }]
);
}
