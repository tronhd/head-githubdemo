var fruits=[
  ["apple", 25],
  ["bannana", 20],
  ["coconut", 20],
  ["grape", 10],
  ["grapefruit", 5],
  ["orange", 4],
  ["pear", 8],
  ["pineapple", 10],
  ["plum", 14],
  ["strawberry", 18]
]



function seeStock(){
 var input = document.getElementById('userInput').value;
 var valid = false;
 for(var i=0; i<fruits.length; i++) {
   if(input==fruits[i][0]){
     console.log(fruits[i][1]);
     valid = true;
   } 
 } 
 if(!valid) {
   console.log('try again!');
 }
}

function addStock(){
  var input = document.getElementById('userInput').value;
  var valid = false;
 for(var i=0; i<fruits.length; i++){
   if(input==fruits[i][0]){
     console.log(fruits[i][1]++);
     valid = true;
   }
 } 
   if(!valid) {
   console.log('item not found');
 }
}

function removeStock(){
  var input = document.getElementById('userInput').value;
  var valid = false;
 for(var i=0; i<fruits.length; i++){
   if(input==fruits[i][0]){
     console.log(fruits[i][1]-- &&0);
     valid = true;
   }
 } 
   if(!valid) {
   console.log('item not found');
 }
}
   