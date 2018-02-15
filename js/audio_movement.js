import { COLORS } from './color_controller';

window.onload = function() {

  let file = document.getElementById("thefile");
  let audio = document.getElementById("audio");
  audio.src = './test.mp3';
  audio.crossOrigin = 'anonymous';


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
    canvasCtx.fillStyle = "white";
    canvasCtx.fillRect(x, x, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i ++) {
      barHeight = dataArray[i] * 1.2;


      let gradient = canvasCtx.createLinearGradient(0, 0, 0, 2000);
      gradient.addColorStop(0, COLORS.color1);
      gradient.addColorStop(0.25, COLORS.color2);
      gradient.addColorStop(0.5, COLORS.color3);
      gradient.addColorStop(0.3, COLORS.color4);



      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, HEIGHT-barHeight, barWidth, barHeight);
      canvasCtx.imageSmoothingEnabled = false;


      x += barWidth + 8;
    }
  }
  audio.play();
  render();
};
