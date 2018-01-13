setup = () => {
  createCanvas(200,200);
}

draw = () => {
  rect(50,50,30,30);
  console.log(mouseX/5);
  background(mouseX/5,mouseY/5,mouseX/2);
}
