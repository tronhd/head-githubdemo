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

    var counter= 0;
    while(counter < 100){
      if(counter % 3== 0);
       counter = "fizz";{
      }if(counter / 5== 0);
        counter = "buzz";{
      } if(counter % 3== 0 && counter % 5==0)
          counter = "fizzbuzz"
        console.log(counter);
       counter++}

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

var l = today(2, 40)
  function today(w, e){
    return w - e;{
      for(l ; l<40; l++){
        console.log(l)
      }
    }
  }
















