console.log("Welcome to Spotify");

// Initialize the Variables
let songIndex = 1;
let audioElement = new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterclasongname = document.getElementById('masterclasongname');
let timee = document.getElementById('timee');


let songItem = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName: "Kesariya  Brahmāstra", filePath: "1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Dekhne walon ne Kya kya nahi Dekha hoga", filePath: "2.mp3", coverPath: "covers/2.jpg"},
    {songName: "Achha Sila Diya", filePath: "3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Deewaane Selfiee", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Honthon Pe Bas", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Dakku", filePath: "6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Ek Taraf Uska Ghar Ek Taraf", filePath: "7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Arey Pagol Hoye Jabo Ami", filePath: "8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Elevated", filePath: "9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Mi Amor", filePath: "10.mp3", coverPath: "covers/10.jpg"},
];
const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songitemplay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
} 
Array.from(
      document.getElementsByClassName('songitemplay')
 ).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        makeAllPlays();
        index=parseInt(e.target.id)
        e.target.classList.remove('fa-play-circle');
        
        
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        songIndex=index-1;
        masterclasongname.innerText=songs[songIndex].songName;
        
   

        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })
 })
songItem.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})
// songItem.forEach((element, i)=>{ 
//     element.getElementsByTagName("img")[0].src=songs[i].coverPath; 
//     element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
// })
audioElement.addEventListener('timeupdate',()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    myProgressBar.value=progress;
    document.getElementById("timee").innerHTML = audioElement.currentTime.toFixed(0);

})
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
    
})
myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    timee.innerHTML=3;
    // timee.innerHTML=audioElement.currentTime;
})

audioElement.play();
// 
document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=1){
        songIndex=1;
    }else {
        songIndex-=1;
    }
    masterclasongname.innerText=songs[songIndex].songName;

    audioElement.src=`songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>9){
        songIndex=0;
    }else {
        songIndex+=1;
    }
    masterclasongname.innerText=songs[songIndex].songName;
    audioElement.src=`songs/${songIndex+1}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})