import { COLORS } from './color_controller';

window.onload = function() {

  let file = document.getElementById("thefile");
  let audio = document.getElementById("audio");
  audio.src = './Miles_Davis.mp3';
  audio.crossOrigin = 'anonymous';


  file.onchange = function() {
    let files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
  };

  let playButton = document.getElementById("play-button");
  let pauseButton = document.getElementById("pause-button");
  let progressBar = document.getElementById("seekbar");
  let volumeDown = document.getElementById("volume-down-button");
  let volumeUp = document.getElementById("volume-up-button");

  playButton.addEventListener("click", function(){
    audio.play();
  });

  pauseButton.addEventListener("click", function(){
    audio.pause();
  });

  volumeDown.addEventListener("click", function(){
    audio.volume -= .1;
  });

  volumeUp.addEventListener("click", function(){
    audio.volume += .1;
  });




  audio.ontimeupdate = function updateProgress() {
    let player = document.getElementById("audio");
    progressBar.value = (player.currentTime / player.duration);
  };



  let audioCtx = new AudioContext();
  let source = audioCtx.createMediaElementSource(audio);
  let analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftsize = 2048;

  let bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength);
  let dataArray = new Uint8Array(256);

  let canvas = document.getElementById("canvas");
  let canvasCtx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 600;
  let WIDTH = canvas.width;
  let HEIGHT = canvas.height;
  let barWidth = (WIDTH / bufferLength) * 8;
  let barHeight;
  let x = 0;

  function render(){
    requestAnimationFrame(render);
      x = 0;

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0,0,WIDTH,HEIGHT);
    canvasCtx.fillStyle = "white";
    canvasCtx.fillRect(x, x, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i ++) {
      barHeight = dataArray[i];


      let gradient = canvasCtx.createLinearGradient(0, 0, 0, 2000);
      gradient.addColorStop(0, COLORS.color1);
      gradient.addColorStop(0.25, COLORS.color2);
      gradient.addColorStop(0.5, COLORS.color3);
      gradient.addColorStop(0.3, COLORS.color4);



      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, HEIGHT-barHeight, barWidth, barHeight);
      canvasCtx.imageSmoothingEnabled = false;


      x += barWidth + 5;
    }
  }
  audio.pause();
  render();
};
