var audio=document.createElement('audio');
var first=true;
window.addEventListener('mousedown',onmousedown);
function onmousedown(){
if(!first) return;
first=false;
audio.src="song.mp3";
audio.play();
}

