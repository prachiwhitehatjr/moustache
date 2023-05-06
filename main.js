nosex=0;
nosey=0;
function preload(){
    clownnose=loadImage('https://i.postimg.cc/sshfQbg3/m.png');
    }
    function setup (){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
    }
    function gotPoses(results){
    if (results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        console.log("nosex="+results[0].pose.nose.x);
        console.log("nosey="+results[0].pose.nose.y);
    }
    
    }
    function draw(){
    image(video,0,0,300,300);

    image(clownnose,nosex-30,nosey,30,30);
    
    }
    function take_snapshot(){
        save('clownnose.png');
    }
    function modelLoaded(){
    console.log('postNetisInitialised');
    
    }
    