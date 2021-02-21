import tastyRecipes from '../assets/tastyRecipes.png';
import shooter from '../assets/shooter.png';
import newsweek from '../assets/newsweekclone.png';
import bookit from '../assets/bookit1.png';

export const projectsData = [
  {
    imageSrc: tastyRecipes,
    title: 'Tasty Recipes',
    description: 'A single page application that fetches recipe data from Spoonacular API and stores it in the redux store. The user can filter through a variety of recipes.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }],
    live: 'https://tasty-yummy-recipes-app.netlify.app/',
    github: 'https://github.com/Mupa1/tasty-recipes',
  },
  {
    imageSrc: newsweek,
    title: 'Newsweek Clone',
    description: 'A responsive grid-based UI clone from the Newsweek website homepage.',
    techStack: [{ tech: 'HTML5' }, { tech: 'CSS3' }, { tech: 'BOOTSTRAP' }],
    live: 'https://cocky-borg-5ade74.netlify.app/',
    github: 'https://github.com/Mupa1/Newsweek-Clone',
  },
  {
    imageSrc: shooter,
    title: 'Shooter Game',
    description: 'An RPG shooter game built with Phaser 3, a JavaScript game framework designed to create 2D games',
    techStack: [{ tech: 'JavaScript' }, { tech: 'Phaser3' }, { tech: 'Webpack' }],
    live: 'https://mupa-shooter-game.netlify.app/',
    github: 'https://github.com/Mupa1/rpg-shooter-game',
  },
  {
    imageSrc: bookit,
    title: 'Bookit',
    description: "A Single Page Application for booking a doctor's appointment.The app is built with React and Redux libraries for the frontend and fetches data from a backend API built using Ruby on Rails.",
    techStack: [{ tech: 'React' }, { tech: 'Redux' }, { tech: 'Ruby on Rails' }],
    live: 'https://bookit-doc-appointments.netlify.app/',
    github: 'https://github.com/Mupa1/bookit-frontend',
  },
];

export const skillsAndTech = [
  {
    title: 'Skills',
    description: 'Semantic HTML - Responsive Design - CSS Preprocessing - DOM manipulation - UI Engineering - OOP - MVC - RESTful APIs - TDD / BDD - Unit Testing - Refactoring - Deployment - Relational Databases - Version Control - Git Flow - Pair Programming - Wireframing',
  },
  {
    title: 'Technology',
    description: 'HTML5 - CSS3 - SCSS - JavaScript - Webpack - React - Redux - Material UI - Bootstrap - Ruby - Ruby on Rails - PostgreSQL - MySQL - NodeJS - RSpec - Jest - REST APIs - Webpack - NPM - Git - Figma - Netlify',
  },
];
