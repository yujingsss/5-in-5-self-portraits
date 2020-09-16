let mediaObj;
let storiesNum;
let r, g, b, a;
let button;
let changeC;
let description1, description2;

function preload() {
  mediaObj = loadJSON("data/media.json");
}

function setup() {
  createCanvas(960, 540);
  frameRate(18);
  textSize(14);
  changeC = false;
  storiesNum = mediaObj.stories.length;
  button = createButton("CHANGE CLIENTS");
  button.position(width + 50);
  button.style('background-color', 'white');
  button.style('border', '1px solid black');
  button.mousePressed(()=>{
    changeC =! changeC;
    // print(changeC);
  });
  description1 = createP('This is a visualization of Instagram stories media inforamtion. The text printed on the screen is acquired from the media JSON file of my instagram. The information in this visualization include \'taken_at\' and \'path\'.');
  description2 = createP('Click at the \'CHANGE CLIENTS\' button allows the switch between the visualization of single client and multiple clients information.');
  description1.position(width + 75, 125);
  description2.position(width + 75, 300);
  description1.style('width', '225px');
  description2.style('width', '225px');
}

function draw() {
  background(255, 5);
  // print(r, g, b, a);
  for (i = 0; i < storiesNum; i++) {
    a = int(random(150, 255));
    if (changeC) {
      r = int(random(10, 255));
      g = int(random(10, 255));
      b = int(random(10, 255));
      fill(r, g, b, a);
      background(0, 10);
    } else {
      fill(0, a);
      background(255, 10);
    }

    text(mediaObj.stories[i].taken_at, random(width - 200), random(height));
    text(mediaObj.stories[i].path, random(width - 200), random(height));
  }
}