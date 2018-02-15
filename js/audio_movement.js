import { COLORS } from './color_controller';

window.onload = function() {

  let file = document.getElementById("thefile");
  let audio = document.getElementById("audio");

  file.onchange = function() {
    let files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
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
    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect(x, x, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i ++) {
      barHeight = dataArray[i];


      let gradient = canvasCtx.createLinearGradient(0, 0, 3000, 0);
      gradient.addColorStop(0, COLORS.color1);
      gradient.addColorStop(0.23, COLORS.color2);
      gradient.addColorStop(0.35, COLORS.color3);
      gradient.addColorStop(0.6, COLORS.color4);



      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, HEIGHT-barHeight, barWidth, barHeight);
      canvasCtx.imageSmoothingEnabled = false;


      x += barWidth;
    }
  }
  audio.play();
  render();
};
