
var i = 1000
function RightSlide(){
    var skillElement = document.querySelector(".Skills")
    skillElement.scrollLeft += i;
}
function LeftSlide(){
    i*2
    var skillElement = document.querySelector(".Skills")
    skillElement.scrollLeft -= i;
}

function NavBar(){
    var navElement = document.querySelector(".navDropDown");
    navElement.classList.toggle("navDropDown1")
}