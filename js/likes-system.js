// https://www.youtube.com/watch?v=H-9jCNhLe-Q
let particles = [];
let pNum;
let img;
let dRange = 120;
let description1, description2;

function preload() {
  img = loadImage('images/like@0,5x-black.png');
}
function setup() {
  createCanvas(960, 540);
  pNum = Math.floor(width/10);
  for (let i = 0; i < pNum; i++) {
    particles.push(new Particle());
  }
  description1 = createP('This is a visualization of likes system on Instagram. We \'like\' some post depending on our interests or other factors, but all of those likes are related to each other and generate a system. This like system is not only the representation of ourselves but also create a personalized profile for Instagram to send us push norifications and ads.');
  description2 = createP('Move MOUSE around the canvas will change the radiation range of our \'likes\' in the whole system.');
  description2.position(width + 50, 125);
  description1.position(width + 50, 225);
  description1.style('width', '225px');
  description2.style('width', '225px');
}

function draw() {
  background(255);
  dRange = map(mouseX,0,width,0,175);
  particles.forEach((p, index)=> {
    p.update();
    p.draw();
    p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor () {
    this.pos = createVector(random(width),random(height));
    this.size = 15;
    this.vel = createVector(random(-2,2),random(-2,2));
  }
  update() {
    this.pos.add(this.vel);
    this.edges();
  }
  draw() {
    // noStroke();
    // fill(0);
    // circle(this.pos.x, this.pos.y, this.size);
    image(img, this.pos.x, this.pos.y, this.size, this.size);
  }
  edges() {
    if (this.pos.x < 0 || this.pos.x > width) {
      this.vel.x *= -1;
    }
    if (this.pos.y < 0 || this.pos.y > height) {
      this.vel.y *= -1;
    }
  }
  checkParticles(particles) {
    particles.forEach(particle=> {
      const d = dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      if (d < dRange) {
        stroke(0, 100);
        line(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y);
      }
    });
  }
}