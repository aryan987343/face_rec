Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach(camera)

function photo_1() {
    Webcam.snap(function(data_url) {
    document.getElementById("result").innerHTML = "<img id='img_caught' src='"+data_url+"'>"
    })
}

console.log(ml5.version);

classy = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/I0Mp2n1TD/model.json" ,load_it);

function load_it() {
    console.log("model_loaded");
}

function object_1() {
    image_v = document.getElementById("img_caught");
    classy.classify(image_v , got_result)
}

function got_result(error,result) {
if (error) {
    console.log(error)
}
else {
    console.log(result)
    document.getElementById("object").innerHTML = result[0].label;
    document.getElementById("accuracy").innerHTML = result[0].confidence.toFixed(3);
}
}
