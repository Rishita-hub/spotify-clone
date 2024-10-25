console.log("Welcome to My Spotify")
let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let individualplaybutton = Array.from(document.getElementsByClassName('songItemPlay'))

let songs = [
    {songName: "Salam-e-Ishq" , filePath: "song/1.mp3" , coverPath: "covers/1.jpg"},
    {songName: "Tauba Tauba " , filePath: "song/2.mp3" , coverPath: "covers/2.webp"},
    {songName: "Ye tune kya kiya" , filePath: "song/3.mp3" , coverPath: "covers/3.jpeg"},
    {songName: "Kinni Kinni" , filePath: "song/4.mp3" , coverPath: "covers/4.jpg"},
    {songName: "Dekhha Tenu" , filePath: "song/5.mp3" , coverPath: "covers/5.jpg"},
    {songName: "Foxy" , filePath: "song/6.mp3" , coverPath: "covers/6.jpg"},
    {songName: "Iski bhen ki mje mje" , filePath: "song/7.mp3" , coverPath: "covers/7.jpg"},
    {songName: "Weapon" , filePath: "song/8.mp3" , coverPath: "covers/8.jpeg"},
    {songName: "Billo Rani" , filePath: "song/9.mp3" , coverPath: "covers/9.jpg"},
    {songName: "Suniyan Suniyan:)" , filePath: "song/10.mp3" , coverPath: "covers/10.jpg"},

]
songItems.forEach((element,i) => {
   // console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// audioElement.play()




//Listen to events
audioElement.addEventListener('timeupdate' , () =>
{
    //console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    //console.log(progress);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration /100
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
            element.classList.add('fa-play-circle');
})
}

// individualplaybutton.addEventListener('click' , () => {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//         individualplaybutton.classList.remove('fa-play-circle');
//         individualplaybutton.classList.add('fa-pause-circle');
//        gif.style.opacity = 1;
//     }
//     else{
//         audioElement.pause()
//         individualplaybutton.classList.remove('fa-pause-circle');
//         individualplaybutton.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })

// Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
individualplaybutton.forEach((element) => {
element.addEventListener('click',(e) => {
    if(audioElement.paused || audioElement.currentTime<=0){
    
    
   // console.log(e.target);
    makeAllPlays();
    songIndex = parseInt(e.target.id);
    e.target.classList.remove('fa-play-circle');
    e.target.classList.add('fa-pause-circle');
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex-1].songName;
    }
    else{
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-play-circle');
        e.target.classList.remove('fa-pause-circle');
        audioElement.src = `song/${songIndex}.mp3`;
        audioElement.currentTime = 0;
        audioElement.pause();
        gif.style.opacity = 0;
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        // masterSongName.innerText = songs[songIndex-1].songName;

    }

});
});

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
 
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex-1].songName;

})
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex-1].songName;



})


//handle play/pause click
// masterPlay.addEventListener('click' , () => {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//        masterPlay.classList.remove('fa-play-circle');
//        masterPlay.classList.add('fa-pause-circle');
//        gif.style.opacity = 1;

//     }
//     else{
//         audioElement.pause()
//         masterPlay.classList.remove('fa-pause-circle');
//         masterPlay.classList.add('fa-play-circle');
//         gif.style.opacity = 0;
//     }
// })
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    
        individualplaybutton.forEach((element) => {
            if (parseInt(element.id) === songIndex) {
                element.classList.remove('fa-play-circle');
                element.classList.add('fa-pause-circle');
            }
          
        });
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        makeAllPlays();
    }
});



// audioElement.addEventListener('timeupdate', () => {
//     if (audioElement.currentTime >= 100) {
//         if (songIndex >= 9) {
//             songIndex = 0;
//         } else {
//             songIndex += 1;
//         }
//         audioElement.src = `song/${songIndex}.mp3`;
//         audioElement.currentTime = 0;
//         audioElement.play();
//         gif.style.opacity = 1;
//         masterPlay.classList.remove('fa-play-circle');
//         masterPlay.classList.add('fa-pause-circle');
//         masterSongName.innerText = songs[songIndex].songName;
        
//         // Update individual play buttons
//         makeAllPlays();
//         individualplaybutton.forEach((element) => {
//             if (parseInt(element.id) === songIndex) {
//                 element.classList.remove('fa-play-circle');
//                 element.classList.add('fa-pause-circle');
//             }
//         });
//     }
// });

document.getElementById('next').addEventListener('click', () => {
    playNextSong();
});

audioElement.addEventListener('ended', () => {
    playNextSong();
});

function playNextSong() {
    if (songIndex >= songs.length - 1) {
        songIndex = 0;
    } else {
        songIndex += 1;
    }
    audioElement.src = `song/${songIndex}.mp3`;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    masterSongName.innerText = songs[songIndex-1].songName;
    
    // Update the individual play button to pause for the new song
    makeAllPlays();
    individualplaybutton.forEach((element) => {
        if (parseInt(element.id) === songIndex) {
            element.classList.remove('fa-play-circle');
            element.classList.add('fa-pause-circle');
        }
    });
}