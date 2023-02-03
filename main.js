Webcam.set({
  width:350,
  height:300,
  image_format : 'png',
  png_quality:90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_picture()
{
  Webcam.snap(function(data_uri) {
      document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
  });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/H1d32apkq/model.json',modelLoaded);

function modelLoaded() {
  console.log("Model Loaded!!!");
}

function speak() {
  var synth = window.speechSynthesis;
  speak_data_1 = "first prediction is"+ prediction_1;
  speak_data_2 = "the second prediction is"+ prediction_2;
  var utterThis = new SpeechSybthesisUtterance(speak_data_1 + speak_data_2);
  synth.speak(utterThis);
}

function check()
{
  img = document.getElementById("captured_image");
  classifier.classify(img, gotResult);
}

function gotResult()
{
  if(error) {
      console.errror(error);
  }
  else {
console.log("results");
document.getElementById("result_hand_name").innerHTML = results[0].label;
document.getElementById("result_hand_name2").innerHTML = results[1].label;
prediction_1 = results[0].label;
prediction_2 = results[1].label;
speak();
if (results[0].label == "Me!")  
{document.getElementById("update_hand").innerHTML ="Kevin!";
}
if (results[0].label == "Dad")  
{document.getElementById("update_hand").innerHTML ="Dad!";
}
if (results[0].label == "Mom")  
{document.getElementById("update_hand").innerHTML ="Mom!";
}
if (results[0].label == "Sister")  
{document.getElementById("update_hand").innerHTML ="Chrishell!";
}

if (results[0].label == "Me!")  
{document.getElementById("update_hand2").innerHTML ="Kevin!";
}
if (results[0].label == "Dad")  
{document.getElementById("update_hand2").innerHTML ="Dad!";
}
if (results[0].label == "Mom")  
{document.getElementById("update_hand2").innerHTML ="Mom!";
}
if (results[0].label == "Sister")  
{document.getElementById("update_hand2").innerHTML ="Chrishell!";
}
  }
    };
