'use strict';

let image = document.querySelector("#image");
let title = document.querySelector("#title");
let btnYes = document.querySelector("#btnYes");
let btnNo = document.querySelector("#btnNo");
let happySound = new Audio('assets/happy-happy-happy-cat.mp3');
let sadSound = new Audio('assets/crying-cat.mp3')
btnYes.addEventListener('click',()=>{
    image.src = "https://media.tenor.com/lCKwsD2OW1kAAAAj/happy-cat-happy-happy-cat.gif"
    title.innerHTML = "Ohh I love you too 😘"
    sadSound.pause();
    happySound.play();
    happySound.loop=true;

});
let btnYesScale =1;
let btnNoScale =2;

btnNo.addEventListener('click',()=>{
    
    image.src = "https://i.pinimg.com/236x/52/77/b0/5277b0c5aa497eb1c8b7f25829894fe7.jpg"
    title.innerHTML = "Hmm, Why you don't love me?😢😭"
    sadSound.play();
    happySound.pause();
    happySound.loop=true;
    btnYesScale +=0.1;
    btnNoScale -=0.1;
    btnYes.style.transfrom = `scale(${btnYesScale})`;
    btnNo.style.transfrom = `scale(${btnYesScale})`;

});
