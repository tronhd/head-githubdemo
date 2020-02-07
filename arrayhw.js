//first time with arrays. Computer start counting from 0.
//There are ten items in this array. 
//Apple has a value of 0 and strawberry has a value of 9.
var fruits =["apple","oranges","grapefruit",
            "plum","grapes","bannna","pineapple",
            "coconut","pear","strawberry"];
console.log(fruits)
//asking for fruits will give everything in the brackets


var dogs=["wolf","hyena","fox"];
console.log(dogs[1]);
//calling a name and a value will bring forth only the item in that value.
//hyena has the value of 1
            
dogs.push("husky");                                           
//.push is a command to add an item to the end of an array
console.log(dogs)
//calling dogs now would show that 'husky' added to the end of the array


var clothes = ["shirt","pants","dress","hat"];
//A for loop that will call every item in the array seperately
for(var i = 0; i < clothes.length; i++){
  console.log(clothes[i]);
}
//i++ frist time with increments. increases by a value of 1 each loop unless specified


var fruits =["apple","oranges","grapefruit","plum","grapes","bannna","pineapple","coconut","pear","strawberry"];
//The length property returns the length of a string (number of characters).
fList= fruits.length
for (f = 0; f < fList; f++){
  console.log(fruits[f].charAt(0).toUpperCase()+fruits[f].slice(1))
}
//charAt is designating where the value should be started from
//toUpperCase is a command to make an element capitalized
//slice- selects a part of an array, and returns the new array
  //need to practice more with splice