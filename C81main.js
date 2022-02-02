var canvas=document.getElementById("mycanvas");
var lastpositionx;
var lastpositiony;
var ctx=canvas.getContext("2d")
var mouseevent="empty";
var width=screen.width;
newwidth=screen.width-70;
newheight=screen.height-300;
if (width <992 ) {
    canvas.width=newwidth;
    canvas.height=newheight;
    document.body.style.overflow="hidden";
}
function red(){
    color="red";
    
}
function blue(){
    color="blue";
    
}
function green(){
    color="green";
    
}
function pink(){
    color="pink";
    
}
function yellow(){
    color="yellow";
    
}
function purple(){
    color="purple";
    
}


canvas.addEventListener("mousedown",my_mousedown);
canvas.addEventListener("mouseup",my_mouseup);
canvas.addEventListener("mousemove",my_mousemove);
canvas.addEventListener("mouseleave",my_mouseleave);
canvas.addEventListener("touchstart",press)
canvas.addEventListener("touchmove",move)

function my_mousedown(e){
    mouseevent="mousedown";
    ctx.strokeStyle=color;
   

    
}
function my_mouseup(e){
    mouseevent="mouseup";
   

    
}
function my_mousemove(e){
    Mousex=e.clientX-canvas.offsetLeft;
    Mousey=e.clientY-canvas.offsetTop;
    console.log("x:"+Mousex+",y:"+Mousey);
   if (mouseevent=="mousedown"){
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=4;
       ctx.moveTo(lastpositionx,lastpositiony)
       ctx.lineTo(Mousex,Mousey);
       ctx.stroke();
   }
   lastpositionx=Mousex;
   lastpositiony=Mousey;

    
}
function my_mouseleave(e){
    
    mouseevent="mouseleave";

    
}

function eraser(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}
function press(e){
    ctx.strokeStyle=color;

}
function move(e){
    ctx.strokeStyle=color;
    Mousex=e.touches[0].clientX-canvas.offsetLeft;
    Mousey=e.touches[0].clientY-canvas.offsetTop;
    console.log("x:"+Mousex+",y:"+Mousey);
    ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=4;
       ctx.moveTo(lastpositionx,lastpositiony)
       ctx.lineTo(Mousex,Mousey);
       ctx.stroke();
       lastpositionx=Mousex;
       lastpositiony=Mousey;
}

