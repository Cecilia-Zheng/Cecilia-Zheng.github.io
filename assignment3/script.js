
// COMMENT: I used the light and dark mode javascript that we learnt in our previous exercise as a reference for this.
 let isnight= false;
 function change(){
     if(isnight=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/bg2.png)";
    isnight= true;
     } else{
        document.getElementById("bg1").style.backgroundImage = "url(img/bg1.png)";
    isnight= false;
    document.getElementById("intro").innerHTML = "Hmmm... there seems to be some things hidden in this room. Go explore around!<br><br> Hint: Keep the room light off at all times!";
     }
 }

//  Comment: Only able to do half of the image change. Couldnt use the same method as bg1 and bg2 as bg2 isn't properly put in html.
 let isBear= false;
 function bear(){
     if(isBear=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/bear.png)";
    isBear= true;
     } else{
        document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
    isBear= false;
     }
 }

 let ispainting= false;
 function painting(){
     if(ispainting=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/painting.png)";
        ispainting= true;
     } else{
        document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
        ispainting= false;
     }
 }

 let isflower= false;
 function flower(){
     if(isflower=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/flower.png)";
        isflower= true;
     } else{
        document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
        isflower= false;
     }
 }


 let isbed= false;
 function bed(){
     if(isbed=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/bed.png)";
        isbed= true;
     } else{
        document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
        isbed= false;
     }
 }


 let isbook= false;
 function book(){
     if(isbook=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/book.png)";
        isbook= true;
     } else{
        document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
        isbook= false;
     }
 }

 let isdoor= false;
 function door(){
     if(isdoor=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/door.png)";
        isdoor= true;
     } else{
        document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
        isdoor= false;
     }
 }


 
//  var sound1 = new buzz.sound("sound/ding.mp3");

//  window.onload = function() {
//    document.getElementById('1').addEventListener('mouseover', function () {sound1.play();}); 
// };

// Comment: window button doesnt work
//  let iswindow= false;
//  function window(){
//      if(iswindow=== false){
//         document.getElementById("bg1").style.backgroundImage = "url(img/window.png)";
//         iswindow= true;
//      } else{
//         document.getElementById("bg2").style.backgroundImage = "url(img/bg2.png)";
//         iswindow= false;
//      }
//  }

//  let isdark= false;
//  function bgcolour(){
//      //Make sure to have triple equal signs.//
//      if(isdark=== false){
//      document.documentElement.style.setProperty("--col-01","#ffffff");
//      document.documentElement.style.setProperty("--col-02","#000");
//      document.getElementById("bgcolour").innerHTML = "dark";
//      isdark= true;
   
//      } else{
//      document.documentElement.style.setProperty("--col-01","#000");
//      document.documentElement.style.setProperty("--col-02","#ffffff");
//      document.getElementById("bgcolour").innerHTML = "light";
//      isdark= false;
//      }
 
//  }

// document.getElementById('btnID').onClick = function(event){
//     document.getElementById('bg2').className = "show";
// }

// document.getElementById('btnID').onClick = function(event){
//       document.getElementById('bg1').className = "hidden";
// }	

// function show() {
//     var Image_Id = document.getElementById('bg1');
//     if (Image_Id.src.match("bg1")) {
//         Image_Id.src = "bg2";
//     }
//     else {
//         Image_Id.src = "bg1";
//     }
// }