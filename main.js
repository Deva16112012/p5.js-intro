function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    v=createCapture(VIDEO);
    v.hide()
    color1="";
}
function draw(){
    image(v,0,0,640,480);
    tint(color1);
}
function take_snapshot(){
    save("Img.png");
}
function filter1(){
    color1=document.getElementById("color").value;

}