import javascript from './images/icons/javascript.png';
import laravel from './images/icons/laravel-48.png';
import nodeJs from './images/icons/node-js.png';
import react from './images/icons/react.png';
import vueJs from './images/icons/vue-js.png';
import aws from './images/icons/aws.png';

import calculator from './images/calculator.png'
import bookLibrary from './images/book-library.png';
import ticTacToe from './images/tic-tac-toe.png';
import copnow from './images/copnow.png';

export const logos = [
    { name: 'javascript', logo: javascript },
    { name: 'react', logo: react },
    { name: 'vueJs', logo: vueJs },
    { name: 'nodeJs', logo: nodeJs },
    { name: 'laravel', logo: laravel },
    { name: 'aws', logo: aws }
]

export const projects = [
    { name: 'Copnow Inc', link: 'https://copnow.co/', image: copnow, description: 'A Fashion E-Commerce built with React, Laravel and AWS.' },
    { name: 'Calculator App', link: 'https://playful-travesseiro-44064f.netlify.app/', image: calculator, description: 'A simple Calculator App' },
    { name: 'Book Library App', link: 'https://gorgeous-dodol-4ad226.netlify.app/', image: bookLibrary, description: 'Book library used to keep a record of books built with Vanilla JS.' },
    { name: 'Tic-Tac-Toe App', link: 'https://papaya-dodol-fe3fcb.netlify.app/', image: ticTacToe, description: 'An interactive X-O game with CPU support.' },
]

export const contactLinks = [
    { name: 'Send a mail', link: 'mailto:chukkyalozie@gmail.com', icon: 'fa fa-at', target: null },
    { name: 'Call me', link: 'tel:+2348067877325', icon: 'fa fa-mobile', target: null },
    { name: 'Linkedin', link: 'https://linkedin.com/in/chukwuemekaalozie', icon: 'fa fa-linkedin-square', target: '_blank' },
    { name: 'GitHub', link: 'https://github.com/Chukky9', icon: 'fa fa-github', target: '_blank' },
]