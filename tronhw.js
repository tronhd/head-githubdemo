var x = "dog";
var number = 1;
console.log(x * number);
console.log(4 + 7);
console.log(2 + true);

//CONDITINAL
  //first attempt
var count= 2;
var result;
var answer;
var count1= count + 5;
var count2= (count + 5) * 2;
  console.log(count2)
var count3= ((count + 5) * 2) % 3;
  console.log(count3)
var count4= (((count + 5) * 2) % 3) % 2;
  console.log(count4)

if(count4 === 0){
    result = "it's right because count4 is 0";
} else if(count4 > 0) {
    result = "excuse me what";
} else
    result = "undefined";
if(count4 >= 0){
    answer = "count is any integer";
} else 
  console.log(answer)

  //revamped
var h = myFunc(2,5,2,3,2);
  function myFunc(a,b,c,d,e){
  return ((a+b)*c%d%e);
};
    console.log(h);

    var h = myFunc(2,5,-5,3,2);

    function myFunc(a,b,c,d,e){
      return ((a+b)*c*d*e);
    }
       if(h === 0){
        console.log("That is how it should be.");
      } else if(h > 0){
          console.log("Ever so slowly I'm changing the game.");
      }   else{
            console.log("Everything is coming up negative my man.");
      }
    
    




//LOOP-revamped

var th
    for(th= 0; th<50;th++) {
        console.log(th);
    }

var count= 0;
    while(count < 50){
      if(count % 2== 0)
        console.log(count);
        count++;
    }        

    var h = 1;
    for(h;h<101;h++){
      if(h%3===0 && h%5===0){  //(t % 15)
          console.log(h+" fizzbuzz");
      } else if(h % 3=== 0){
          console.log(h+" buzz");
        }else if(h%5===0){
          console.log(h+" fizz");
      } else;
      }


//FUNCTION

var h = hello(4, 7);
  function hello(a, b){
    return a + b;
  }
console.log(h)

var h = dog(3, 6);
  function dog(c, d){
    return c * d;
  }
console.log(h)

function doggo(alpha, omega){
  for(var d = alpha; d <= omega; d++) {
    console.log(d);
  }
}

doggo(4, 47)



var x= 4
  
function cat(c,d,x){
  var animal= c+d+x;
  return animal;
}
console.log(cat(5,6,x))


(function(){
  var i = "I did it some how, maybe?";
  console.log(i);
})();

//MATH
  

  function randomCheck(){   if(document.getElementById('userInput').value > 7){
    console.log("YYYYEEEEEESSSSS")
  } else{
    console.log("WWWWWHHHHHYYYY")
  }
  console.log(document.getElementById('userInput').value);
  }









