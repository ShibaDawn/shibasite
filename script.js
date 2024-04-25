let counter = 1;
let ourImage = document.querySelector("#ourImage");

ourImage.addEventListener("click", function() {
  ourImage.src = `Images/gal${counter}.jpg`;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
});
