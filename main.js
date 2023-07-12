function setup(){
    canvas=createCanvas(500,500);
    canvas.position(500,170);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,30,30,440,440);
    

    fill("green");
    stroke("green")
    rect(25, 10, 450, 30);
    rect(15,10,30,450);
    rect(455,10,30,450);
    rect(25,455,450,30);
    
    fill("red");
    stroke("red");
    circle(25,25,50);
    circle(475,25,50);
    circle(25,475,50);
    circle(475,475,50);

}

function takesnapshot(){
    save("My_image.png");
}
