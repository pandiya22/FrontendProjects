const images=['../images/img 1.jpeg','../images/img 2.webp','../images/img 3.jpg','../images/img 4.jpg'];
let imageindex=0;
const imageElement=document.getElementById('image');
function showimage(index){
    imageElement.src=images[index];
}
setInterval(()=>{
    imageindex=(imageindex+1)%images.length;
    showimage(imageindex);
},3000);
function right(){
    imageindex=(imageindex + 1) % images.length;
    showimage(imageindex);
}
function left(){
    imageindex=(imageindex - 1 + images.length)%images.length;
    showimage(imageindex);
}