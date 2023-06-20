let nav = document.querySelector(".navbar");

window.onscroll = function() {
    if (document.documentElement.scrollTop > 20) {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled");
    }
}


// nav hide fucntion 

let navbar = document.querySelectorAll(".nav-link");
let nav_collapse = document.querySelector(".navbar-collapse.collapse");

navbar.forEach((a) => {
    // console.log(a);
    a.addEventListener("click" , function(){
        nav_collapse.classList.remove('show') ;
    })
})