function cry() {
  console.log("cry");
}


function sing() {
  console.log("sing");
}


function dance() {
  console.log("dance");
}


// function checkMood(mood) {
//   if (mood === "good") {
//     sing();
//   } else {
//     cry();
//   }
// }

// checkMood("good");
// checkMood("sad");

function checkMoodCallBack(mood, goodCallback, badCallback) {
  if (mood === "good") {
    goodCallback();
  } else {
    badCallback();
  }
}


checkMoodCallBack("good", dance, cry);
checkMoodCallBack("Not bad", dance, sing);