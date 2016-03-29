import style from './projects.scss';

'use strict';
export default function(ngModule) {
  ngModule.controller('projectsCtrl',['$scope', function($scope) {
    $scope.styles = style;
    $scope.projects = [
      {
        title: 'Relax and Color',
        src: 'https://scontent.xx.fbcdn.net/hphotos-xpl1/v/t1.0-9/12801620_10154074971879913_3792787906189248231_n.jpg?oh=790838a5aa6b68b61f41f00f3db071fa&oe=577AA21B',
        url: 'https://relax-and-color.herokuapp.com/#/home'
      },
      {
        title: 'Settlers of Candyland',
        src: 'https://scontent.xx.fbcdn.net/hphotos-xlf1/v/t1.0-9/11181190_10154074971984913_7718801846265162628_n.jpg?oh=6ab2d63dd21a2554971d8320f64f5ee3&oe=578F67A0',
        url: 'http://settlersofcandyland.herokuapp.com/'
      }
    ];
  }]
);
}
