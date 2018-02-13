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
  analyser.fftsize = 256;

  let bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength);
  let dataArray = new Uint8Array(128);

  let canvas = document.getElementById("canvas");
  let canvasCtx = canvas.getContext("2d");
  canvas.width = 1800;
  canvas.height = 700;
  let WIDTH = canvas.width;
  let HEIGHT = canvas.height;
  let barWidth = (WIDTH / bufferLength) * 3;
  let barHeight;
  let x = 0;



  function render(){
    requestAnimationFrame(render);
      x = 0;

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 2;


      let lingrad = canvasCtx.createLinearGradient(0, 0, 0, 1200);
      lingrad.addColorStop(0, '#FFEEFC');
      lingrad.addColorStop(0.3, '#B5FFE3');
      lingrad.addColorStop(0.6, '#FFD8B1');
      lingrad.addColorStop(0.9, '#F1C8FF');



      canvasCtx.fillStyle = lingrad;
      canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);

      canvasCtx.lineWidth = 2;

      x += barWidth + 10;
    }
  }
  audio.play();
  render();
};
