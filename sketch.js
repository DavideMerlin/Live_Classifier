let mobilenet;
let video;
let label = '';

//load model
function modelReady() {
  console.log('Model is ready');
  mobilenet.predict(gotResults);
}

//correction part
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    //console.log(results);
    label = results[0].className;
    //repeat prediction if not happy with result
    mobilenet.predict(gotResults);
  }
}



//create canvas and get webcam
function setup() {
  createCanvas(640, 550);
  video = createCapture(VIDEO);
  video.hide();
  background(0);
  mobilenet = ml5.imageClassifier('MobileNet', video, modelReady);
}

// canvas measurements
function draw() {
  background(0);
  image(video, 0, 0);
  fill(255);
  textSize(32);
  text(label, 10, height - 20);

}
