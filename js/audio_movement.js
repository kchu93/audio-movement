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

  let visualHeight = document.getElementById("adjust-visual-height");
  let visualWidth = document.getElementById("adjust-visual-width");
  let barHeightModifier = visualHeight.value / 50;
  let barWidthModifier = visualWidth.value / 20;

  visualHeight.addEventListener("input", function(){
    barHeightModifier = event.currentTarget.value / 20;
  });

  visualWidth.addEventListener("input", function(){
    barWidthModifier = event.currentTarget.value / 10;

  });



  let audioCtx = new AudioContext();
  let source = audioCtx.createMediaElementSource(audio);
  let analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftsize = 256;

  let bufferLength = analyser.frequencyBinCount;
  let dataArray = new Uint8Array(256);

  let canvas = document.getElementById("canvas");
  let canvasCtx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 600;
  let WIDTH = canvas.width;
  let HEIGHT = canvas.height;
  let barWidth = (WIDTH / bufferLength) * 5;
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
      barHeight = dataArray[i] * barHeightModifier;


      let gradient = canvasCtx.createLinearGradient(0, 0, 4000, 0);
      gradient.addColorStop(0.06, COLORS.color1);
      gradient.addColorStop(0.15, COLORS.color2);
      gradient.addColorStop(0.28, COLORS.color3);
      gradient.addColorStop(0.4, COLORS.color4);



      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, HEIGHT-barHeight, barWidth, barHeight);

      x += barWidth + barWidthModifier;
    }
  }
  audio.play();
  render();
};
