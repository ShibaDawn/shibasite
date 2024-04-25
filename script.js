let counter = 1;
let ourImage = document.querySelector("#ourImage");

ourImage.addEventListener("click", function() {
  ourImage.src = `Images/gal${counter}.jpg`;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
});

var myImage = new Image("img1");
myImage.src = "Images/gal1.jpg";

var spades = [];
for(var i = 1; i < 14; i++){
    var spade = new Image();
    spade.src = "Images/gal"+i+".jpg";
}



const image = document.createElement("img");
image.src = "Images/gal1.jpg";