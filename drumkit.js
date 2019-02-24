function Music(e){
const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key=document.querySelector(`.key[data-key="${e.keyCode}"]`);

if(!audio) return;//for not getting null
audio.currentTime=0;//pushing a lot tımes and get response
key.classList.add("playing");
console.log(key.classList)
audio.play();
}
function removeTransition(e){
    this.classList.remove("playing")

}
const keys=Array.from(document.querySelectorAll(".key"));
keys.forEach(key => key.addEventListener("transitionend",removeTransition));

window.addEventListener("keydown",Music);

