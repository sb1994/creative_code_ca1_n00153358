//Test 2- Tie canvas and asscociated inputs to the dom
let sizeSlider;
let opacitySlider;
let hueSlider;
let brightnessSlider;
let saturationSlider;
let shapeRadio;
let angle = 0;

let colorImgs = [];
// let numOfCircles = 0;

let rows = 10;
let columns = 10;
let rowWidth = 0;
let colHeight = 0;
let pointsData = [];
function preload() {
  for (let i = 0; i < 5; i++) {
    colorImgs[i] = loadImage(`../data/color-${i}.jpg`);
  }
}
function setup() {
  // console.log(colorImgs);

  //basic canvas setup
  // rectMode(CENTER);
  //setting the inputs to divs in the dom
  let canvas = createCanvas(1240, 1754);
  canvas.parent("canvasHolder");
  angleMode(DEGREES);
  colorMode(HSB, 255, 255, 255, 255);

  noStroke();
}

function draw() {
  background(255);
  noLoop();

  rowWidth = Math.floor(width / columns);
  colHeight = Math.floor(height / rows);
  fill(255);

  stroke(90, 90, 90);
  rect(0, 0, rowWidth, colHeight);
  // Create  rows and poionts
  for (i = 0; i < rows; i++) {
    // Create a column
    for (j = 0; j < columns; j++) {
      rect(j * rowWidth, i * colHeight, rowWidth, colHeight);
      strokeWeight(4);
      //points that
      point(
        random(j * rowWidth - rowWidth, j * rowWidth),
        random(i * colHeight - colHeight, i * colHeight)
      );
    }
  }
  // console.log(rowWidth, colHeight);
}
