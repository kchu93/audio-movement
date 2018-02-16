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
  audio.src = './test.mp3';
  // audio.crossOrigin = 'anonymous';


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
    canvasCtx.fillStyle = "white";
    canvasCtx.fillRect(x, x, WIDTH, HEIGHT);

    for (var i = 0; i < bufferLength; i++) {
      barHeight = dataArray[i] * 1.2;

      var gradient = canvasCtx.createLinearGradient(0, 0, 0, 2000);
      gradient.addColorStop(0, _color_controller.COLORS.color1);
      gradient.addColorStop(0.25, _color_controller.COLORS.color2);
      gradient.addColorStop(0.5, _color_controller.COLORS.color3);
      gradient.addColorStop(0.3, _color_controller.COLORS.color4);

      canvasCtx.fillStyle = gradient;
      canvasCtx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight);
      canvasCtx.imageSmoothingEnabled = false;

      x += barWidth + 8;
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
  color1: "#F4F6F7",
  color2: "#ECF0F1",
  color3: "#D98880",
  color4: "#C0392B",
  color5: "#FECCCC",
  color6: "#feb0b0",
  color7: "#C39BD3",
  color8: "#9B59B6",

  color9: "#BB8FCE",
  color10: "#8E44AD",
  color11: "#7FB3D5",
  color12: "#2980B9",
  color13: "#85C1E9",
  color14: "#3498DB",
  color15: "#76D7C4",
  color16: "#1ABC9C",

  color17: "#73C6B6",
  color18: "#16A085",
  color19: "#7DCEA0",
  color20: "#27AE60",
  color21: "#82E0AA",
  color22: "#2ECC71",
  color23: "#F7DC6F",
  color24: "#F1C40F",

  color25: "#F8C471",
  color26: "#F39C12",
  color27: "#F0B27A",
  color28: "#E67E22",
  color29: "#E59866",
  color30: "#D35400",
  color31: "#D7DBDD",
  color32: "#BDC3C7",

  color33: "#BFC9CA",
  color34: "#95A5A6",
  color35: "#B2BABB",
  color36: "#7F8C8D",
  color37: "#85929E",
  color38: "#34495E",
  color39: "#212F3D",
  color40: "#17202A"
};

//Menu drop down
var dropDownMenu = document.getElementById("drop-down-menu");
var dropDownContent = document.getElementById("drop-down-content");

dropDownMenu.addEventListener("click", function () {
  if (dropDownContent.classList.contains("drop-down-show")) {
    dropDownContent.classList.remove("drop-down-show");
  } else {
    dropDownContent.classList.add("drop-down-show");
  }
});

// Color setter
var COLORS = exports.COLORS = {
  color1: "#FEF7F7",
  color2: "#FEDBDB",
  color3: "#FEB7B7",
  color4: "#FEF7F7"
};

var gradientnum = 1;
var currentGradient = document.getElementById("gradient" + gradientnum);

var gradient1 = document.getElementById("gradient1");
var gradient2 = document.getElementById("gradient2");
var gradient3 = document.getElementById("gradient3");
var gradient4 = document.getElementById("gradient4");
var gradientAll = document.getElementById("gradientAll");

var colorreset = document.getElementById("colorreset");
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
var setcolor26 = document.getElementById("setcolor26");
var setcolor27 = document.getElementById("setcolor27");
var setcolor28 = document.getElementById("setcolor28");
var setcolor29 = document.getElementById("setcolor29");
var setcolor30 = document.getElementById("setcolor30");
var setcolor31 = document.getElementById("setcolor31");
var setcolor32 = document.getElementById("setcolor32");
var setcolor33 = document.getElementById("setcolor33");
var setcolor34 = document.getElementById("setcolor34");
var setcolor35 = document.getElementById("setcolor35");
var setcolor36 = document.getElementById("setcolor36");
var setcolor37 = document.getElementById("setcolor37");
var setcolor38 = document.getElementById("setcolor38");
var setcolor39 = document.getElementById("setcolor39");
var setcolor40 = document.getElementById("setcolor40");

gradient1.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 1;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});
gradient2.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 2;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});
gradient3.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 3;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});
gradient4.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 4;
  currentGradient = document.getElementById("gradient" + gradientnum);
  currentGradient.classList.add("selected");
});

gradientAll.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  gradientnum = 5;
  gradientAll.classList.add("selected");
});

colorreset.addEventListener("click", function () {
  currentGradient.classList.remove("selected");
  COLORS.color1 = "#FEF7F7";
  COLORS.color2 = "#FEDBDB";
  COLORS.color3 = "#FEB7B7";
  COLORS.color4 = "#FEF7F7";
});

function setColor(color) {
  console.log(gradientnum);
  console.log(color);
  if (gradientnum === 5) {
    COLORS['color1'] = color;
    COLORS['color2'] = color;
    COLORS['color3'] = color;
    COLORS['color4'] = color;
  } else {
    COLORS["color" + gradientnum] = color;
  }
}

setcolor1.addEventListener("click", function () {
  setColor(COLORCHOICE.color1);
});

setcolor2.addEventListener("click", function () {
  setColor(COLORCHOICE.color2);
});

setcolor3.addEventListener("click", function () {
  setColor(COLORCHOICE.color3);
});

setcolor4.addEventListener("click", function () {
  setColor(COLORCHOICE.color4);
});

setcolor5.addEventListener("click", function () {
  setColor(COLORCHOICE.color5);
});

setcolor6.addEventListener("click", function () {
  setColor(COLORCHOICE.color6);
});

setcolor7.addEventListener("click", function () {
  setColor(COLORCHOICE.color7);
});

setcolor8.addEventListener("click", function () {
  setColor(COLORCHOICE.color8);
});

setcolor9.addEventListener("click", function () {
  setColor(COLORCHOICE.color9);
});

setcolor10.addEventListener("click", function () {
  setColor(COLORCHOICE.color10);
});

setcolor11.addEventListener("click", function () {
  setColor(COLORCHOICE.color11);
});

setcolor12.addEventListener("click", function () {
  setColor(COLORCHOICE.color12);
});

setcolor13.addEventListener("click", function () {
  setColor(COLORCHOICE.color13);
});

setcolor14.addEventListener("click", function () {
  setColor(COLORCHOICE.color14);
});

setcolor15.addEventListener("click", function () {
  setColor(COLORCHOICE.color15);
});

setcolor16.addEventListener("click", function () {
  setColor(COLORCHOICE.color16);
});

setcolor17.addEventListener("click", function () {
  setColor(COLORCHOICE.color17);
});

setcolor18.addEventListener("click", function () {
  setColor(COLORCHOICE.color18);
});

setcolor19.addEventListener("click", function () {
  setColor(COLORCHOICE.color19);
});

setcolor20.addEventListener("click", function () {
  setColor(COLORCHOICE.color20);
});

setcolor21.addEventListener("click", function () {
  setColor(COLORCHOICE.color21);
});

setcolor22.addEventListener("click", function () {
  setColor(COLORCHOICE.color22);
});

setcolor23.addEventListener("click", function () {
  setColor(COLORCHOICE.color23);
});

setcolor24.addEventListener("click", function () {
  setColor(COLORCHOICE.color24);
});

setcolor25.addEventListener("click", function () {
  setColor(COLORCHOICE.color25);
});

setcolor26.addEventListener("click", function () {
  setColor(COLORCHOICE.color26);
});

setcolor27.addEventListener("click", function () {
  setColor(COLORCHOICE.color27);
});

setcolor28.addEventListener("click", function () {
  setColor(COLORCHOICE.color28);
});

setcolor29.addEventListener("click", function () {
  setColor(COLORCHOICE.color29);
});

setcolor30.addEventListener("click", function () {
  setColor(COLORCHOICE.color30);
});

setcolor31.addEventListener("click", function () {
  setColor(COLORCHOICE.color31);
});

setcolor32.addEventListener("click", function () {
  setColor(COLORCHOICE.color32);
});

setcolor33.addEventListener("click", function () {
  setColor(COLORCHOICE.color33);
});

setcolor34.addEventListener("click", function () {
  setColor(COLORCHOICE.color34);
});

setcolor35.addEventListener("click", function () {
  setColor(COLORCHOICE.color35);
});

setcolor36.addEventListener("click", function () {
  setColor(COLORCHOICE.color36);
});

setcolor37.addEventListener("click", function () {
  setColor(COLORCHOICE.color37);
});

setcolor38.addEventListener("click", function () {
  setColor(COLORCHOICE.color38);
});

setcolor39.addEventListener("click", function () {
  setColor(COLORCHOICE.color39);
});

setcolor40.addEventListener("click", function () {
  setColor(COLORCHOICE.color40);
});

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map