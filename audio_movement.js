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
  canvas.width = window.innerWidth;
  canvas.height = 600;
  let WIDTH = canvas.width;
  let HEIGHT = canvas.height;
  let barWidth = (WIDTH / bufferLength) * 8;
  let barHeight;
  let x = 0;


  let reset = document.getElementById("reset");
  let setcolor1 = document.getElementById("setcolor1");
  let setcolor2 = document.getElementById("setcolor2");
  let setcolor3 = document.getElementById("setcolor3");
  let setcolor4 = document.getElementById("setcolor4");

  let color1 = "black";
  let color2 = "black";
  let color3 = "black";
  let color4 = "black";

  setcolor1.addEventListener("click", function(){
    color1 = "#FFEEFC";
  });

  setcolor2.addEventListener("click", function(){
    color2 = "#B5FFE3";
  });

  setcolor3.addEventListener("click", function(){
    color3 = "#FFD8B1";
  });

  setcolor4.addEventListener("click", function(){
    color4 = "#C9DEFF";
  });

  reset.addEventListener("click", function(){
    color1 = "black";
    color2 = "black";
    color3 = "black";
    color4 = "black";
  });

  function render(){
    requestAnimationFrame(render);
      x = 0;

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0,0,WIDTH,HEIGHT);
    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect(x, x, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i ++) {
      barHeight = dataArray[i] * 1.5;


      let gradient = canvasCtx.createLinearGradient(0, 0, 3000, 0);
      gradient.addColorStop(0, color1);
      gradient.addColorStop(0.25, color2);
      gradient.addColorStop(0.35, color3);
      gradient.addColorStop(0.7, color4);



      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x * 2, HEIGHT-barHeight, barWidth, barHeight);
      canvasCtx.imageSmoothingEnabled = false;

      canvasCtx.lineWidth = 10;

      x += barWidth;
    }
  }
  audio.play();
  render();
};
