let content1 = document.getElementById("content1");
let content2 = document.getElementById('content2');
let content3 = document.getElementById('content3');
let btn1 = document.getElementById('btn1');
let btn2 = document.getElementById('btn2');
let btn3 = document.getElementById('btn3');


function openCAT(){
    content1.style.transform = "translateX(0)";
    content2.style.transform = "translateX(100%)";
    content3.style.transform = "translateX(100%)";
    btn1.style.color = "#ee5d09";
    btn2.style.color = "#000";
    btn3.style.color = "#000";
    content1.style.transitionDelay = "0.3s";
    content2.style.transitionDelay = "0s";
    content3.style.transitionDelay = "0s";
}
openCAT()

function openDOG(){
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(0)";
  content3.style.transform = "translateX(100%)";
  btn2.style.color = "#ee5d09";
  btn1.style.color = "#000";
  btn3.style.color = "#000";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0.3s";
  content3.style.transitionDelay = "0s";
}
openDOG()

function openHORSE(){
  content1.style.transform = "translateX(100%)";
  content2.style.transform = "translateX(100%)";
  content3.style.transform = "translateX(0)";
  btn3.style.color = "#ee5d09";
  btn2.style.color = "#000";
  btn1.style.color = "#000";
  content1.style.transitionDelay = "0s";
  content2.style.transitionDelay = "0s";
  content3.style.transitionDelay = "0.3s";
}
openHORSE()
        
