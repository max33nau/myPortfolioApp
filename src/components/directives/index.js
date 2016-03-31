import mainNav from './main-nav/main-nav';
import mainHeader from './main-header/main-header';
import mainFooter from './main-footer/main-footer';
const directives = angular.module( 'directives', [] );

mainHeader(directives);
mainNav(directives);
mainFooter(directives);

export default directives.name;
