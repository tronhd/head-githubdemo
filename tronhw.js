var x = "dog";
var number = 1;
console.log(x * number);
console.log(4 + 7);
console.log(2 + true);

//CONDITINAL

var count= 2;
var result;
var answer;
var count1= count + 5;
var count2= (count + 5) * 2;

console.log(count2)

// the answer should be 2

var count3= ((count + 5) * 2) % 3;

console.log(count3)

//there shouldnt be a remainder or 0

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

//LOOP

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

    var t = 1;

    for(t;t<101;t++){
      if(t%3===0 && t%5===0){
          console.log(t+" fizzbuzz");
      } else if(t % 3=== 0){
          console.log(t+" buzz");
        }else if(t%5===0){
          console.log(t+" fizz");
      } else console.log(t);
      }

//FUNcTION

var t = hello(4, 7);
  function hello(a, b){
    return a + b;
  }
console.log(t)

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

















