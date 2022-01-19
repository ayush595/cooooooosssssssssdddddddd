imager= "";
status= "";
function preload() {
imager= loadImage("https://miro.medium.com/max/3200/1*MCfQtVCVj6GHHgpN1HX7pg.jpeg");
}
function setup() {
    canvas= createCanvas(500,500);
    canvas.center();
    cocoos= ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("dot").innerHTML= 'status: detecting objects';

}

function modelLoaded() {
    console.log("model is loaded");
    status= true;
  cocoos.detect(imager, gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);

    }
}
function draw() {
    image(imager, 0, 0, 500, 500);
    fill("black");
    text("phone(dog)", 145,149);
    noFill();
    stroke("black");
    rect(100,120,200,200);
    fill("black");
    text("tablet(cat)", 245,349);
    noFill();
    stroke("black");
    rect(248,120,200,200);
    
}