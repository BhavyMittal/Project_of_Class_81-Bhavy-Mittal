canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
var color = "blue";

ctx.beginPath();
ctx.strokeStyle = "Grey";
ctx.lineWidth = 4;
ctx.rect(150,140,420,170);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Blue";
ctx.lineWidth = 10;
ctx.arc(250,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Black";
ctx.lineWidth = 10;
ctx.arc(350,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "red";
ctx.lineWidth = 10;
ctx.arc(450,210,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Yellow";
ctx.lineWidth = 10;
ctx.arc(300,250,40,0,2 * Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = "Green";
ctx.lineWidth = 10;
ctx.arc(400,250,40,0,2 * Math.PI);
ctx.stroke();



canvas.addEventListener("mousedown", my_mouse);

function my_mouse(e) {
    mousex = e.clientX - canvas.offsetLeft;
    mousey = e.clientY - canvas.offsetTop; 
   circle(mousex,mousey);
}

function circle(mousex,mousey){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth = 15;
    ctx.arc(mousex,mousey,50,0, 2*Math.PI);
    
    ctx.stroke();
}

function erase(){
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}

function Reload() {
    location.reload();
 }

