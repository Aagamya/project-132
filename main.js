img="";
status="";
function preload(){
    img=loadImage("dog_cat.jpg")
}


function setup(){
 canvas=createCanvas(700,500)
 canvas.center()
 objectDetector=ml5.objectDetector("cocossd",modelLoaded)
 document.getElementById("Status").innerHTML= "Status: Detecting Objects"
}

function draw(){
    image(img,0,0,700,500)
    fill("red")
    textSize(20)
    text("dog",100,100)
    text("cat",350,100)
    noFill()
    stroke("red")
    rect(80,70,450,400)
    
   
   rect(300,70,350,390)
    

}

function modelLoaded(){
console.log(modelLoaded)
status=true
objectDetector.detect(img,gotResults)
}

function gotResults(error,results){
if(error){
    console.log(error)
}
else{
    console.log(results)
}
}





