
document.addEventListener("DOMContentLoaded",function()
{

    var images=document.querySelectorAll('.img-section img');
    var currentIndex=0;
    var interval=10000;

    function changeImage(){

        for(var i=0; i<images.length; i++){
            images[i].style.display='none';
        }

        currentIndex=(currentIndex+1)%images.length;
        images[currentIndex].style.display='block';
    }

    setInterval(changeImage,interval)
}
)