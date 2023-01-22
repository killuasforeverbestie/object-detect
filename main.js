img="";
status="";
objects-[];
function preload(){
img=loadImage('dog_cat.jpg');
}

function setup(){
canvas=createCanvas(640, 420);
canvas.position(900, 300);
objectDetector=ml5.objectDetector('cocossd',modelloaded);
document.getElementById("status").innerHTML="status: detecting objects";
}

function draw(){
image(img,0,0,640,420);
if(status != ""){
for(i=0; i<objects.length; i++){
document.getElementById("status").innerHTML="status:objectdetected"
fill("#FF0000")
percent=floor(objects[i].confidence*100)
text(objects[i].label+" "+percent+"%",objects[i].x+15,objects[i].y+15)
noFill()
stroke("#FF0000")
rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height)
}
}
}
function modelloaded(){
console.log("modelloaded")
status=true
objectDetector.detect(img,gotresult)

}
function gotresult(error,results){
if(error){
console.log(error)
}
console.log(results)
objects=results
}
