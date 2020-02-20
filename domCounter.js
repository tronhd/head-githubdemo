var image= document.getElementById("image");
var down= document.getElementById("down");
  count = 50;
 down.onclick = function() {
      if(count >= 5){
          count -= 5;
      } else if(count == 0){
        image.style.display= 'block';
        //else isnt realy working but its in there
      }else{
          console.log(alert("Stop Clicking")),
            console.log("Seriously");
      }down.innerHTML = "Click Here: " + count; 
    };