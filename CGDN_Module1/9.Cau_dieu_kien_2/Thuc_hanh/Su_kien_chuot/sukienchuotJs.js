let imgObj = null;
imgObj = document.getElementById('img');
imgObj.style.position = 'relative';
imgObj.style.left = '0px';
function moveright() {
    imgObj.style.left = parseInt(imgObj.style.left) + 10 + 'px';
window.onload= init;}
