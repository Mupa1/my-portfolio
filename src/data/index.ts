import tastyRecipes from '../assets/tastyRecipes.png';
import shooter from '../assets/shooter.png';
import newsweek from '../assets/newsweek.png';
import portfolio from '../assets/portfolio.png';
import eshop from '../assets/eshop.png';

export const headersData = [
  {
    label: 'Portfolio',
    href: '/',
  },
  {
    label: 'Resume',
    href: '/resume',
  },
];

export const projectsData = [
  {
    imageSrc: eshop,
    title: 'e-shop',
    description:
      'This project is based on an eCommerce website built with React. The user can add items to the cart, increase or decrease the number of items on the cart, or even empty the cart. The user can also click on checkout from the cart and pay by entering his/her credit card number.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }, { tech: 'Material-UI' }],
    live: 'https://e-shop-ecommerce.netlify.app/',
    github: 'https://github.com/Mupa1/e-shop',
  },
  {
    imageSrc: tastyRecipes,
    title: 'Tasty Recipes',
    description:
      'A single-page application that lets the user discover or filter through a variety of recipes by fetching data from Spoonacular API.',
    techStack: [{ tech: 'React' }, { tech: 'Redux' }],
    live: 'https://tasty-yummy-recipes-app.netlify.app/',
    github: 'https://github.com/Mupa1/tasty-recipes',
  },
  {
    imageSrc: portfolio,
    title: 'This Portfolio',
    description:
      'A responsive personal web development portfolio built using react and screenshots combined using Figma.',
    techStack: [{ tech: 'React' }, { tech: 'Material UI' }],
    live: 'https://mupanzaphila.com/',
    github: 'https://github.com/Mupa1/my-portfolio',
  },
  {
    imageSrc: shooter,
    title: 'Shooter Game',
    description:
      'An RPG shooter game built with Phaser 3, a JavaScript game framework designed to create 2D games',
    techStack: [
      { tech: 'JavaScript' },
      { tech: 'Phaser3' },
      { tech: 'Webpack' },
    ],
    live: 'https://mupa-shooter-game.netlify.app/',
    github: 'https://github.com/Mupa1/rpg-shooter-game',
  },
  {
    imageSrc: newsweek,
    title: 'Newsweek Clone',
    description:
      'A responsive grid-based UI clone from the Newsweek website homepage.',
    techStack: [{ tech: 'HTML5' }, { tech: 'CSS3' }, { tech: 'BOOTSTRAP' }],
    live: 'https://cocky-borg-5ade74.netlify.app/',
    github: 'https://github.com/Mupa1/Newsweek-Clone',
  },
];

export const skillsAndTech = [
  {
    title: 'Skills',
    description:
      'Frontend Development - Semantic HTML - Responsive Design - Accessibility - SEO - DOM Manipulation - TDD - Unit Testing - Refactoring - Deployment - Relational Databases - Version Control - Git Flow - Pair Programming - Adaptability - Communication - Problem Solving - Collaboration - Time Management',
  },
  {
    title: 'Technology',
    description:
      'HTML5 - CSS3 - SCSS - JavaScript - TypeScript - React - Redux - Next.js - GraphQL - RESTful APIs - Jest - React Testing Library - TailwindCSS - Styled Components - Material UI - Bootstrap - Node.js - Express - Webpack - NPM - Git',
  },
];
