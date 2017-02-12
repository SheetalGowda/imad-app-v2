console.log('Loaded!');
alert("welocome");
var img=document.getElementById("madi");
var marginleft=0;
function moveRight()
{
marginleft=marginleft+10;
img.style.marginLeft=marginleft+px;
}
img.OnClick=function(){
    var interval=setInterval(moveRight,50);
}