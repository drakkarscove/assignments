var square = document.getElementById();
square.addEventListener("onmouseover", over(), false);
square.addEventListener("onmouseout", out(), false);

function over(){
// changes the internal color of the square from orange to blue when the mouse pointer is inside the square.
//document.getElementById("squareBlue").addEventListener("onmouseover", function(over){
  //document.getElementById("squareBlue").style.backgroundColor = blue;
  square.setAttribute("onmouseover", squareOrange, true);
};

function out(){, 
// changes the internal color of the square from blue back to orange when mouse point is moved away from the square.
//document.getElementById("squareOrange").addEventListener("onmouseout", function(out){
  //document.getElementById("squareOrange").style.backgroundColor = "orange";
  square.setAttribute("onmouseout", squareBlue, true);
};
