/************
 * N.B. The ghosts are SVGs, so it's 'fill', not 'color' you need to change
 *************/
// GET BY ID - 1.Turn the one with the id 'first_ghost' orange

// var domRef = document.getElementById("first_ghost");

document.getElementById("first_ghost").style.fill = "orange";

// console.log(domRef);

// GET BY CLASSNAME - 2.Turn the ones with the class of 'second_wave' blue
const secWav = document.getElementsByClassName("second_wave");
for (const svg of secWav) {
  svg.style.fill = "blue";
}

// GET AREA, DRILL DOWN using GET BY TAG NAME
//3. Select Area 51, then select the svgs inside it and turn them green
const area51 = document.getElementById("area-51");
// console.log("area51");

const ghosts = area51.getElementsByTagName("svg");
//   area51.getElementsByClassName("mid") && area51.getElementById("area-51");
for (const ghost of ghosts) {
  ghost.style.fill = "green";
}

/* querySelector nth-child:
4. Using querySelector (starting at the document level) and an nth-child-type css selector, 
make the penultimate ghost in area 51 have a red stroke with a strokeWidth of 15px */
const middleGhost = document.querySelector("#area-51 svg:nth-last-child(2)");

middleGhost.style.stroke = "red";
middleGhost.style.strokeWidth = "15px";

// 5. from the last child, select the div immediately above the ghost and make its border '5px dashed'

middleGhost.closest("div").style.border = "5px dashed";

// 6.Using querySelectorAll, select all the ghosts in the div which has an id of area-50 and turn them red

const ghosts2 = document.querySelectorAll("#area-50 svg");

for (const ghost2 of ghosts2) {
  ghost2.style.fill = "red";
}

//https://codepen.io/Letwah/pen/VwEmRKR
