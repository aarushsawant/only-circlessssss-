var mouseEvents="empty";
var lastx,lasty;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e)
{
    mouseEvents="mousedown";
}

canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e)
{
    mouseEvents="mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e)
{
    mouseEvents="mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e)
{
currentx=e.clientX - canvas.offsetLeft;
currenty=e.clientY - canvas.offsetTop;
if(mouseEvents=="mousedown")
{
    ctx.beginPath()
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(currentx,currenty,20,0,2*Math.PI);
    ctx.stroke();
}
lastx=currentx;
lasty=currenty;    
}