const COLORCHOICE = {
  color1: "#FFF5F7",
  color2: "#FCE7EF",
  color3: "#F9DAEB",
  color4: "#F6CEEB",
  color5: "#F3C1EE",
  color6: "#EDB5F1",
  color7: "#DEA9EE",
  color8: "#CC9DEB",
  color9: "#B791E8",
  color10: "#9F86E5",
  color11: "#847BE3",
  color12: "#7079E0",
  color13: "#6584DD",
  color14: "#5B91DA",
  color15: "#51A1D8",
  color16: "#47B4D5",
  color17: "#3DC9D2",
  color18: "#34CFBE",
  color19: "#2ACC9F",
  color20: "#21CA7E",
  color21: "#18C75A",
  color22: "#10C435",
  color23: "#08C10E",
  color24: "#19BF00",
};


let gradientnum = 1;
let currentGradient = document.getElementById(`gradient${gradientnum}`);

export const COLORS = {
  color1: "grey",
  color2: "grey",
  color3: "grey",
  color4: "grey"
};

let reset = document.getElementById("reset");
let setcolor1 = document.getElementById("setcolor1");
let setcolor2 = document.getElementById("setcolor2");
let setcolor3 = document.getElementById("setcolor3");
let setcolor4 = document.getElementById("setcolor4");

let gradient1 = document.getElementById("gradient1");
let gradient2 = document.getElementById("gradient2");
let gradient3 = document.getElementById("gradient3");
let gradient4 = document.getElementById("gradient4");

gradient1.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientnum = 1;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});
gradient2.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientnum = 2;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});
gradient3.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientnum = 3;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});
gradient4.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientnum = 4;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});

setcolor1.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color1;
});

setcolor2.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color12;
});

setcolor3.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color23;
});

setcolor4.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color24;
});

setcolor5.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color24;
});
