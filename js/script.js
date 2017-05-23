/* 
// Document Ready no jQuery
document.addEventListener("DOMContentLoaded", function(event) { 
  "use strict";
  
});
*/

/* 
// Document Ready Using jQuery
$(function() {
  "use strict";
  
});
*/

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});