import p5 from "p5";

let x = 100;
let y = 100;

const sketch = (p: p5) => {
  p.setup = () => {
    p.createCanvas(400, 400);
  };

  p.draw = () => {
    p.background(220);
    p.ellipse(x, y, 50, 50);
  };
};

new p5(sketch);