import homeState from './home-state/home';
import aboutMeState from './about-me-state/about-me';
import projectsState from './projects-state/projects';
import resumeState from './resume-state/resume';
import contactMeState from './contact-me-state/contact-me';



export default function($stateProvider) {
  $stateProvider
    .state('home', homeState )
    .state('aboutMe', aboutMeState )
    .state('projects', projectsState )
    .state('resume', resumeState )
    .state('contactMe', contactMeState );
}
