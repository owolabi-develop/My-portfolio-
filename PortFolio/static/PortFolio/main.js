

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

var skillcontainer = document.querySelector('.containerSkill')
if(viewPorst >= skillcontainer.offsetTop){
    var html = document.querySelector(".html-bar")
    var css = document.querySelector(".css-bar")
    var javs = document.querySelector(".javascript-bar")
    var python = document.querySelector(".python-bar")
    var django = document.querySelector(".django-bar")
    var jsq = document.querySelector(".jQuery-bar")
    var mysql = document.querySelector(".mysql-bar")

    // add features
    html.classList.add("html-bars")
    css.classList.add("css-bars")
    javs.classList.add("javascript-bars")
    python.classList.add("python-bars")
    django.classList.add("django-bars")
    jsq.classList.add("jQuery-bars")
    mysql.classList.add("mysql-bars")

   

    

}

          
}


