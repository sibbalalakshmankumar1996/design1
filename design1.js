let menubarEl = document.getElementById("menubar");
let navlinksEl  = document.getElementById("navLinks");

menubarEl.onclick = function(){
    console.log("displayed");
    navlinksEl.classList.toggle('hidden');
}

let sliderMainEl = document.getElementById("sliderMain");
let item = sliderMainEl.getElementsByClassName("item");

let leftArrowEl = document.getElementById("leftArrow");
let rightArrowEl = document.getElementById("rightArrow");

rightArrowEl.onclick = function(){
    sliderMainEl.append(item[0]);
}

leftArrowEl.onclick = function(){
    sliderMainEl.prepend(item[item.length - 1]);
}