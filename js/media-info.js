let mediaObj;
let storiesNum;
let r, g, b, a;

function preload() {
  mediaObj = loadJSON("data/media.json");
}

function setup() {
  createCanvas(1080, 600);
  frameRate(18);
  textSize(14);
  storiesNum = mediaObj.stories.length;
}

function draw() {
  background(0, 100);
  // print(r, g, b, a);
  for (i = 0; i < storiesNum; i++) {
    r = int(random(10, 255));
    g = int(random(10, 255));
    b = int(random(10, 255));
    a = int(random(150, 255));
    fill(r, g, b, a);
    text(mediaObj.stories[i].taken_at, random(width - 200), random(height));
    text(mediaObj.stories[i].path, random(width - 200), random(height));
  }
}