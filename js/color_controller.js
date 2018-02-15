const COLORCHOICE = {
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
  color32: "#8a6f30",
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
let setcolor5 = document.getElementById("setcolor5");
let setcolor6 = document.getElementById("setcolor6");
let setcolor7 = document.getElementById("setcolor7");
let setcolor8 = document.getElementById("setcolor8");
let setcolor9 = document.getElementById("setcolor9");
let setcolor10 = document.getElementById("setcolor10");
let setcolor11 = document.getElementById("setcolor11");
let setcolor12 = document.getElementById("setcolor12");
let setcolor13 = document.getElementById("setcolor13");
let setcolor14 = document.getElementById("setcolor14");
let setcolor15 = document.getElementById("setcolor15");
let setcolor16 = document.getElementById("setcolor16");
let setcolor17 = document.getElementById("setcolor17");
let setcolor18 = document.getElementById("setcolor18");
let setcolor19 = document.getElementById("setcolor19");
let setcolor20 = document.getElementById("setcolor20");
let setcolor21 = document.getElementById("setcolor21");
let setcolor22 = document.getElementById("setcolor22");
let setcolor23 = document.getElementById("setcolor23");
let setcolor24 = document.getElementById("setcolor24");
let setcolor25 = document.getElementById("setcolor25");

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
  COLORS[`color${gradientnum}`] = COLORCHOICE.color2;
});

setcolor3.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color3;
});

setcolor4.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color4;
});

setcolor5.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color5;
});

setcolor6.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color6;
});

setcolor7.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color7;
});

setcolor8.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color8;
});

setcolor9.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color9;
});

setcolor10.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color10;
});

setcolor11.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color11;
});

setcolor12.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color12;
});

setcolor13.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color13;
});

setcolor14.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color14;
});

setcolor15.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color15;
});

setcolor16.addEventListener("click", function(){
  COLORS[`color${gradientnum}`] = COLORCHOICE.color16;
});
