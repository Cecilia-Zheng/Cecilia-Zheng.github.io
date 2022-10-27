// function show() {
 
//     /* Access image by id and change
//     the display property to block*/
//     document.getElementById('bg2')
//             .style.display = "block";

//     document.getElementById('btnID')
//             .style.display = "";
// }

// function show() {
//     document.getElementById("bg1").style.backgroundImage = "url(img/dark.png)";
//  }

// COMMENT: I used the light and dark mode javascript that we learnt in our previous exercise as a reference for this.
 let isnight= false;
 function change(){
     if(isnight=== false){
        document.getElementById("bg1").style.backgroundImage = "url(img/bg2.png)";
    isnight= true;
     } else{
        document.getElementById("bg1").style.backgroundImage = "url(img/bg1.png)";
    isnight= false;
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


// let isdark= false;
//  function bgcolour(){
//     if(isdark=== false){
//         document.getElementById("bg1").style.backgroundColor = "black";
//     isdark= true;
//      } else{
//         document.getElementById("bg1").style.backgroundColor = "white";
//     isdark= false;
//      }
//  }
 
 
//  let isdooropenBg= false;
//  function door(){
//      //Make sure to have triple equal signs.//
//      if(isdooropenBg=== false){
//         document.getElementById("doorbtn").style.backgroundImage = "";
//     isdooropenBg= true;
//      } else{
//         document.getElementById("bg1").style.backgroundImage = "";
//     isdooropenBg= false;
//      }
//  }



//  trying to do if statement and hover
//  let isLightBg= false;
//  function change(){
//      //Make sure to have triple equal signs.//
//      if(isLightBg=== false){
//         document.getElementById("bg1").style.backgroundImage = "url(img/dark.png)";
//     isDarkBg= true;
//      } else{
//         document.getElementById("bg1").style.backgroundImage = "url(img/light.png)";
//     isDarkBg= false;
//      }
//  }


//  let isDarkMode= false;

//  function switchModes(){
//      //Make sure to have triple equal signs.//
//      if(isDarkMode=== false){
//      document.documentElement.style.setProperty("--col-01","#ffffff");
//      document.documentElement.style.setProperty("--col-02","#000");
//      document.getElementById("modeButton").innerHTML = "Dark Mode";
//      isDarkMode= true;
   
//      } else{
//      document.documentElement.style.setProperty("--col-01","#000");
//      document.documentElement.style.setProperty("--col-02","#ffffff");
//      document.getElementById("modeButton").innerHTML = "Light Mode";
//      isDarkMode= false;
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