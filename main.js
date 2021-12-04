canvas=document.getElementById("myCanvas")
ctx=canvas.getContext("2d");
rover_width=100
rover_height=75
rover_image="rover.png"
background_image="mars.jpg"
rover_x=400
rover_y=250
function add(){
background_add=new Image()
background_add.onload=uploadBackground
background_add.src=background_image
rover_add=new Image()
rover_add.onload=uploadrover
rover_add.src=rover_image
}

function uploadBackground(){
ctx.drawImage(background_add,0,0,800,500)
}

function uploadrover(){
ctx.drawImage(rover_add,rover_x,rover_y,rover_width,rover_height)
}
window.addEventListener("keydown",myKeydown)
function myKeydown (e){
    keyPressed = e.keyCode; 
    console.log(keyPressed);
    if(keyPressed == "37"){
        left()
    }
    if(keyPressed == "38"){
        up()
    }
    if(keyPressed == "39"){
        right()
    }
    if(keyPressed == "40"){
        down()
    }

}
function left(){
    if(rover_x >0){
    rover_x=rover_x-10
    uploadBackground()
    uploadrover()
    }
}
function up(){
    if(rover_y>0){
    rover_y=rover_y-10
    uploadBackground()
    uploadrover()
    }
}
function right(){
    if(rover_x<700){
    rover_x=rover_x+10
    uploadBackground()
    uploadrover()
    }
}
function down(){
    if(rover_y<400){
    rover_y=rover_y+10
    uploadBackground()
    uploadrover()
    }
}