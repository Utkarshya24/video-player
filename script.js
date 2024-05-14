const videoPlayer = document.querySelector('.video_player');
const minimizeVideo = document.querySelector('.picture-in-picture');
const Range = document.querySelector('.range-field');
const bacword = document.querySelector('.left-arrow');
const forward = document.querySelector('.right-arrow');
const play = document.querySelector('.play-button-arrowhead');
const share = document.querySelector('.share');
const caption = document.querySelector('.closed-caption-logo');
const setting = document.querySelector('.settings');
const rectangle = document.querySelector('.rectangle');
const fullScreen = document.querySelector('.fullscreen');
const button = document.querySelector('.button');
const video = document.querySelector('.video_controllers');

document.addEventListener("keydown", e => {
  const tagName = document.activeElement.tagName.toLowerCase()

  if (tagName === "input") return

  switch (e.key.toLowerCase()) {
    case " ":
      if (tagName === "button") return
    case "k":
      togglePlay()
      break
    case "f":
      toggleFullScreenMode()
      break
    case "t":
      toggleTheaterMode()
      break
    case "i":
      toggleMiniPlayerMode()
      break
    }
  });   






Range.addEventListener('click', ()=>{
  console.log('button clicked');
});

minimizeVideo.addEventListener('click', ()=>{
  console.log('button clicked');
  if (video.classList.contains("mini-player")) {
    document.exitPictureInPicture()
  } else {
    video.requestPictureInPicture()
  }
});

bacword.addEventListener('click', ()=>{
  console.log('button clicked');
});

forward.addEventListener('click', ()=>{
  console.log('button clicked');
});

play.addEventListener('click', ()=>{
  console.log('button clicked');
  video.paused ? video.play():video.pause()
});

share.addEventListener('click', ()=>{
  console.log('button clicked');
});

caption.addEventListener('click', ()=>{
  console.log('button clicked');
});

setting.addEventListener('click', ()=>{
  console.log('button clicked');
});

rectangle.addEventListener('click', ()=>{
  console.log('button clicked');
  if(video.classList=="video_controllers"){
    video.classList.remove("video_controllers");
    video.classList.toggle("theater");
  }else {
    video.classList=="video_controllers"
    video.classList.remove("theater");
  }
  
  
});

fullScreen.addEventListener('click', ()=>{
  console.log('button clicked');
  if (document.fullscreenElement == null) {
    video.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
});

button.addEventListener('click', ()=>{
  console.log('button clicked');
});