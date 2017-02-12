console.log('Loaded!');
alert("welocome");
var img=document.getElementById("madi");
var marginleft=0;
function moveRight()
{
marginLeft=marginLeft+10;
img.style.marginLeft=marginLeft+'px';
}
img.OnClick=function(){
    var interval=setInterval(moveRight,50);
}