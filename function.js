
const noBtn = document.querySelector('.no-btn');
const yesBtn = document.querySelector('.yes-btn')
const imgElemet = document.querySelector('.imagecontainer');
const bodyContainer = document.querySelector('.body-container')
const myh1 = document.querySelector('.container h1')
const answerYes = document.querySelector('.answer-yes')
const myAudio = document.querySelector('.audio-container audio')
const soundno_audio = new Audio('./audio/bananacatcrying.mp3');

const bodyReact =  bodyContainer.getBoundingClientRect();
const noBtnReact = noBtn.getBoundingClientRect();

var i = 0;
var scale = 1;



var imageListSadCat = [
    //list sad cat
    "./image/catcry1.png",
    "./image/catcry2.png",
    "./image/catcry3.png",
    "./image/catcry4.png",
    "./image/catcry5.png",
    "./image/catcry6.png",
    "./image/catcry7.png",
    "./image/catcry8.png",
    "./image/catcry9.png",
];

var noListPrompt = [
    "ARE YOU SURE!!?",
    "PLEASEE POOKIEE",
    "POOKIE, don't be so mean to me",
    "please, pookie, i'm gonna cry",
    "Pookie, don't break my heart like this",
    "Pls Pls Pls Pls Pookie",
    "I'm begging you, pookie bear",
    "You breaking my heart",
    "Pls, don't do it to me"
]

function changeSadImage(i){
    imgElemet.src = imageListSadCat[i];
}

function changSadPrompt(i){
    noBtn.innerHTML = noListPrompt[i]; 
}

function randomlyNoBtn(){
    console.log("bouncing bodycontainer: ",bodyReact)
    console.log("bouncing btn: ",noBtnReact)
    
    const j = Math.floor(Math.random() * (bodyReact.width - noBtnReact.width));
    const z = Math.floor(Math.random() * (bodyReact.height - noBtnReact.height));

    console.log("x: ",j)
    console.log("y: ",z)
    
    noBtn.style.left = j + 'px';
    noBtn.style.top = z + 'px';
}

function increaseYesBtn(scale){

    yesBtn.style.scale = scale;
}

function noSoundBtn(){
    const volume = 0.9;
    
    soundno_audio.volume = volume;
    console.log("playing song")
    soundno_audio.play();
    // pauseSong(myAudio);
    myAudio.volume = 0.1;

}

function yesSoundBtn(){
    const volume = 0.5;
    const soundyes_audio = new Audio('./audio/happyhappycat.mp3');
    soundyes_audio.volume = volume;
    console.log("playing song")
    soundyes_audio.loop = true;
    soundyes_audio.play();
    pauseSong(myAudio);
    pauseSong(soundno_audio)
}

function pauseSong(mySong){
    mySong.pause();
}



noBtn.addEventListener('click',()=>{
    i = i < (imageListSadCat.length)-1 ? i + 1 : 0;
    // console.log("my i: ",i)
    // imgElemet.src = imageListSadCat[i];
    scale = scale < (1.9)? scale + 0.1 : scale;
    changeSadImage(i);
    changSadPrompt(i);
    randomlyNoBtn();
    increaseYesBtn(scale);
    noSoundBtn();
    
})

yesBtn.addEventListener('click',()=>{
    yesBtn.style.scale = 1;

    yesBtn.classList.toggle('active')
    answerYes.classList.toggle('active')
    noBtn.classList.toggle('active')
    myh1.classList.toggle('active')

    answerYes.innerHTML = `LUV YOU, my pooike wookie smookie smocchie oochie 
                        soopie wompie domie sweety pie cutie pie eepy weepy 
                        baby way babybug lovebug butter cup angle face with cherry
                        on top shuggy shug angel doll hunny bunch honey sweet cheeks
                        stud-muffin honey butter biscuit sugar snap pea lovey dovey
                        boogeer bugs boo snooger supernova casanova main
                        squeeze brain freeze other half of my beloved bae knight in 
                        shining armor boo thang carino sweetheart baby love bug good looking
                        sunshine darling amor mi corazon sweet thing sweet stuff bear bunny 
                        puffin wuffin peanut jellybean sweet cheek cupcake honey pothot pot`
    
    imgElemet.src = "./image/cat-cute.gif"
    yesSoundBtn();
})

