noseX = 0;
noseY = 0;
leftwristx = 0;
rightwristx = 0;
difference = 0;

function preload() {

}

function setup() {
    canvas = createCanvas(600,400);
    canvas.position(600,100);

    video = createCapture(VIDEO);
    video.size(300,400);

    poseNet = ml5.poseNet(video, modelloaded);
    poseNet.on('pose', gotposes)
    
}

function modelloaded() {
    console.log("model is loaded");
}

function gotposes(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("NoseX = " + noseX + "NoseY = " + noseY);

        leftwristx = results[0].pose.leftWrist.x;
        rightwristx = results[0].pose.rightWrist.x;
        difference = Math.floor(leftwristx - rightwristx);
        console.log("Leftwrist x = " + leftwristx + "Rightwrist x = " + rightwristx + "Difference = " + difference);
    }
}

function draw() {
    background("#32a852");
    fill("#d7f048");
    textSize(difference);
    text('Mathieu' , 50 , 400);
    document.getElementById("span1").innerHTML = "font size of the text is " + difference;
}