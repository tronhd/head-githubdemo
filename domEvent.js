var tle = document.getElementById("title");
var fst = document.getElementById("listItemOne");
var snd = document.getElementById("listItemTwo");
var thd = document.getElementById("listItemThree");


function mOver(obj) {
  obj.innerHTML = "Don't do it!!";
  tle.innerHTML = "Stop!";
  fst.innerHTML = "Collaborate and Listen";
  snd.innerHTML = "In The Name Of Love ";
  thd.innerHTML = "Hammer Time";
}

function mOut(obj) {
  obj.innerHTML = "Coward";
  obj.style.fontWeight ="bold";
  tle.innerHTML = "Disappointing";
  fst.innerHTML = "Just couldn't take that last step.";
  snd.innerHTML = "So close yet so far. ";
  thd.innerHTML ="Oppurnity knocked and you were passed out on the couch.";
}

function click(obj) {
  obj.innerHTML = "You actually clicked";
  tle.innerHTML = "It Was Test";
  fst.innerHTML = "Not Even A Hard Test";
  snd.innerHTML = "I Didn't Even Ask Questions";
  thd.innerHTML ="Congratutions!! Time Spent Here Is Gone Forever";
}