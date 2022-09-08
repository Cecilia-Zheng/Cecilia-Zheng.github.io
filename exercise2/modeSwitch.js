let isDarkMode= false;

function switchModes(){
    //Make sure to have triple equal signs.//
    if(isDarkMode=== false){
    document.documentElement.style.setProperty("--col-01","#ffffff");
    document.documentElement.style.setProperty("--col-02","#000");
    document.getElementById("modeButton").innerHTML = "Dark Mode";
    isDarkMode= true;
  
    } else{
    document.documentElement.style.setProperty("--col-01","#000");
    document.documentElement.style.setProperty("--col-02","#ffffff");
    document.getElementById("modeButton").innerHTML = "Light Mode";
    isDarkMode= false;
    }

}