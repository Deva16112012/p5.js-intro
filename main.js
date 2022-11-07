prediction1="";
prediction2="";

camera=document.getElementById("camera");
Webcam.attach("#camera")
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'png',
    png_quality: 90
 });

function capture_image(){
    Webcam.snap(function(pic){
        document.getElementById("result").innerHTML='<img id="ig" src="'+pic+'"/>';
    });
}
console.log("ml5 version is"+ml5.version);
x=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/D0_MyW5I1/model.json',modelloaded);
function modelloaded(){
    console.log("Model is succses fully loaded");
}
function predict_gesture(){
    y=document.getElementById("ig");
    x.classify(y,gotResult);
}
function gotResult(error,result){
    if(error){
        console.log(error);
    }
    else{
        console.log(result);
        speak();
        document.getElementById("result_emotion_name").innerHTML=result[0].label;
        document.getElementById("result_emotion_name2").innerHTML=result[1].label;
        prediction1=result[0].label;
        prediction2=result[1].label;
        if(result[0].label == "Amazing"){
            document.getElementById("res").innerHTML="&#128076;";
        }
        if(result[0].label == "Best"){
            document.getElementById("res").innerHTML="&#128077;";
        }
        if(result[0].label == "Clap"){
            document.getElementById("res").innerHTML="&#128079;";
        }
        if(result[1].label == "Victory"){
            document.getElementById("res2").innerHTML="&#9996;";
        }
    }
}
function speak(){
    var synth = window.speechSynthesis;
    g="the first prediction is"+prediction1;
    h="the 2nd prediction is"+prediction2;
    var utterThis = new SpeechSynthesisUtterance(g+h);
    synth.speak(utterThis);
}