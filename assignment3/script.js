
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

//  Comment: I was only able to do half of the image change for all the hidden buttons. Couldnt use the same method as the above code.
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