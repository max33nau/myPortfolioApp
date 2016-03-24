import mainNav from './main-nav/main-nav';
import imgTransition from './img-transition/img-transition';
const directives = angular.module( 'directives', [] );

mainNav(directives);
imgTransition(directives);

export default directives.name;
