let canvas: any = document.getElementById('canvas');

let context: CanvasRenderingContext2D = canvas.getContext('2d');

let height: number = document.body.clientHeight;
let width: number = document.body.clientWidth;

let audio: AudioContext = new AudioContext();
let source: AudioBufferSourceNode = audio.createBufferSource();
let gain: GainNode = audio.createGain();
let analyser: AnalyserNode = audio.createAnalyser();

let gainFilled: boolean = false;
let gainSmoothId: boolean = false;

let loading = false;

const gainUp: number = 0.0005;
const gainMin: number = 0.001;
const gainMax: number = 0.6;

Math.easeInOutQuad = function(t: number, b: number, c: number, d: number): number {
	t /= d/2;
	if (t < 1) return c/2*t*t + b;
	t--;
	return -c/2 * (t*(t-2) - 1) + b;
};

(function() {
  let songs: string[] = [
    '/s/1yvldt6bajts0zj/Wolf%20Drawn.mp3',
    '/s/m4t90uc6q81uyrk/Ares.mp3', // 178
    '/s/sxbiivdww49qvza/Siren.mp3',
    '/s/8lcpcn7e13jslpn/Bury%20Them%20Bones.mp3',
    's/5auv6lngzcmny59/Old%20Devil.mp3',
    '/s/ayq7qkwo3w9557n/First%20Snow.mp3',
    '/s/1x2u7bwpkyk530s/1474622530.mp3',
    '/s/o9gtghn7jxmybs6/Tilka%20-%20Missing%20Home%20%28feat.%20Always%20Never%29.mp3' // 200
  ];
  let request: XMLHttpRequest = new XMLHttpRequest();

  request.open('GET', `https://dl.dropboxusercontent.com${songs[0]}`, true);

  request.responseType = 'arraybuffer';

  request.onload = function onload() {
    let audioData: any = request.response;

    return audio.decodeAudioData(audioData, function(buffer) {
      source.buffer = buffer;
      source.connect(analyser);
      analyser.connect(gain);
      gain.connect(audio.destination);
      gain.gain.value = gainMin;
      gainSmoothId = setInterval(function() {
        gain.gain.value += gainUp;
        if (gain.gain.value >= gainMax) {
          clearInterval(gainSmoothId);
        }
      }, 10)
      source.start(0, 50);
      loading = false;
    });
  };
  request.send();
  loading = true;
} ());

const nodes: number = 100;
const gravity = 0.1;
const hats: number[] = [];
const gravs: number[] = [];

function renderAudio(): void {
  let averageValue: number = 0;
  let alpha: number;
  let values: Uint8Array = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(values);

  const meters: number = values.length;
  const maxNodeWidth: number = Math.ceil(width / nodes);
  const nodesFrameWidth: number = nodes * maxNodeWidth;
  const maxValue: number = Math.max.apply(null, values);
  const halfValue: number = ~~(height / 2);
  const offset: number = ~~((width - nodesFrameWidth) / 2);
  const halfMaxNodeWidth: number = ~~(maxNodeWidth / 2);

  values.forEach(function(value: number, index: number, array: Uint16Array) {
    hats.push(0);
    gravs.push(0);

    if (index < 7) return;
    averageValue += value;
  });

  averageValue /= values.length;

  for (let i = 0; i < nodes; i++) {
    let iOffset: number = i + 6;
    let value: number = values[i + 6];
    let iOffsetX: number = i * maxNodeWidth;

    alpha = (gain.gain.value / gainMax) * (Math.pow(value / maxValue, 2));

    value = (gain.gain.value / gainMax) * ((value / maxValue) * (halfValue - (maxNodeWidth / 2 + 2)));

    if (value - 4 > hats[iOffset]) {
      hats[iOffset] = value - 4;
      gravs[iOffset] = 0;
    } else {
      gravs[iOffset] += gravity;
      hats[iOffset] -= gravs[iOffset];
    }

    context.fillStyle = `rgba(0, 255, 255, ${alpha * 0.8})`;

    context.fillRect(
      offset + iOffsetX,
      halfValue + 1,
      maxNodeWidth,
      ~~(hats[iOffset] + halfMaxNodeWidth)
    );

    context.fillStyle = `rgba(255, 0, 255, ${alpha * 0.8})`;

    context.fillRect(
      offset + iOffsetX,
      halfValue - 1,
      maxNodeWidth,
      ~~(-hats[iOffset] - halfMaxNodeWidth)
    );

    context.fillStyle = `rgba(255, 0, 255, ${alpha * 0.95})`;

    context.fillRect(
      offset + iOffsetX,
      halfValue + 1 - hats[iOffset] - halfMaxNodeWidth - 1,
      maxNodeWidth,
      -2
    );

    context.fillStyle = `rgba(0, 255, 255, ${alpha * 0.95})`;

    context.fillRect(
      offset + maxNodeWidth * i,
      halfValue - 1 + hats[iOffset] + halfMaxNodeWidth + 1,
      maxNodeWidth,
      2
    );

    context.fillStyle = '#000';

    context.fillRect(
      offset + iOffsetX,
      halfValue - 1,
      maxNodeWidth + 2,
      ~~(value + halfMaxNodeWidth + 1)
    );

    context.fillRect(
      offset + iOffsetX,
      halfValue + 1,
      maxNodeWidth + 2,
      ~~(-value - halfMaxNodeWidth - 1)
    );

    context.fillStyle = `rgba(255, 0, 255, ${alpha * 0.85})`;

    context.fillRect(
      offset + iOffsetX + 2,
      halfValue + 2 + halfMaxNodeWidth,
      maxNodeWidth - 2,
      ~~(value - 4)
    );

    context.fillStyle = `rgba(0, 255, 255, ${alpha * 0.85})`;

    context.fillRect(
      offset + iOffsetX + 2,
      halfValue - halfMaxNodeWidth  - 2,
      maxNodeWidth - 2,
      ~~(-value + 4)
    );
  }

  context.fillStyle = `rgba(255, 255, 255, ${alpha * 1.15})`;

  context.fillRect(
    offset + 2,
    halfValue - ~~(maxNodeWidth / 2),
    maxNodeWidth * nodes - 2,
    maxNodeWidth
  );
}

const frameTimes: number[] = [];
var last: number;

function add(a, b) {
  return a + b;
}

function renderFPS(array) {
  let total:number = array.reduce(add, 0);
  total = 1000 / total;
  total *= 60;

  context.font = 'bold 24px Arial';
  context.fillStyle = 'white'
  context.lineWidth = 4;
  context.textBaseline = 'top';
  context.strokeText(`${~~total}`, 5, 5);
  context.fillText(`${~~total}`, 5, 5);
}

function step(timestamp: any) {
  if (frameTimes.length === 60)
    frameTimes.shift();

  frameTimes.push(timestamp - (last || timestamp));

  last = timestamp;

  context.clearRect(0, 0, width, height);
  context.fillStyle = 'black';
  context.fillRect(0, 0, width, height);
  renderAudio();
  renderFPS(frameTimes);

  if (loading) {
    context.font = 'bold 24px Arial';
    context.fillStyle = 'white'
    context.lineWidth = 4;
    context.textBaseline = 'middle';
    context.strokeText('LOADING...', width / 2, height / 2);
    context.fillText('LOADING...', width / 2, height / 2);
  }

  window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);

window.onload = function() {
  height = canvas.height = document.body.clientHeight;
  width = canvas.width = document.body.clientWidth;
}

window.onresize = function() {
  height = canvas.height = document.body.clientHeight;
  width = canvas.width = document.body.clientWidth;
};
