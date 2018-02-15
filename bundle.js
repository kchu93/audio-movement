/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _color_controller = __webpack_require__(1);

window.onload = function () {

  var file = document.getElementById("thefile");
  var audio = document.getElementById("audio");

  file.onchange = function () {
    var files = this.files;
    audio.src = URL.createObjectURL(files[0]);
    audio.load();
    audio.play();
  };

  var audioCtx = new AudioContext();
  var source = audioCtx.createMediaElementSource(audio);
  var analyser = audioCtx.createAnalyser();

  source.connect(analyser);
  analyser.connect(audioCtx.destination);
  analyser.fftsize = 2048;

  var bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength);
  var dataArray = new Uint8Array(256);

  var canvas = document.getElementById("canvas");
  var canvasCtx = canvas.getContext("2d");
  canvas.width = window.innerWidth;
  canvas.height = 600;
  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;
  var barWidth = WIDTH / bufferLength * 8;
  var barHeight = void 0;
  var x = 0;

  function render() {
    requestAnimationFrame(render);
    x = 0;

    analyser.getByteFrequencyData(dataArray);

    canvasCtx.clearRect(0, 0, WIDTH, HEIGHT);
    canvasCtx.fillStyle = "black";
    canvasCtx.fillRect(x, x, WIDTH, HEIGHT);

    for (var i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i];

      var gradient = canvasCtx.createLinearGradient(0, 0, 3000, 0);
      gradient.addColorStop(0, _color_controller.COLORS.color1);
      gradient.addColorStop(0.23, _color_controller.COLORS.color2);
      gradient.addColorStop(0.35, _color_controller.COLORS.color3);
      gradient.addColorStop(0.6, _color_controller.COLORS.color4);

      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      canvasCtx.imageSmoothingEnabled = false;

      x += barWidth;
    }
  }
  audio.play();
  render();
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var COLORCHOICE = {
  color1: "#212021",
  color2: "#222034",
  color3: "#45283c",
  color4: "#663931",
  color5: "#8f563b",
  color6: "#df7126",
  color7: "#d9a066",
  color8: "#eec39a",

  color9: "#fbf236",
  color10: "#99e550",
  color11: "#6abe30",
  color12: "#37946e",
  color13: "#4b692f",
  color14: "#524b24",
  color15: "#323c39",
  color16: "#3f3f74",

  color17: "#306082",
  color18: "#5b6ee1",
  color19: "#639bff",
  color20: "#5fcde4",
  color21: "#cbdbfc",
  color22: "#ffffff",
  color23: "#9badb7",
  color24: "#847e87",

  color25: "#696a6a",
  color26: "#595652",
  color27: "#76428a",
  color28: "#ac3232",
  color29: "#d95763",
  color30: "#d77bba",
  color31: "#8f974a",
  color32: "#8a6f30"
};

var gradientnum = 1;
var currentGradient = document.getElementById("gradient" + gradientnum);

var COLORS = exports.COLORS = {
  color1: "grey",
  color2: "grey",
  color3: "grey",
  color4: "grey"
};

var reset = document.getElementById("reset");
var setcolor1 = document.getElementById("setcolor1");
var setcolor2 = document.getElementById("setcolor2");
var setcolor3 = document.getElementById("setcolor3");
var setcolor4 = document.getElementById("setcolor4");
var setcolor5 = document.getElementById("setcolor5");
var setcolor6 = document.getElementById("setcolor6");
var setcolor7 = document.getElementById("setcolor7");
var setcolor8 = document.getElementById("setcolor8");
var setcolor9 = document.getElementById("setcolor9");
var setcolor10 = document.getElementById("setcolor10");
var setcolor11 = document.getElementById("setcolor11");
var setcolor12 = document.getElementById("setcolor12");
var setcolor13 = document.getElementById("setcolor13");
var setcolor14 = document.getElementById("setcolor14");
var setcolor15 = document.getElementById("setcolor15");
var setcolor16 = document.getElementById("setcolor16");
var setcolor17 = document.getElementById("setcolor17");
var setcolor18 = document.getElementById("setcolor18");
var setcolor19 = document.getElementById("setcolor19");
var setcolor20 = document.getElementById("setcolor20");
var setcolor21 = document.getElementById("setcolor21");
var setcolor22 = document.getElementById("setcolor22");
var setcolor23 = document.getElementById("setcolor23");
var setcolor24 = document.getElementById("setcolor24");
var setcolor25 = document.getElementById("setcolor25");

var gradient1 = document.getElementById("gradient1");
var gradient2 = document.getElementById("gradient2");
var gradient3 = document.getElementById("gradient3");
var gradient4 = document.getElementById("gradient4");

gradient1.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientnum = 1;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});
gradient2.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientnum = 2;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});
gradient3.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientnum = 3;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});
gradient4.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientnum = 4;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});

setcolor1.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color1;
});

setcolor2.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color2;
});

setcolor3.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color3;
});

setcolor4.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color4;
});

setcolor5.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color5;
});

setcolor6.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color6;
});

setcolor7.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color7;
});

setcolor8.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color8;
});

setcolor9.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color9;
});

setcolor10.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color10;
});

setcolor11.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color11;
});

setcolor12.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color12;
});

setcolor13.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color13;
});

setcolor14.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color14;
});

setcolor15.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color15;
});

setcolor16.addEventListener("click", function () {
  COLORS["color" + gradientnum] = COLORCHOICE.color16;
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map