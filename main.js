function preload(){
    clown_nose=loadImage('https://i.postimg.cc/8Pg68T0s/clown-nose-clipart-2.png')
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(video);
video.size(300,300);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotposes);
}
function modelLoaded(){
    console.log('PoseNet Is Initialized');
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x="+noseX);
        console.log("nose y="+noseY);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
    }
}
function draw(){
image(video,0,0,300,300);
circle(noseX,noseY,20);
fill(255,0,0);
stroke(255,0,0);
image(clown_nose,noseX,noseY,30,30);
}
function takesnapshot(){
    save('myFilterImage.png');
}