
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
window.onscroll = function(){ScrollAnimation()}
function ScrollAnimation(){
    const viewPorst = document.documentElement.scrollTop;
     var service = document.getElementsByClassName("service")
     var AboutMe = document.getElementsByClassName("AboutMe")
     var Skills = document.getElementsByClassName("Skills")
     var forms = document.getElementsByClassName("forms")
     const effectElement = [forms,service,AboutMe,Skills];

    effectElement.forEach((item)=>{
        for(var i=0;i<item.length;i++){
            if(viewPorst >= item[i].offsetTop){
                item[i].classList.add("scrollEffect")
            }
        }
    })
    


          
}


