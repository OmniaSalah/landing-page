//  change active class in a navBar
var links = document.querySelectorAll('.navLink');
links.forEach((link)=>{
  link.addEventListener("click",function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  })
})

//  for first image
function hoverEvent1(){
  var img = document.getElementById('img1');
  img.src = "img/features-icon-white-01.png";
}
function leaveEvent1(){
  var img = document.getElementById('img1');
  img.src = "img/features-icon-black-01.png";
}

//  second image
function hoverEvent2(){
  var img = document.getElementById('img2');
  img.src = "img/features-icon-white-02.png";
}
function leaveEvent2(){
  var img = document.getElementById('img2');
  img.src = "img/features-icon-black-02.png";
}
// third image

function hoverEvent3(){
  var img = document.getElementById('img3');
  img.src = "img/features-icon-white-01.png";
}
function leaveEvent3(){
  var img = document.getElementById('img3');
  img.src = "img/features-icon-black-01.png";
}

//  forth image
function hoverEvent4(){
  var img = document.getElementById('img4');
  img.src = "img/features-icon-white-02.png";
}
function leaveEvent4(){
  var img = document.getElementById('img4');
  img.src = "img/features-icon-black-02.png";
}

// navBar
var Nav = document.querySelector('.Nav');
//  section home 
var home = document.querySelector('.home');
var text = document.querySelector('.text');
var imgDiv = document.querySelector('.img');
// features section
var featuresSection = document.querySelector('.features');
var features = document.querySelectorAll('.feature');
// about-us section
var aboutUs = document.querySelector('.about-us');
var leftImg = document.querySelector('.leftImg');
var rightContent = document.querySelector('.rightContent');

// our-services section
var OurServices = document.querySelector('.our-services');
var txt = document.querySelector('.txt');
var cards = document.querySelectorAll('.card');

// contact-us section
var contactUsSection = document.querySelector('.contact-us');
var contactUs = document.querySelector('.contactUs');


window.onscroll = function(){
  if(window.scrollY >= featuresSection.offsetTop-400){
    features.forEach((feature)=>{
      feature.style.transform = "translate(0,0)";
      // transition: 1s;
      feature.style.transition = "2s";
      feature.style.delay = "60s";
    })
  }

  if(window.scrollY >= aboutUs.offsetTop-300){
    leftImg.style.transform = "translate(0,0)";
    leftImg.style.transition = "2s";

    rightContent.style.transform = "translate(0,0)";
    rightContent.style.transition = "2s";
  }

  if(window.scrollY >= OurServices.offsetTop-300){
    txt.style.transform = "scale(1)";
    txt.style.transition = ".8s";
    cards.forEach((card)=>{

      card.style.transform = "translate(0,0)";
      card.style.transition = ".8s";

      // card.style.transitionDuration = "10s";
    })
  }
  if(window.scrollY >= contactUsSection.offsetTop-300){
    contactUs.style.transform = "translate(0,0)";
    contactUs.style.transition = ".8s";
    console.log('done');
  }
// make navBar fixed
  if(window.scrollY >= home.offsetTop+300){
    Nav.style.position = "fixed";
    Nav.style.top = "0";
  }
}

window.onload = function(){  
  text.style.transform = "translate(0,0)";
  text.style.transition = "1.5s";

  imgDiv.style.transform = "translate(0,0)";
  imgDiv.style.transition = "1.5s";  

  Nav.style.transform = "translate(0,0)";
  Nav.style.transition = ".6s";
  Nav.style.position = "inline-block";
}