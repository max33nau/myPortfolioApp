import angular from 'angular';
import homeCtrl from '../home-state/home-ctrl';
import projectsCtrl from '../projects-state/projects-ctrl';
import aboutMeCtrl from '../about-me-state/about-me-ctrl';


const stateCtrls = angular.module( 'statecontrollers', [] );

homeCtrl(stateCtrls);
projectsCtrl(stateCtrls);
aboutMeCtrl(stateCtrls);

export default stateCtrls.name;
