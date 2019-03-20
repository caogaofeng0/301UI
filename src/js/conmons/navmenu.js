var $ = require('jquery');
var $$ = function (parmas) { 
     return $(parmas)[0]
 }
console.log( $$('body'), "-------->");
  const nav = document.querySelector('.nav');
  const navList = document.querySelectorAll('.nav li');
  nav.onclick = function (e) {
    for (var i = 0; i < navList.length; i++) {
      navList[i].setAttribute("class", "")
    }
    if (e.target.nodeName === 'LI') {
      e.target.setAttribute("class", "active")
    }
  }