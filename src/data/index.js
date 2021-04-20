import tastyRecipes from '../assets/tastyRecipes.png';
import shooter from '../assets/shooter.png';
import newsweek from '../assets/newsweek.png';
import portfolio from '../assets/portfolio.png';
import bookIt from '../assets/bookIT.png';
import eshop from '../assets/eshop.png';

export const headersData = [
  {
    label: 'Projects',
    href: 'projects',
  },
  {
    label: 'About',
    href: 'about',
  },
  {
    label: 'Contact',
    href: 'contact',
  },
];

export const projectsData = [
  {
    imageSrc: eshop,
    title: 'e-shop',
    description: 'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }, { tech: 'Material-UI' }],
    live: 'https://e-shop-ecommerce.netlify.app/',
    github: 'https://github.com/Mupa1/e-shop',
  },
  {
    imageSrc: bookIt,
    title: 'BookIT',
    description: 'A web application for booking an appointment with the doctor. The application is built using React and Redux libraries for the front-end and fetches data from a backend API built using Ruby on Rails.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }, { tech: 'Ruby on Rails' }],
    live: 'https://bookit-doc-appointments.netlify.app/',
    github: 'https://github.com/Mupa1/bookit-frontend',
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
    imageSrc: tastyRecipes,
    title: 'Tasty Recipes',
    description: 'A single-page application that lets the user discover or filter through a variety of recipes by fetching data from Spoonacular API.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }],
    live: 'https://tasty-yummy-recipes-app.netlify.app/',
    github: 'https://github.com/Mupa1/tasty-recipes',
  },
  {
    imageSrc: portfolio,
    title: 'This Portfolio',
    description: 'A responsive personal web development portfolio built using react and screenshots combined using Figma.',
    techStack: [{ tech: 'React' }, { tech: 'Material UI' }],
    live: 'https://mupa-dev.netlify.app/',
    github: 'https://github.com/Mupa1/my-portfolio',
  },
  {
    imageSrc: newsweek,
    title: 'Newsweek Clone',
    description: 'A responsive grid-based UI clone from the Newsweek website homepage.',
    techStack: [{ tech: 'HTML5' }, { tech: 'CSS3' }, { tech: 'BOOTSTRAP' }],
    live: 'https://cocky-borg-5ade74.netlify.app/',
    github: 'https://github.com/Mupa1/Newsweek-Clone',
  },
];

export const skillsAndTech = [
  {
    title: 'Skills',
    description: 'Semantic HTML - Responsive Design - DOM manipulation - UI Engineering - OOP - MVC - RESTful APIs - TDD / BDD - Unit Testing - Refactoring - Deployment - Relational Databases - Version Control - Git Flow - Pair Programming - Wireframing',
  },
  {
    title: 'Technology',
    description: 'HTML5 - CSS3 - SCSS - JavaScript - Webpack - React - Redux - Material UI - Bootstrap - Ruby - Ruby on Rails - PostgreSQL - MySQL - NodeJS - RSpec - Jest - REST APIs - NPM - Git - Figma',
  },
];
