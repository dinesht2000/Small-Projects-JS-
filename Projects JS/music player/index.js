let progress=document.querySelector("#progress");
let song=document.querySelector("#song");
let ctrl_icon=document.querySelector("#ctrlicon");

song.onloadedmetadata=function(){
    progress.max=song.duration;
    progress.value=song.currentTime;

}
function play_pause(){
    if(ctrl_icon.classList.contains("fa-pause")){
        song.pause();
        ctrl_icon.classList.remove("fa-pause");
        ctrl_icon.classList.add("fa-play");

    }
    else{
        song.play();
        ctrl_icon.classList.add("fa-pause");
        ctrl_icon.classList.remove("fa-play");
    }
}
function back(){
    progress.value=0;
    song.currentTime=0;
}

if(song.play()){
    setInterval(() => {
        progress.value=song.currentTime;
    }, 500);
}
progress.onchange=function(){
    song.play();
    song.currentTime=progress.value;
    ctrl_icon.classList.add("fa-pause");
    ctrl_icon.classList.remove("fa-play");
}

