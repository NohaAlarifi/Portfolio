let douwnload_botton = document.getElementById('douwnload_botton');
let image = document.getElementById('image');
let content = document.getElementById('content');
let main = document.getElementById('main');
let PopUpCyper = document.getElementById("PopUpCyper");
let PopUpAI = document.getElementById("PopUpAI");
let PopUpHTML= document.getElementById("PopUpHTML");
let PopUpMaeen= document.getElementById("PopUpMaeen");
let PopUpMaeen2= document.getElementById("PopUpMaeen2");
let ContentTable=document.getElementById("ContentTable");
let manual1 = document.getElementById("manual");
let manual2 = document.getElementById("manua2");

/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////


manual1.classList.add("manualhide");

function ManualFunc(n){

    switch(n){
  
        case 1:
            manual1.classList.add("manualhide");
            manual2.classList.remove("manualhide");
            break;
            


        case 2:
            manual1.classList.remove("manualhide");
            manual2.classList.add("manualhide");
            break;
    }


}



function hideMain(){
    ContentTable.classList.add("Hmain");
}

function openMain(){
    ContentTable.classList.remove("Hmain");

}


function openPopupCer(n){

    switch(n){  
        
        case 1:
            PopUpCyper.classList.add("open-popUP");

        break; 

        case 2:
        PopUpAI.classList.add("open-popUP");

        break;

        case 3:
    PopUpHTML.classList.add("open-popUP");
        break;
    case 4:
        PopUpMaeen.classList.add("open-popUP");
        PopUpMaeen2.classList.add("open-popUP");
      
    break;
    }


  
    
}

function colsePopUP(i){

    switch(i){  
        
        case 1:
            PopUpCyper.classList.remove("open-popUP");


        break; 

        case 2:
        PopUpAI.classList.remove("open-popUP");

        break;

        case 3:
    PopUpHTML.classList.remove("open-popUP");
        break;

        case 4:
        PopUpMaeen.classList.remove("open-popUP");
        PopUpMaeen2.classList.remove("open-popUP");
    break;
    }
}

//////////////////////////////////////////////////////////////

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n){
    showSlides(slideIndex += n);

}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    var i ; 
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if(n> slides.length){slideIndex= 1}
    if(n<1){ slideIndex = slides.length}

    for(i=0; i<slides.length; i++){slides[i].style.display="none";    }
for(i=0; i<dots.length; i++){ dots[i].className=dots[i].className.replace("active","");  }

slides[slideIndex - 1].style.display = "block";
dots[slideIndex - 1].className += "active";
}

////////////////////////////////////////////////////////////////////////


var slideIndexA = 1;
showSlidesA(slideIndexA);

function plusSlidesA(n){
    showSlidesA(slideIndexA += n);

}

function currentSlideA(n){
    showSlidesA(slideIndexA = n);
}

function showSlidesA(n){
    var iA ; 
    var slidesA = document.getElementsByClassName("mySlidesA");
    var dotsA = document.getElementsByClassName("dotA");
    if(n> slidesA.length){slideIndexA= 1}
    if(n<1){ slideIndexA = slidesA.length}

    for(iA=0; iA<slidesA.length; iA++){slidesA[iA].style.display="none";    }
for(iA=0; iA<dotsA.length; iA++){ dotsA[iA].className=dotsA[iA].className.replace("active","");  }

slidesA[slideIndexA - 1].style.display = "block";
dotsA[slideIndexA - 1].className += "active";
}

//////////////////////////////////////////////////////////////////////////




window.onscroll= function onScroll(){

let value = scrollY;

douwnload_botton.style.bottom = (value+740)+ 'px';
douwnload_botton.style.left = (value+20)+ 'px';
image.style.top = value+ 'px';
content.style.bottom = (value + 675)+ 'px';





if (scrollY >= 1100 ){
    image.style.display = 'none';
}else{
    image.style.display='block';
}
}











/** 
 *
 * 
 * 
 * 


let cardiconn = document.getElementById("Footer");


function ActivateContact(){

    cardiconn.classList.add("notice");

  
         
 

  }


window.addEventListener("load", ()=>{
AutoSlide();
   
});

function AutoSlide(){

setInterval(()=>{
    slide(getItemActiveIndex()+1);
},3000);

}

function slide(toIndex){
    const itemsArray = Array.from(document.querySelectorAll('.imgSlide'));
    const itemActive = document.querySelector("Firstitem");

if(toIndex>= itemsArray.length){
    toIndex=0;
}

const newItemActive = itemsArray[toIndex];
newItemActive.classList.add("posnextItem");



setTimeout(()=> {
    newItemActive.classList.add("nextItem");
    itemActive.classList.add("nextItem");

},20);


newItemActive.addEventListener("transitionend",()=>{
itemActive.className="imgSlide";
newItemActive.className="imgSlide Firstitem";

},   {

    once: true
});



}

function getItemActiveIndex(){
    const itemsArray = Array.from(document.querySelectorAll('.imgSlide'));
const itemActive = document.querySelector("Firstitem");
const itemActiveIndex=itemActive.indexof(itemActive);
return itemActiveIndex;





}
 * 
 * 
 * 
 * 
 *  
 * var counter = 1;
setInterval(function(){

document.getElementById('radioMCIT'+counter).checked = true;
counter++;

if(counter >7){
    counter =1;
}
}, 5000);
 * 
 * 
const wrapper  = document.querySelector('.wrapper');
carousel = document.querySelector('.carousel');
img =document.querySelectorAll('.img');
buttons =document.querySelectorAll('.button');
let imgIndex = 1, intervalid;

///////////////////////////////////////////////////
const AutoSlide = () =>{ 
    intervalid = setInterval(()=> slideImage(++imgIndex), 2000) ; 
};

AutoSlide(); 


//////////////////////////////////////////////////////////
const slideImage = () =>{
    imgIndex = imgIndex === img.length ? 0 : imgIndex <0? img.length -1 : imgIndex;
    carousel.style.transdorm = 'translate(-${imgIndex * 100}%)'
};
///////////////////////////////////////////////
const updateClick = (e) => {

    clearInterval(intervalid);

    imgIndex +=e.target.id === "next"? 1 : -1;
    slideImage(imgIndex);
    AutoSlide();

}
////////////////////////////////////////////////
buttons.forEach(button => button.addEventListener("click", updateClick));

wrapper.addEventListener("mouseover", () => clearInterval(intervalid));
wrapper.addEventListener("mouseleave", AutoSlide);
*/
