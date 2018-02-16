const COLORCHOICE = {
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
  color40: "#17202A",
};

//Menu drop down
let dropDownMenu = document.getElementById("drop-down-menu");
let dropDownContent = document.getElementById("drop-down-content");

dropDownMenu.addEventListener("click", function(){
  if (dropDownContent.classList.contains("drop-down-show")){
    dropDownContent.classList.remove("drop-down-show");
  } else {
    dropDownContent.classList.add("drop-down-show");
  }
});


// Color setter
export const COLORS = {
  color1: "#FEF7F7",
  color2: "#FEDBDB",
  color3: "#FEB7B7",
  color4: "#FEF7F7"
};

let gradientnum = 1;
let currentGradient = document.getElementById(`gradient${gradientnum}`);

let gradient1 = document.getElementById("gradient1");
let gradient2 = document.getElementById("gradient2");
let gradient3 = document.getElementById("gradient3");
let gradient4 = document.getElementById("gradient4");
let gradientAll = document.getElementById("gradientAll");

let colorreset = document.getElementById("colorreset");
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
let setcolor26 = document.getElementById("setcolor26");
let setcolor27 = document.getElementById("setcolor27");
let setcolor28 = document.getElementById("setcolor28");
let setcolor29 = document.getElementById("setcolor29");
let setcolor30 = document.getElementById("setcolor30");
let setcolor31 = document.getElementById("setcolor31");
let setcolor32 = document.getElementById("setcolor32");
let setcolor33 = document.getElementById("setcolor33");
let setcolor34 = document.getElementById("setcolor34");
let setcolor35 = document.getElementById("setcolor35");
let setcolor36 = document.getElementById("setcolor36");
let setcolor37 = document.getElementById("setcolor37");
let setcolor38 = document.getElementById("setcolor38");
let setcolor39 = document.getElementById("setcolor39");
let setcolor40 = document.getElementById("setcolor40");


gradient1.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 1;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});
gradient2.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 2;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});
gradient3.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 3;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});
gradient4.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientAll.classList.remove("selected");
  gradientnum = 4;
  currentGradient = document.getElementById(`gradient${gradientnum}`);
  currentGradient.classList.add("selected");
});

gradientAll.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  gradientnum = 5;
  gradientAll.classList.add("selected");
});


colorreset.addEventListener("click", function(){
  currentGradient.classList.remove("selected");
  COLORS.color1 = "#FEF7F7";
  COLORS.color2 = "#FEDBDB";
  COLORS.color3 = "#FEB7B7";
  COLORS.color4 = "#FEF7F7";
});


function setColor(color){
  console.log(gradientnum);
  console.log(color);
  if (gradientnum === 5){
    COLORS['color1'] = color;
    COLORS['color2'] = color;
    COLORS['color3'] = color;
    COLORS['color4'] = color;
  } else {
  COLORS[`color${gradientnum}`] = color;
  }
}


setcolor1.addEventListener("click", function(){
  setColor(COLORCHOICE.color1);
});

setcolor2.addEventListener("click", function(){
  setColor(COLORCHOICE.color2);
});

setcolor3.addEventListener("click", function(){
  setColor(COLORCHOICE.color3);
});

setcolor4.addEventListener("click", function(){
  setColor(COLORCHOICE.color4);
});

setcolor5.addEventListener("click", function(){
  setColor(COLORCHOICE.color5);
});

setcolor6.addEventListener("click", function(){
  setColor(COLORCHOICE.color6);
});

setcolor7.addEventListener("click", function(){
  setColor(COLORCHOICE.color7);
});

setcolor8.addEventListener("click", function(){
  setColor(COLORCHOICE.color8);
});

setcolor9.addEventListener("click", function(){
  setColor(COLORCHOICE.color9);
});

setcolor10.addEventListener("click", function(){
  setColor(COLORCHOICE.color10);
});

setcolor11.addEventListener("click", function(){
  setColor(COLORCHOICE.color11);
});

setcolor12.addEventListener("click", function(){
  setColor(COLORCHOICE.color12);
});

setcolor13.addEventListener("click", function(){
  setColor(COLORCHOICE.color13);
});

setcolor14.addEventListener("click", function(){
  setColor(COLORCHOICE.color14);
});

setcolor15.addEventListener("click", function(){
  setColor(COLORCHOICE.color15);
});

setcolor16.addEventListener("click", function(){
  setColor(COLORCHOICE.color16);
});



setcolor17.addEventListener("click", function(){
  setColor(COLORCHOICE.color17);
});

setcolor18.addEventListener("click", function(){
  setColor(COLORCHOICE.color18);
});

setcolor19.addEventListener("click", function(){
  setColor(COLORCHOICE.color19);
});

setcolor20.addEventListener("click", function(){
  setColor(COLORCHOICE.color20);
});

setcolor21.addEventListener("click", function(){
  setColor(COLORCHOICE.color21);
});

setcolor22.addEventListener("click", function(){
  setColor(COLORCHOICE.color22);
});

setcolor23.addEventListener("click", function(){
  setColor(COLORCHOICE.color23);
});

setcolor24.addEventListener("click", function(){
  setColor(COLORCHOICE.color24);
});

setcolor25.addEventListener("click", function(){
  setColor(COLORCHOICE.color25);
});

setcolor26.addEventListener("click", function(){
  setColor(COLORCHOICE.color26);
});

setcolor27.addEventListener("click", function(){
  setColor(COLORCHOICE.color27);
});

setcolor28.addEventListener("click", function(){
  setColor(COLORCHOICE.color28);
});

setcolor29.addEventListener("click", function(){
  setColor(COLORCHOICE.color29);
});

setcolor30.addEventListener("click", function(){
  setColor(COLORCHOICE.color30);
});

setcolor31.addEventListener("click", function(){
  setColor(COLORCHOICE.color31);
});

setcolor32.addEventListener("click", function(){
  setColor(COLORCHOICE.color32);
});

setcolor33.addEventListener("click", function(){
  setColor(COLORCHOICE.color33);
});

setcolor34.addEventListener("click", function(){
  setColor(COLORCHOICE.color34);
});

setcolor35.addEventListener("click", function(){
  setColor(COLORCHOICE.color35);
});

setcolor36.addEventListener("click", function(){
  setColor(COLORCHOICE.color36);
});

setcolor37.addEventListener("click", function(){
  setColor(COLORCHOICE.color37);
});

setcolor38.addEventListener("click", function(){
  setColor(COLORCHOICE.color38);
});

setcolor39.addEventListener("click", function(){
  setColor(COLORCHOICE.color39);
});

setcolor40.addEventListener("click", function(){
  setColor(COLORCHOICE.color40);
});
