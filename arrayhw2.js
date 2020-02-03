var fruits=[
    {type:"apple",stock:20},
    {type:"orange",stock:10},
    {type:"grapefruit",stock:40},
    {type:"grape",stock:0},
    {type:"bannana",stock:20},
    {type:"pineapple",stock:20},
    {type:"coconut",stock:10},
    {type:"pear",stock:15},
    {type:"starwberry",stock:100},
    {type:"plum",stock:15}
   ];
   
   displayFruit();
   function searchIndex(){
   console.log(document.getElementById('userInput').value);
   function displayFruit();
   }
   
   function displayFruit(){
   document.getElementById("demo").innerHTML=
     fruits[0].type + " " + fruits[0].stock
   }