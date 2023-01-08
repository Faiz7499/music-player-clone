console.log("Welcome to the Spotify clone");
let songs=[
    {songName:"Amplifire-imran.mp3",filePath:"Amplifire-imran.mp3"},
    {songName:"Bewafa-imran.mp3",filePath:"Bewafa-imran.mp3"},
    {songName:"imaginary-imran.mp3",filePath:"imaginary-imran.mp3"},
]
let sindex;
let prog;
let audiooo=new Audio(songs[0].filePath);
let pri=document.getElementById('pri');
let paus=document.getElementById('pause');
let next=document.getElementById('next');
let progres=document.getElementById('my');
let songitems=Array.from(document.getElementsByClassName('songitem'));

songitems.forEach((element,i) => {
    console.log(element);
    element.getElementsByClassName("songname")[0].innerText=songs[i].songName;
});
paus.addEventListener('click',()=>{
 if(audiooo.paused||audiooo.currentTime<0){
    audiooo.play();
    paus.innerText="| |";
 }
 else{
    audiooo.pause();
    paus.innerText="|O|";
 }
})
audiooo.addEventListener('timeupdate',()=>{
    prog=parseInt((audiooo.currentTime/audiooo.duration)*100);
    console.log(prog);
    progres.value=prog;
})
progres.addEventListener('change',()=>{
    audiooo.currentTime=(progres.value*audiooo.duration)/100;
})
Array.from(document.getElementsByClassName('songname')).forEach((element)=>{
   
    element.addEventListener('click',(e)=>{
        sindex=parseInt(e.target.id)
        console.log(sindex)
        put=songs[sindex].filePath;
        console.log(put);
        audiooo.src=put;
        console.log(audiooo.src);
        audiooo.currentTime=0;
        audiooo.play();
        paus.innerText="| |";
    })
})
document.getElementById('pri').addEventListener('click',()=>{
    if (sindex==0) {
        sindex=0;
    }
    else{
        sindex=sindex-1;
        put=songs[sindex].filePath;
        console.log(put);
        audiooo.src=put;
        console.log(audiooo.src);
        audiooo.currentTime=0;
        audiooo.play();
        paus.innerText="| |";
    }
})
document.getElementById('next').addEventListener('click',()=>{
    if (sindex>2) {
        sindex=0;
    }
    else{
        sindex=sindex+1;
        put=songs[sindex].filePath;
        console.log(put);
        audiooo.src=put;
        console.log(audiooo.src);
        audiooo.currentTime=0;
        audiooo.play();
        paus.innerText="| |";
    }
})