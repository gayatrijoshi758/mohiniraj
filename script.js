
document.addEventListener("DOMContentLoaded", function() {

    var images = document.querySelectorAll('.img-section img');
    var currentIndex = 0;
    var interval = 4000;
  
    function changeImage() {
  
      for (var i = 0; i < images.length; i++) {
        images[i].style.display = 'none';
      }
  
      currentIndex = (currentIndex + 1) % images.length;
      images[currentIndex].style.display = 'block';
    }
  
    setInterval(changeImage, interval)
  }
  )
  
  
  function toggleMenu() {
    var menu = document.getElementById("navList");
    if (navList.style.display == "block") {
      navList.style.display = "none";
    }
    else {
      navList.style.display = "block";
    }
  }