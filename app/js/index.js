var $ = require('jquery');
global.jQuery = $;

require('bootstrap/js/affix.js');
require('bootstrap/js/alert.js');
require('bootstrap/js/button.js');
require('bootstrap/js/carousel.js');
require('bootstrap/js/collapse.js');
require('bootstrap/js/dropdown.js');
require('bootstrap/js/modal.js');
require('bootstrap/js/tooltip.js');
require('bootstrap/js/popover.js');
require('bootstrap/js/scrollspy.js');
require('bootstrap/js/tab.js');
require('bootstrap/js/transition.js');

document.body.innerHTML = require('../html/index.html');

