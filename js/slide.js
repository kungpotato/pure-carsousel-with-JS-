var a = 0; // a = slide index
var myVar;
slide();

function startSlide(){
     myVar = setInterval(slide,5000);
}

function slide(){
    var x = document.getElementsByClassName("my_slide");
   //  console.log(x.length)
   for(i = 0; i < x.length; i++){
        x[i].style.display = "none"; // hide all img
   }
    a++;
    if(a > x.length){a = 1}
    x[a-1].style.display = "block";
    //setTimeout(slide, 3000);
}

function stopSlide() {
  clearInterval(myVar);
}
