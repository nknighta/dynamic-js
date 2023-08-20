const menu = document.getElementById('menu-btn');
const getmenuval = menu.getBoundingClientRect();

const d1 = document.getElementById('disptest001');
let tox = getmenuval.top;
let left = getmenuval.left;
d1.innerHTML = "top: " + tox + " left: " + left;