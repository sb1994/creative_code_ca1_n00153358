//Test 2- Tie canvas and asscociated inputs to the dom
let sizeSlider;
let opacitySlider;
let hueSlider;
let brightnessSlider;
let saturationSlider;
let shapeRadio;
function setup() {
  //basic canvas setup
  colorMode(HSB, 255, 255, 255, 255);
  rectMode(CENTER);

  //setting the inputs to divs in the dom
  let canvas = createCanvas(400, 400);
  canvas.parent("canvasHolder");
  //stroke Radio to set wether there should be stroke
  //shape radio and initial setup
  strokeRadio = createRadio("strokeRadio");
  strokeRadio.parent("strokeRadio");
  strokeRadio.option("No Stroke");
  strokeRadio.option("Stroke");
  strokeRadio._getInputChildrenArray()[0].checked = true;
  //size slider
  sizeSlider = createSlider(10, 100, 40);
  sizeSlider.parent("sizeSlider");

  //hsb color sliders
  hueSlider = createSlider(0, 255, 100);
  hueSlider.parent("hueSlider");
  brightnessSlider = createSlider(0, 255, 100);
  brightnessSlider.parent("brightnessSlider");
  saturationSlider = createSlider(0, 255, 100);
  saturationSlider.parent("saturationSlider");
  opacitySlider = createSlider(0, 255, 100);
  opacitySlider.parent("opacitySlider");

  //shape radio and initial setup
  shapeRadio = createRadio("shapeRadio");
  shapeRadio.parent("shapeRadio");
  shapeRadio.option("Circle");
  shapeRadio.option("Rect");
  shapeRadio._getInputChildrenArray()[0].checked = true;
}

function draw() {
  background(0);
  if (strokeRadio._getInputChildrenArray()[0].checked) {
    noStroke();
  } else {
    stroke(200, 200, 200);
  }

  if (shapeRadio._getInputChildrenArray()[0].checked) {
    push();
    translate(width / 2, height / 2);
    fill(
      hueSlider.value(),
      saturationSlider.value(),
      brightnessSlider.value(),
      opacitySlider.value()
    );
    ellipse(0, 0, sizeSlider.value(), sizeSlider.value());

    pop();
  } else {
    push();
    translate(width / 2, height / 2);
    fill(45, 100, 255, opacitySlider.value());
    rect(0, 0, sizeSlider.value(), sizeSlider.value());

    pop();
  }
}
