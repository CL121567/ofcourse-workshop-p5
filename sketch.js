//https://p5js.org

//03_Colorlines (Exercise 01)
//Link all circles with individual lines
//Color of the line is the mix of the circle colors

//Initialization function
function setup() {
  //Set the size of rendering window - pixels
  createCanvas(700, 400);

  //Size of stroke
  strokeWeight(7);

  //No stroke for shapes
  noStroke();
}

//Rendering function
function draw() {
  //Erase all canvas. Set the color to white
  background(100);

  stroke(186,85,211);
  strokeWeight(6);
  line(50, 50, width-50, 50);

  stroke(0,191,255);
  strokeWeight(6);
  line(50,50,50, height-50);

  stroke(255,0,0);
  strokeWeight(6);
  line(width-50, 50,width-50, height-50);

  stroke(124,252,0);
  strokeWeight(6);
  line(50, height-50,width-50, height-50);

  stroke(124,252,0);
  strokeWeight(6);
  line(50, 50,width-50, height-50);

  stroke(255,255,0);
  strokeWeight(6);
  line(width-50, 50,50, height-50)
  noStroke();

  //Top left corner shape position and color
  fill(0, 0, 255);
  ellipse(50, 50, 100, 100);

  //Top right corner shape position and color
  fill(255, 0, 0);
  ellipse(width-50, 50, 100, 100);

  //Bottom left corner shape position and color
  fill(0, 255, 0);
  ellipse(50, height-50, 100, 100);

  //Bottom right corner shape position and color
  fill(255, 255, 0);
  ellipse(width-50, height-50, 100, 100);


}
