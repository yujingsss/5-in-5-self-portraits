const bank = ['0','1','2','3','4','5','6','7','8','9',
'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let button, buttonSave;
let c;
let d = 32;
let x = [];
let description1;

function setup() {
    c = createCanvas(960,540);
    background(220);
    // console.log(bank.length);
    description1 = createP('This is a 32 bit file name generator. All photo data downloaded from Instagram are named using a form of 32 bit number and letter. In this technology world, our lives have a very close realtionship with numbers and letters.');
    description1.position(width + 75, 100);
    description1.style('width', '225px');
    button = createButton("GENERATE");
    button.position(75,125);
    button.style('background-color', 'white');
    button.style('border', '1px solid black');
    button.mousePressed(()=>{
        x = [];
        for (let i = 0; i < d; i++) {
            let newx;
            newx = bank[floor(random(bank.length))];
            // console.log(bank[floor(random(bank.length + 1))]);
            x.push(newx);
        }
        // console.log(x);
        let r = floor(random(0,255));
        let g = floor(random(0,255));
        let b = floor(random(0,255));
        background(r, g, b);
        fill(b, r, g);
        textSize(40);
        text(x.join('') + '.jpg' , 85, height/2);
    });
    buttonSave = createButton("SAVE");
    buttonSave.position(75,160);
    buttonSave.style('background-color', 'white');
    buttonSave.style('border', '1px solid black');
    buttonSave.mousePressed(()=>{
        saveCanvas(c, x.join(''), 'jpg');
    });
}