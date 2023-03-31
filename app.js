const imgs=document.querySelectorAll(".containerSlider img");
const precedent=document.querySelector('.prec');
const suivant=document.querySelector('.suiv');
const img=document.querySelector(".img");
const boutonDiaporama=document.querySelector(".diaporamaAutomatique")
let count=0;
let nombreImage=imgs.length;
let interval;
// let  diaporamaInterval ;
 let diaporamaEnCours=false;


precedent.addEventListener("click", function(){
    count--;
    if(count<0){
        count=imgs.length-1
    }
    removeActive();
    imgs[count].classList.add("active")
})

suivant.addEventListener("click",() =>{
    count++;
    if(count>nombreImage-1){
        count=0;
    }
    removeActive();
    imgs[count].classList.add("active")

})

function removeActive(){
    for(i=0;i<nombreImage;i++){
        imgs[i].classList.remove("active")
    }
}

function diaporamaAutomatique(){

    count++;
    if(count>nombreImage-1){
        count=0;
    }
    removeActive();
    imgs[count].classList.add("active");
}

function commencerDiaporama(){ 
    interval=setInterval(diaporamaAutomatique, 1000);
    boutonDiaporama.textContent="Arret du diaporama automatique";
    diaporamaEnCours=true;
   
}

function arreterDiaporama(){
    if(interval){
        clearInterval(interval);
        interval=null;
        boutonDiaporama.textContent="Diaporama Automatique";
        diaporamaEnCours=false;
       
    }
   
}

boutonDiaporama.addEventListener("click",() =>{
    if(diaporamaEnCours){
        arreterDiaporama();
    }else{
        commencerDiaporama();
    }
})

// boutonDiaporama.addEventListener("click",() =>{
   
//     interval;
//     boutonDiaporama.textContent="Arret du diaporama automatique";
//     diaporamaEnCours=true;
    
// })



// function stopDiaporama(){
//     diaporamaInterval=null;
//     boutonDiaporama.textContent="Diaporama Automatique";
//     diaporamaEnCours=false;
// }

// function startDiaporama(){
//     setInterval(diaporamaAutomatique, 3000);
//     boutonDiaporama.textContent="Cliquez pour arreter le diaporama automatique";
//     diaporamaEnCours=true;
// }

// boutonDiaporama.addEventListener("click", () =>{
//     if(diaporamaEnCours){
//         startDiaporama();
//     }else{
//         stopDiaporama();
//     }
// })


