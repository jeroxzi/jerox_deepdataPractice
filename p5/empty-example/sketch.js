
function setup() {
  // put setup code here
  createCanvas(800, 300);
  
  
}

function draw() {
  // put drawing code here
  
  background(1, 75, 100);
  


  fill(237, 34, 93);
  noStroke();
  // ellipse(x, y, size, size);
var diameter = 10;


  for(var i =0; i < width / diameter; i = i+1 ){
    for (var j = 0; j < height / diameter; j = j + 1) {
      ellipse(i * diameter + diameter / 2, j * diameter + diameter / 2, diameter, diameter);
    }

  }
 
  
}