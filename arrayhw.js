var fruits =["apple","oranges","grapefruit","plum","grapes","bannna","pineapple","coconut","pear","strawberry"];
console.log(fruits)

var dogs=["wolf","hyena","fox"];
console.log(dogs[1]);
            
dogs.push("husky");                                           

console.log(dogs)

var clothes = ["shirt","pants","dress","hat"];

for(var i = 0; i < clothes.length; i++){
  console.log(clothes[i]);
}


var fruits =["apple","oranges","grapefruit","plum","grapes","bannna","pineapple","coconut","pear","strawberry"];

fList= fruits.length
for (f = 0; f < fList; f++){
  console.log(fruits[f].charAt(0).toUpperCase()+fruits[f].slice(1))
}
