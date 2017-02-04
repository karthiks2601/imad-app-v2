console.log('Loaded!');

//Change the text of the main-text div
var element =document.getElementById('main-text');

element.innerHTML='New Value';

//Move the image
var img=document.getElementById('madi');
var marginLeft=0;
img.onclick = function(){
    var interval=setinterval(moveRight,100);
  
};
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft=marginLeft+ "px";
}