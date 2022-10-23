
function tree(){
    var text = document.getElementById("puno1");
 
var symbols,color;
symbols = "0123456789ABCDEF";
color = "#";

for (var i= 0; i < 6 ; i++ ){
color = color + symbols [Math.floor(Math.random() * 16)]; // to get random color and symbols
}
text.style.color = color ; //to place the color in tree

document.getElementById("hex").innerHTML = color; // to generate the color hex 


}


var sound = document.getElementById("audio");

function Go(){
    Go_color = setInterval(tree,100);
    sound.play();
    sound.loop = true;

}

function hinto(){
    clearInterval(Go_color);
    sound.pause(sound);
}




// //christmas tree

// let rows = 10;
// let columns = 10;

// for (let i = 1; i < rows; i++) {
   
//   for(j = 1; j<=i; j++) {
//  document.write("*");
//   }

//  document.write("<br>");

//  for(j = 1; j<=i; j++) {
//     document.write("^");
//      }
   
// };
// document.write("<br>")