import angular from 'angular';
import homeCtrl from '../home-state/home-ctrl';


const stateCtrls = angular.module( 'statecontrollers', [] );

homeCtrl(stateCtrls);

export default stateCtrls.name;
