import template from './main-footer.html';
export default function( ngModule ) {
	ngModule.directive( 'mainFooter', function() {
		return {
			replace: true,
			restrict: 'E',
			template
		};
	});
}
