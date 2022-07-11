import header from './html/includes/header.html';
import preview from './html/includes/preview.html';
import order from './html/includes/order.html';
import footer from './html/includes/footer.html';

const includes = [header, '<main>', preview, order, '</main>', footer];
document.getElementById('root').innerHTML = includes.join('');

import './scss/main.scss';
import './js/script.js';
