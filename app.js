const music = new Audio('1.mp3');
const music2 = new Audio('vande.mp3');

// create Array 
let masterPlay = document.getElementById('masterPlay');
let masterPlay1 = document.getElementById('masterPlay1');
let wave = document.getElementsByClassName('wave')[0]; //موجات
 // play and puse music
masterPlay.addEventListener('click',()=>{
    if (music.paused || music.currentTime <=0) {
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
    } else {
        music.pause();
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
        wave.classList.remove('active2');
    }
} )
 masterPlay1.addEventListener('click',function(){
     console.log('ddd')
 })
 masterPlay1.addEventListener('click',function fd(){
     if (music2.paused || music2.currentTime <=0) {
         music2.play();
         masterPlay1.classList.remove('bi-play-fill');
         masterPlay1.classList.add('bi-pause-fill');
         wave.classList.add('active2');
     } else {
         music2.pause();
         masterPlay1.classList.add('bi-play-fill');
         masterPlay1.classList.remove('bi-pause-fill');
         wave.classList.remove('active2');
     }
 } )

  //الباكراوند


let currentStart = document.getElementById('currentStart');
let currentStart1 = document.getElementById('currentStart1');
let currentEnd = document.getElementById('currentEnd');
let currentEnd1 = document.getElementById('currentEnd1');
let seek = document.getElementById('seek');
let seek1 = document.getElementById('seek1');
let bar2 = document.getElementById('bar2');
let bar3 = document.getElementById('bar3');
let dot = document.getElementsByClassName('dot')[0];
let dot1 = document.getElementsByClassName('dot1')[0];

music.addEventListener('timeupdate',()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music.currentTime/music.duration)*100);
    seek.value = progressbar;
    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`;
})

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration/100;
})


music2.addEventListener('timeupdate',()=>{
    let music_curr = music2.currentTime;
    let music_dur = music2.duration;

    let min = Math.floor(music_dur/60);
    let sec = Math.floor(music_dur%60);
    if (sec<10) {
        sec = `0${sec}`
    }
    currentEnd1.innerText = `${min}:${sec}`;

    let min1 = Math.floor(music_curr/60);
    let sec1 = Math.floor(music_curr%60);
    if (sec1<10) {
        sec1 = `0${sec1}`
    }
    currentStart1.innerText = `${min1}:${sec1}`;

    let progressbar = parseInt((music2.currentTime/music2.duration)*100);
    seek1.value = progressbar;
    let seekbar = seek1.value;
    bar3.style.width = `${seekbar}%`;
    dot1.style.left = `${seekbar}%`;
})

seek1.addEventListener('change', ()=>{
    music2.currentTime = seek1.value * music2.duration/100;
})


let vol_icon = document.getElementById('vol_icon');
let vol_icon1 = document.getElementById('vol_icon1');
let vol = document.getElementById('vol');
let vol1 = document.getElementById('vol1');
let vol_dot = document.getElementById('vol_dot');
let vol_dot1 = document.getElementById('vol_dot1');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_bar1 = document.getElementsByClassName('vol_bar1')[0];

vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-mute-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})

vol1.addEventListener('change', ()=>{
    if (vol1.value == 0) {
        vol_icon1.classList.remove('bi-volume-down-fill');
        vol_icon1.classList.add('bi-volume-mute-fill');
        vol_icon1.classList.remove('bi-volume-up-fill');
    }
    if (vol1.value > 0) {
        vol_icon1.classList.add('bi-volume-down-fill');
        vol_icon1.classList.remove('bi-volume-mute-fill');
        vol_icon1.classList.remove('bi-volume-up-fill');
    }
    if (vol1.value > 50) {
        vol_icon1.classList.remove('bi-volume-down-fill');
        vol_icon1.classList.remove('bi-volume-mute-fill');
        vol_icon1.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol1.value;
    vol_bar1.style.width = `${vol_a}%`;
    vol_dot1.style.left = `${vol_a}%`;
    music2.volume = vol_a/100;
})