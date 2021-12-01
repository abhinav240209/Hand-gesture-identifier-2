//https://teachablemachine.withgoogle.com/models/Y4hKHYor1/model.json

Webcam.set({
   width:350,
   height:300,
   image_format:'png',
   png_quality:90
});

 myWebcam=document.getElementById("camera");
 Webcam.attach(myWebcam);



function capture(){
   Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'>";

   });

}

function predict(){
   console.log("ml5 version", ml5.version);
   classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Y4hKHYor1/model.json", modelLoaded);
  
}




function modelLoaded() {
     console.log("model loaded");
     img=document.getElementById("captured_image");
     classifier.classify(img, gotResult);
}



function gotResult(error, results) {
 if(error) {
   console.error(error);
 }
 else{
   console.log(results);
      
 }
}


