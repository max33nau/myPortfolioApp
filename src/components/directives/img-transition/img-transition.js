import style from './img-transition.scss';
import template from './img-transition.html';

export default function( ngModule ) {
	ngModule.directive( 'imgTransition', function() {
		return {
			replace: true,
			restrict: 'E',
			template,
			controller: ['$scope','$timeout', function($scope, $timeout, $animate){
				$scope.styles = style;
				$scope.initialImage = 'https://scontent.xx.fbcdn.net/hphotos-xpa1/v/t1.0-9/10993406_10153122858064913_4616204215396259203_n.jpg?oh=285c2df4bb62b56335cff0d469f29e7f&oe=5789D7D2';
				$scope.transitionImage = 'https://scontent.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/12705633_10154050307074913_3251968113614216408_n.jpg?oh=dbbcdb483a34674e1b9034aca984dc8b&oe=5796947D';
				// $timeout(function(){
				// 	console.log('now');
				// 	$scope.applyInitialClass = 'fadeAway';
				// }, 3000);
			}]
		};
	});
}
