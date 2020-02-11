var down= document.getElementById("down"),
  count = 0;

    down.onclick = function() {
      count -= 4;
      down.innerHTML = "Going Down: " + count;
    };