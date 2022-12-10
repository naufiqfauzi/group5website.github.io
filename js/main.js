$(document).ready(function(){
	$('.header').height($(window).height());
})

var ready = (callback) => {
    if (document.readyState != "loading") callback();
    else document.addEventListener("DOMContentLoaded", callback);
}
ready(() => {
    document.querySelector(".header").style.height = window.innerHeight + "px";
})

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('ID').play();
    document.removeEventListener('click', musicPlay);
}